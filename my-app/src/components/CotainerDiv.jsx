import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteList, doneList } from "../redux/modules/todos.js";

const ContainerDiv = ({ todo, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHendler = (id) => {
    dispatch(deleteList(id));
  };

  const doneHendler = (id) => {
    dispatch(doneList(id));
  };

  // navigate 하면서 dispatch를 통해서 find
  // const handleNavigate = () => {
  //   navigate(/${todo.id});
  //   dispatch({ type: "FIND_DETAIL", payload: todo.id });
  // };

  return (
    <SquareStyle>
      <TitleH2>{todo.title}</TitleH2>
      <div>{todo.text}</div>
      <ButtonStyle onClick={() => deleteHendler(todo.id)}>삭제</ButtonStyle>
      <ButtonStyle onClick={() => doneHendler(todo.id)}>{text}</ButtonStyle>
      <ButtonStyle
        onClick={() => {
          navigate(`/${todo.id}`);
        }}
      >
        페이지
      </ButtonStyle>
    </SquareStyle>
  );
};

const SquareStyle = styled.div`
  padding: 24px;
  width: 340px;
  height: 180px;
  border: solid 2px white;
  background-color: white;
  border-radius: 10px;
  align-content: space-around;
`;
const ButtonStyle = styled.button`
  border: #ff7800;
  border-radius: 100px;
  width: 88px;
  font-size: 14px;
  font-weight: 800;
  padding: 5px;
  margin-right: 8px;
  margin-top: 36px;
`;
const TitleH2 = styled.h2`
  margin-bottom: 10px;
`;
export default ContainerDiv;
