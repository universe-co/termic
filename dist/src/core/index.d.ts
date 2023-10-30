declare class CLI {
    private rows;
    constructor();
    input(msg: string): Promise<string>;
    print(...msgs: string[]): void;
    println(...msgs: string[]): void;
    clear(rows?: number | null): void;
}
export default CLI;
