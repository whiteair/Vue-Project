import { ofetch } from 'ofetch'
import axios from 'axios'

export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  async onRequest({ options }) {
    const accessToken = useCookie('accessToken').value
    if (accessToken)
      options.headers.append('Authorization', `Bearer ${accessToken}`)
  },
})

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
