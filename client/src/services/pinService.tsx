import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000'

export const getAll = async () => {
  return await axios.get(`${apiUrl}/api/coordinates`)
}

export default { getAll }
