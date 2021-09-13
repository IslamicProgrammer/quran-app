import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createSelector } from "reselect"
import { client } from "../../service/client"

export const fetchSurahList = createAsyncThunk("surah/get", async () => {
  const response = await client.get("/surah")
  return response.data
})

const initialState = {
  surahList: [],
}

const slice = createSlice({
  name: "entities",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchSurahList.fulfilled, (state, action) => {
      console.log("action", action.payload.data)
      state.surahList = action.payload.data
    })
  },
})

export default slice.reducer

export const getSurahList = createSelector(
  store => store.entities,
  entities => entities.surahList
)
