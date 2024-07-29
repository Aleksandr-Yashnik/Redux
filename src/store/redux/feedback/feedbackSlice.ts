import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"


const feedbackInitialState: FeedbackSliceState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,

  reducers: create => ({
    like: create.reducer((state: FeedbackSliceState) => {
      state.likes = state.likes + 1
    }),
    dislike: create.reducer((state: FeedbackSliceState) => {
      state.dislikes = state.dislikes + 1
    }),
    reset: create.reducer((state: FeedbackSliceState) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),
  selectors: {
    likes: (state: FeedbackSliceState) => {
      return state.likes
    },

    dislike: (state: FeedbackSliceState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors