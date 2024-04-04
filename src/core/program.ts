import fs from "node:fs";
import path from "node:path";

interface IProgramMeta {
	name: string;
	description: string;
	version: string;
}

interface IProgram {
	name: (name: string) => this;
	description: (description: string) => this;
	version: (version: string) => this;
}

export class Program implements IProgram {
	constructor(private meta?: IProgramMeta) {
		const ProgramMetaDefault = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json")).toString("utf8"));
		this.meta = {} as IProgramMeta;
		this.meta.name = ProgramMetaDefault.name;
		this.meta.description = ProgramMetaDefault.description;
		this.meta.version = ProgramMetaDefault.version;
	}
	name(name: string): this {
		this.meta.name = name;
		return this;
	}
	description(description: string): this {
		this.meta.description = description;
		return this;
	}
	version(version: string): this {
		this.meta.version = version;
		return this;
	}
}

export const program = new Program();
