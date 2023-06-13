import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:4000'

interface LoginPayload {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  '/login',
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${baseUrl}/login`,
        { email, password },
        config
      )
      if (typeof window !== 'undefined') {
        // Perform localStorage action
        // store user's token in local storage
        localStorage.setItem('userToken', data.token)
        localStorage.setItem('user', data.data._id)
      }
      return data
    } catch (error: unknown) {
      // return custom error message from API if any
      if (axios.isAxiosError(error) && error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue((error as Error).message)
      }
    }
  }
)

interface RegisterPayload {
  organisationName: string;
  userName: string;
  phone: string;
  dateJoined: Date;
  status: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  '/register',
  async ({ organisationName, phone, dateJoined, email, password, status }: RegisterPayload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${baseUrl}/register`,
        { organisationName, phone, status, dateJoined, email, password },
        config
      )

      return data
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue((error as Error).message)
      }
    }
  }
)