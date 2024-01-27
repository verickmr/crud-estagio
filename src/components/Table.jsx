import styled from "styled-components";

const Around = styled.div`
  padding: 2rem;
  
  table {
    width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1rem;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
}

 thead tr {
  background: #009fe3;
  color: #fff;
  text-align: left;
  font-weight: bold;
}

 th,
 td {
  padding: 0.5rem 0.7rem;
}

 tbody tr {
  border-bottom: 1px solid #dddddd;
  transition: all 0.1s ease-in;
}

 tbody tr.active-row {
  font-weight: bold;
  color: #009fe3;
}

 tbody tr:hover,
 tbody tr.active-row:hover {
  background: #dddddd;
}

 tbody tr:nth-of-type(even) {
  background: #f3f3f3;
}

 tbody tr:last-of-type {
  border-bottom: 2px solid #009fe3;
}
`;

const Table = ({ children, headers }) => {
  return (
    <Around>
      <table>
        <thead>
          <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Around>
  );
};

export default Table;
