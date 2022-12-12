import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv className="header">
      <p>My Todo List</p>
      <p>React</p>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin: 0 auto;
  color: #ff7800;
  font-size: 28px;
  font-weight: 800;
`;
export default Header;
