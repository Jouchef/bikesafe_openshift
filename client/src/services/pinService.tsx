import axios from "axios"

// const apiUrl = process.env.VITE_API_URL || 'http://localhost:3000'

const apiUrl = process.env.VITE_API_URL 

export const getAll = async () => {
  return await axios.get(`${apiUrl}/api/coordinates`)
}

export default { getAll }
