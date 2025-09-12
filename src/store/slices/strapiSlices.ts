import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aboutApicol, latestNews, message, tests } from "../../config/strapiController";

export const fetchAllStrapiData = createAsyncThunk(
  "api/fetchAll",
  async () => {
    const [test, aboutApicolData,messageData,latestNewsData] = await Promise.all([
      tests(),
      aboutApicol(),message(),latestNews()
    ]);

    return {
      tests: test.data,
      aboutApicol: aboutApicolData.data,
      message:messageData.data,
      latestNews:latestNewsData
    };
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    test: [] as any[],
    aboutApicol: [] as any[],
    message: [] as any[],
    latestNews: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStrapiData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllStrapiData.fulfilled, (state, action) => {
        state.loading = false;
        state.test = action.payload.tests;
        state.aboutApicol = action.payload.aboutApicol;
        state.message = action.payload.message;
        state.latestNews = action.payload.latestNews;
      })
      .addCase(fetchAllStrapiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default apiSlice.reducer;
