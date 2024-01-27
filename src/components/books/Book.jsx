import { useState, useEffect } from "react";

import Button from "../Button";
import Modal from "../Modal";
import { IoCloseCircle } from "react-icons/io5";
import "../../reset.css"

// Books imports
import BooksList from "./BooksList";
import BookForm from "./BooksForm";

const Book = ({ authors, books, setBooks }) => {
  //const [books, setBooks] = useState([]);
  const [createBookOpen, setCreateBookOpen] = useState(false);
  const [infoBookOpen, setInfoBookOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleAddBook = (data) => {
    const newBook = { id: Date.now(), ...data };
    const isIdUnique = !books.some((book) => book.id === newBook.id);
    
    if (!isIdUnique) {
      alert("ID já existe. Escolha um ID único.");
      return;
    }
    setBooks([...books, newBook]);
    localStorage.setItem("books", JSON.stringify([...books, newBook]));
    setCreateBookOpen(false);
  };

  const handleDeleteBook = (id) => {
    const bookToDelete = books.find((livro) => livro.id === id);

    if (!bookToDelete) {
      console.error("livro não encontrado para exclusão");
      return;
    }

    const isConfirmed = window.confirm(
      `Deseja realmente excluir o livro ${bookToDelete.title}?`
    );

    if (isConfirmed) {
      const updatedBooks = books.filter((livro) => livro.id !== id);
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    }
  };

  const handleMagnifyBook = (Book) => {
    setSelectedBook(Book);
    setInfoBookOpen(true);
  };

  return (
    <div>
      <div className="btn-center">
        <Button onClick={() => setCreateBookOpen(true)}>{"Novo Livro "}</Button>
      </div>
      <BooksList
        books={books}
        onDelete={handleDeleteBook}
        onMagnifyClick={handleMagnifyBook}
      />
      <Modal isOpen={infoBookOpen} onClose={() => setInfoBookOpen(false)}>
        {selectedBook && (
          <div>
            <h2>Detalhes do Livro</h2>
            <p>ID: {selectedBook.id}</p>
            <p>Título: {selectedBook.title}</p>
            <p>Paginas: {selectedBook.pages || "Não Informado"}</p>
          </div>
        )}
        <Button customStyle onClick={() => setInfoBookOpen(false)}>
          <IoCloseCircle />
        </Button>
      </Modal>

      <Modal isOpen={createBookOpen} onClose={() => setCreateBookOpen(false)}>
        <BookForm onSubmit={handleAddBook} authors={authors} />
        <Button customStyle onClick={() => setCreateBookOpen(false)}>
          <IoCloseCircle />
        </Button>
      </Modal>
    </div>
  );
};

export default Book;
