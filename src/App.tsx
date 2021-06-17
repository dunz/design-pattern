import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BookShelf } from './service/BookShelf';
import { Book } from './service/Book';

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const runIterator = () => {
        const bookShelf = new BookShelf(10);

        bookShelf.appendBook(new Book('아프니까 청춘이다.'));
        bookShelf.appendBook(new Book('말빨이 살아야 한다.'));
        bookShelf.appendBook(new Book('사피엔스'));
        bookShelf.appendBook(new Book('오늘도 사랑이야'));

        const iterator = bookShelf.iterator();

        while (iterator.hasNext()) {
            console.log(iterator.next());
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {' | '}
                    <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
                <button onClick={runIterator}>RunIterator</button>
            </header>
        </div>
    );
}

export default App;
