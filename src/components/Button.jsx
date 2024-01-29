import styled from "styled-components";

const Btn = styled.div`

position: ${(props) => (props.customStyle ? "absolute" : "relative")};
  top: ${(props) => (props.customStyle ? "5px" : "auto")};
  right: ${(props) => (props.customStyle ? "5px" : "auto")};

   button {
    border-radius: 20px;
    -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    font-weight: 600;

    padding: 5px;
    cursor: pointer;
    color: ${({ customStyle }) => (customStyle ? "#ff0000" : "#009fe3")};
    border-color: ${({ customStyle }) => (customStyle ? "#ff0000" : "#009fe3")};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    display: flex;
    justify-content: center;
  }

  button:hover {
    background: ${({ customStyle }) => (customStyle ? "#ff0000" : "#009fe3")};
    color: #fff;
    text-decoration: none;
    box-shadow: 0px 0px 20px -18px;
  }

  button:active {
    transform: scale(0.95);
  }
`;

const Button = ({ children, onClick, customStyle }) => {
  return (
    <Btn customStyle={customStyle}>
      <button onClick={onClick}> {children}</button>
    </Btn>
  );
};

export default Button;
