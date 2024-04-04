const fs = require("node:fs/promises");
const path = require("node:path");

class Jira {
    constructor() { }

    async init() {
        const config_file = await fs.readFile(path.join(__dirname, "..", "..", "..", ".jira.json"), "utf8").catch(() => {
            throw new Error(`.jira.json file is not found`);
        });

        try {
            const config = JSON.parse(config_file);
            if (!config.username || !config.token || !config.base_url) {
                throw new Error(`.jira.json file is not valid`);
            }
            this.token = Buffer.from(config.username + ":" + config.token).toString("base64");
            this.base_url = config.base_url;
        } catch (error) {
            throw new Error(`.jira.json file is not valid`);
        }
    }

    is_ticket(ticket) {
        return ticket.match(/^[A-Z]+-[0-9]+$/);
    }

    async get_ticket_title(ticket) {
        await this.init();

        const headers = new Headers({
            "Authorization": "Basic " + this.token,
            "Content-Type": "application/json"
        });

        const response = await fetch(`${this.base_url}rest/api/2/issue/${ticket}?fields=summary`, {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        });

        if (response.status === 404) {
            throw new Error(`Ticket is Not Found`);
        }

        if (response.status === 401) {
            throw new Error(`Unauthorized`);
        }

        if (response.status === 200) {
            const data = await response.json();
            return data.fields.summary;
        }

        throw new Error(`Something went wrong`);
    }
}

module.exports = { Jira };