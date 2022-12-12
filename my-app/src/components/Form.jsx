import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { addList } from "../redux/modules/todos";

const Form = () => {
  const dispatch = useDispatch();
  //useSelector를 사용하여 todos.todos를 조회
  //component에서 store를 조회할때는 useSelect를 사용한다.
  //초기값에 접근이 가능하다.
  const list = useSelector((state) => state.todos.todos);
  //console.log(list);

  //input
  const [input, setInput] = useState({ title: "", text: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //추가하기 버튼
  const addHandler = () => {
    const todolist = { ...input, id: Date.now(), isDone: false };
    dispatch(addList(todolist));
  };

  return (
    <InputDiv>
      <AddInput
        type="text"
        onChange={inputHandler}
        value={input.title}
        name="title"
      ></AddInput>
      <AddInput
        type="text"
        onChange={inputHandler}
        value={input.text}
        name="text"
      ></AddInput>
      <ButtonStyle onClick={addHandler}>추가하기</ButtonStyle>
    </InputDiv>
  );
};

const AddInput = styled.input`
  border-radius: 100px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
  background-color: white;
`;
const InputDiv = styled.div`
  width: 1200px;
  display: flex;
  padding: 30px;
  gap: 20px;
  margin: 0 auto;
  color: #ff7800;
  font-size: 18px;
  font-weight: 500;
  line-height: 42px;
`;
const ButtonStyle = styled.button`
  border-radius: 100px;
  width: 120px;
  font-size: 14px;
  font-weight: 800;
  padding: 5px;
  margin-right: 8px;
  background-color: #ff7800;
  border: #ff7800;
`;
export default Form;
