export class Book {
    readonly #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    public get name(): string {
        return this.#name;
    }
}
