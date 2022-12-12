import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ContainerDiv from "./CotainerDiv";

const Container = () => {
  const b = useSelector((state) => state.todos.todos);

  return (
    <ContainerWrap>
      <StyleDiv>Working..</StyleDiv>
      {b.map((todo, i) =>
        todo.isDone === false ? (
          <ContainerDiv key={`todo${i}`} todo={todo} text="완료" />
        ) : null
      )}
      <StyleDiv>Done..</StyleDiv>
      {b.map((todo, i) =>
        todo.isDone === true ? (
          <ContainerDiv key={`todo${i}`} todo={todo} text="취소" />
        ) : null
      )}
    </ContainerWrap>
  );
};

const StyleDiv = styled.div`
  width: 1200px;
  margin: 20px auto;
  color: white;
  font-size: 28px;
  font-weight: 600;
`;
const ContainerWrap = styled.div`
  width: 1200px;
  margin: 10px auto;
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;
export default Container;
