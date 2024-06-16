import { selectNameFilter, selectNumberFilter } from "../filters/selectors"
import { createSelector } from "@reduxjs/toolkit"

export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()) || contact.number.includes(numberFilter)
    )
  })