import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice"

const handlePending = (state) => {
  state.loading = true
  state.error = false
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
  extraReducers: (builder) => {
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
    } 
})

export const contactsReducer = contactsSlice.reducer

export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
  })