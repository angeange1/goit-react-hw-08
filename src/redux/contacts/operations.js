import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://66675502a2f8516ff7a728d8.mockapi.io/"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/contacts`)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/contacts`, newContact)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }   
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseURL}/contacts/${contactId}`)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }    
)