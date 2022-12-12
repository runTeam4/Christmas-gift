import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = {
  todos: [],
  // detail: undefined,
};

// 리듀서
const todoToolReducer = createSlice({
  name: "tooltodo", //디버깅 과정에서 사용되는 친구
  initialState,
  reducers: {
    //리듀서 안에 들어가면 액션크리에이터가 된다.
    addList: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    deleteList: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    doneList: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

// src/redux/modules/counterSlice.js

console.log(todoToolReducer);
// 모듈파일에서는 리듀서를 export default 한다.
export const { addList, deleteList, doneList } = todoToolReducer.actions;
export default todoToolReducer.reducer;
