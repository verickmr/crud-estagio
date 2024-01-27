import { useState, useEffect } from "react";

import Button from "../Button";
import Modal from "../Modal";
import { IoCloseCircle } from "react-icons/io5";

// Autthor imports
import AuthorForm from "./AuthorForm";
import AuthorsList from "./AuthorsList";


const Author = ({ authors, onAddAuthor , setAuthors, books, setBooks, onDeleteAll}) => {

  const handleSaveAuthor = (data) => {
    const newAuthor = { id: Date.now(), ...data };
    onAddAuthor(newAuthor); 
  };

//const [authors, setAuthors] = useState([]);
  const [createAuthorOpen, setCreateAuthorOpen] = useState(false);
  const [infoAuthorOpen, setInfoAuthorOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

useEffect(() => {
    const storedAuthors = JSON.parse(localStorage.getItem("authors")) || [];
    setAuthors(storedAuthors);
  }, []);

const handleAddAuthor = (data) => {
    const newAuthor = { id: Date.now(), ...data };
    const isIdUnique = !authors.some((author) => author.id === newAuthor.id);

  if (!isIdUnique) {
    alert("ID já existe. Escolha um ID único.");
    return;
  }
    setAuthors([...authors, newAuthor]);
    localStorage.setItem("authors", JSON.stringify([...authors, newAuthor]));
    setCreateAuthorOpen(false);
  };

  const handleDeleteAuthor = (id) => {
    const authorToDelete = authors.find((autor) => autor.id === id);

    if (!authorToDelete) {
      console.error("Autor não encontrado para exclusão");
      return;
    }
  
    const isConfirmed = window.confirm(`Deseja realmente excluir o autor ${authorToDelete.name}?`);
  
    
    if (isConfirmed) {
      onDeleteAll(authorToDelete.id);

      const updatedBooks = books.filter((livro) => livro.selected !== id);
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    }
  };

  const handleMagnifyAuthor = (author) => {
    setSelectedAuthor(author);
    setInfoAuthorOpen(true);
  };

    return ( <div><div className="btn-center">
    <Button onClick={() => setCreateAuthorOpen(true)}>
      {"Novo Autor "}
    </Button>
  </div>
  <AuthorsList
    authors={authors}
    onDelete={handleDeleteAuthor}
    onMagnifyClick={handleMagnifyAuthor}
  />
  <Modal
    isOpen={infoAuthorOpen}
    onClose={() => setInfoAuthorOpen(false)}
  >
    {selectedAuthor && (
      <div>
        <h2>Detalhes do Autor</h2>
        <p>ID: {selectedAuthor.id}</p>
        <p>Nome: {selectedAuthor.name}</p>
        <p>Email: {selectedAuthor.email || "Não Informado"}</p>
      </div>
    )}
    <Button customStyle className="close-button" onClick={() => setInfoAuthorOpen(false)}>
      <IoCloseCircle />
    </Button>
  </Modal>

  <Modal
    isOpen={createAuthorOpen}
    onClose={() => setCreateAuthorOpen(false)}
  >
    <AuthorForm onSubmit={handleAddAuthor} />
    <Button customStyle onClick={() => setCreateAuthorOpen(false)}>
      <IoCloseCircle />
    </Button>
  </Modal>
</div> );
}
 
export default Author;