import Button from "../Button";
import { FaTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Table from "../Table";

const AuthorsList = ({authors, onDelete, onMagnifyClick}) => {

  const headers = ["ID", "Nome", "Email", "Ações"];

    return ( <Table headers={headers}>{authors.map((author) => (
          <tr key={author.id}>
            <td>{author.id}</td>
            <td>{author.name}</td>
            <td>{author.email || "Não Informado"}</td>
            <td>
              <div><Button  onClick={() => onDelete(author.id)}>
                <FaTrashAlt />
              </Button>
              <Button onClick={() => onMagnifyClick(author)}><FaMagnifyingGlass />
</Button></div>
              
            </td>
          </tr>
        ))}</Table>
        
      );
}
 
export default AuthorsList;