import { Book } from './Book';
import { BookShelf } from './BookShelf';
import { Iterator } from './Iterator';

export class BookShelfIterator implements Iterator {
    #bookShelf: BookShelf;
    #index: number;

    constructor(bookShelf: BookShelf) {
        this.#bookShelf = bookShelf;
        this.#index = 0;
    }

    public hasNext(): boolean {
        return this.#index < this.#bookShelf.getLength();
    }

    public next(): Book {
        const book: Book = this.#bookShelf.getBookAt(this.#index);
        this.#index++;

        return book;
    }
}
