import React from 'react';
import BookList from './features/bookList/BookList';
import bookAuthors from "./assets/bookAuthors";
import './App.css';

function App() {
  return (

    <>
      <div className="App">
        <BookList authors={bookAuthors} />
      </div>
    </>

  );
}

export default App;
