import styled from "styled-components";

const Fieldset = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  label {
  font-size: 15px;
  width: 90px;
  text-align: right;
  margin-bottom: .5rem;
}

  input, select {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  box-shadow: 0 0 0 1px;
  height: 35px;
  margin-bottom: .5rem;
}
input:focus {
  box-shadow: 0 0 0 2px #009fe3;
}
`
export default Fieldset