import Button from "../Button";
import { FaTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Table from "../Table";

const BooksList = ({books, onDelete, onMagnifyClick}) => {

  const headers = ["ID", "Título", "Páginas", "Autor", "Ações"];

    return ( <Table headers={headers}>{books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.pages || "Não Informado"}</td>
            <td>{book.selected}</td>
            <td>
              <div><Button c onClick={() => onDelete(book.id)}>
                <FaTrashAlt />
              </Button>
              <Button onClick={() => onMagnifyClick(book)}><FaMagnifyingGlass />
</Button></div>
              
            </td>
          </tr>
        ))}</Table>
        
      );
}
 
export default BooksList;