const { Jira } = require("./sdk/atlassian");
const { TYPES } = require("./types");

const jira = new Jira();

const key = process.argv[3];
const value = process.argv[4];

if (key === "--message" && value) {
    const type = value.split(" ")[0].toLowerCase();
    const message = value.split(" ").slice(1).join(" ");

    if (!TYPES[type]) {
        process.stderr.write(`Unknown Commit Type: ${type} \n`);
        process.exit(1);
    }

    if (!message) {
        process.stderr.write(`Commit Message is empty \n`);
        process.exit(1);
    }

    const emoji = TYPES[type];

    if (jira.is_ticket(message)) {
        jira.get_ticket_title(message).then(result => {
            process.stdout.write(`${emoji}: ${result} (${message}) \n`);
            process.exit(0);
        }).catch(error => {
            process.stderr.write(`${error.message} \n`);
            process.exit(1);
        });
    } else {
        process.stdout.write(`${emoji}: ${message}`);
    }
} else {
    process.exit(1);
}
