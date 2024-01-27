import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Header = styled.div`
background-color: #009fe3;
color: #eee;
display: flex;
height: 100px;
padding: 10px;
align-items: center;
gap: 20px;
justify-content: space-between;

img{    background-size: 100% auto;
    background-repeat: no-repeat;
width: 120px;
height: 50px;
}


a{
font-size:30px;
color: #eee;
padding: 3px;
}
`
const logo = <img src="../../assets/cs_logo_header.png"alt="logo" />

const Head = () => {
    return ( <Header>{logo}
    <h1>Estagio Front End</h1>
    <div><a href="https://www.linkedin.com/in/victor-erick/"><FaLinkedin /></a>
<a href="https://github.com/verickmr"><FaSquareGithub /></a></div>
    </Header> );
}
 
export default Head;