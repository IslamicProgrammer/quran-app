import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createSelector } from "reselect"
import { client } from "../../service/client"

export const fetchSurahList = createAsyncThunk("surahs/get", async () => {
  const response = await client.get("/surah")
  return response.data
})

export const fetchSpesificSurah = createAsyncThunk("surah/get", async id => {
  const response = await client.get(`/surah/${id}/ar.alafasy`)
  console.log("response", response)
  return response.data
})

export const fetchSurahTranslation = createAsyncThunk(
  "surahTrans/get",
  async id => {
    const response = await client.get(`/surah/${id}/uz.sodik`)
    return response.data
  }
)

const initialState = {
  surahList: [],
  currentSurah: [],
  currentSurahTrans: [],
  error: null,
}

const slice = createSlice({
  name: "entities",
  initialState,
  reducers: {
    clearSurahList: state => {
      state.currentSurahTrans = []
      state.currentSurah = []
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSurahList.fulfilled, (state, action) => {
        state.surahList = action.payload.data
      })
      .addCase(fetchSpesificSurah.fulfilled, (state, action) => {
        state.currentSurah = action.payload.data
      })
      .addCase(fetchSurahTranslation.fulfilled, (state, action) => {
        state.currentSurahTrans = action.payload.data
      })
  },
})

export default slice.reducer
export const { clearSurahList } = slice.actions

export const getSurahList = createSelector(
  store => store.entities,
  entities => entities.surahList
)

export const getSurah = createSelector(
  store => store.entities,
  entities => entities.currentSurah
)

export const getSurahTrans = createSelector(
  store => store.entities,
  entities => entities.currentSurahTrans
)
