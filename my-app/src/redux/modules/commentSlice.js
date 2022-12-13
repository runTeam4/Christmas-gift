//commentSlice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//서버에 댓글 조회
export const __getComment = createAsyncThunk(
  "GET_COMMENT",//액션 벨류
  async (arg, thunkAPI) => {
    try {
      console.log("arg:", arg)
      console.log("thunkAPI:", thunkAPI)
      const { data } = await axios.get("http://localhost:3001/todos" / "comments");
      console.log("data:", data)
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      console.log("e:", e)
      return thunkAPI.rejectWithValue(e);
    }
  }
);


//서버에 댓글 추가
export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      console.log("arg:", arg)
      console.log("thunkAPI:", thunkAPI)
      const { data } = await axios.post("http://localhost:3001/comments ", { commentId } / { 추가할, 댓글, number });
      console.log("data:", data)
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      console.log("e:", e)
      return thunkAPI.rejectWithValue(e);
    }
  }
);


//서버에 댓글 삭제
export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      console.log("arg:", arg)
      console.log("thunkAPI:", thunkAPI)
      const { data } = await axios.delete("http://localhost:3001/todos" / "comments" / { commentId } / { 삭제할, 댓글, number });
      console.log("data:", data)
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      console.log("e:", e)
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  data: {
    content: "",
    username: "",
    id: 0,
    todoId: 0,
  },
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.data.content = "";
    },
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
  extraReducers: {
    [__getComment.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { clearComment, globalEditModeToggle } = commentSlice.actions;
export default commentSlice.reducer;