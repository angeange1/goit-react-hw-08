import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

import { logout } from "../auth/operations";

const handlePending = (state) => {
  state.loading = true
}

const handleRejected = (state, action) => {
  state.loading = false
  state.error = action.payload
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      loading: false,
      error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null         })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.pending, handlePending)

      .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload)
      state.loading = false
      state.error = null         })
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)

      .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
      state.loading = false
      state.error = null         })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
    
    .addCase(logout.fulfilled, state => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
    } 
})

export const contactsReducer = contactsSlice.reducer