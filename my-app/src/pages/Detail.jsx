import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const list = useSelector((state) => state.todos.todos);
  //console.log(list);

  // const detailObj = useSelector((state) => state.todos.detail);
  // console.log(detailObj);

  const param = useParams();
  //console.log(param);
  const details = list.find((details) => details.id === parseInt(param.id));
  return (
    <DetailBox>
      <div>id : {param.id}</div>
      {/* optional chaining */}
      <div>{details.title}</div>
      <div>{details.text}</div>
      <ButtonStyle
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </ButtonStyle>
    </DetailBox>
  );
};
const DetailBox = styled.div`
  background-color: white;
  width: 600px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(6px + 2vmin);
  color: #282c34;
  border-radius: 10px;
  margin: 100px auto;
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
export default Detail;
