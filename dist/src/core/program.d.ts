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
export declare class Program implements IProgram {
    private meta?;
    constructor(meta?: IProgramMeta);
    name(name: string): this;
    description(description: string): this;
    version(version: string): this;
}
export declare const program: Program;
export {};
