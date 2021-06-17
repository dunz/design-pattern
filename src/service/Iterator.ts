import { Book } from './Book';

export interface Iterator {
    hasNext(): boolean;
    next(): Book;
}
