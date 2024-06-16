import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ""
}

// Використовується у компоненті RegistrationForm на сторінці реєстрації.
export const register = createAsyncThunk(
    "auth/register",
    async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser)
      setAuthHeader(response.data.token)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

// Використовується у компоненті LoginForm на сторінці логіну.
export const login = createAsyncThunk(
    "auth/login",
    async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo)
      setAuthHeader(response.data.token)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }   
)

// Використовується у компоненті UserMenu у шапці додатку.
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout")
      clearAuthHeader()
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }    
)    

// Використовується у компоненті App під час його монтування.

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const response = await axios.get("/users/current");
    return response.data
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
)

// В createAsyncThunk можна 3 аргументи: базовий тип екшену, асинхр.ф-я та об єкт налаштувань. Одне з налаштувань - кондішн. Якщо ця ф-я повертає тру - запит піде (асинх ф=я, яка вище, запуститься)