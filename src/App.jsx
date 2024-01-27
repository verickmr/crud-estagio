import { useState, } from "react";

import Head from "./components/Header";
import Author from "./components/author/Author";
import Book from "./components/books/Book"
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .btn-center {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }

`;

const App = () => {

  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  const handleSaveAuthor = (newAuthor) => {
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  const handleDeleteAll = (authorId) => {
    const updatedAuthors = authors.filter((author) => author.id !== authorId);
    setAuthors(updatedAuthors);

    // Remove os livros associados ao autor excluído
    const updatedBooks = books.filter((livro) => livro.authorId !== authorId);
    setBooks(updatedBooks);

    localStorage.setItem("authors", JSON.stringify(updatedAuthors));
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };


  return (
    <>
      <Head />
      <Grid>
        <Author authors={authors}
        books={books} setBooks={setBooks} onDeleteAll={handleDeleteAll}
        setAuthors={setAuthors} onAddAuthor={handleSaveAuthor} />
        <Book authors={authors} books={books} setBooks={setBooks} />
      </Grid>
    </>
  );
};

export default App;
