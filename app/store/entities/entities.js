import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { client } from "../../service/client"

export const getSurahList = createAsyncThunk("surah/get", async () => {
  const response = await client.get("/surah")
  console.log("response", response.data)
  return response.data
})

const initialState = {
  surahChapters: [],
  loading: false,
}

const slice = createSlice({
  name: "entities",
  initialState,
  extraReducers: builder => {
    builder.addCase(getSurahList.fulfilled, (state, action) => {
      console.log("action", action.payload.data)
      state.surahChapters = action.payload.data
    })
  },
})

export default slice.reducer
