import axios from "axios"
import { LatLng } from "leaflet"

// const apiUrl = process.env.VITE_API_URL || 'http://localhost:3000'

const apiUrl = import.meta.env.VITE_API_URL 

export const sendTheftReport = async (coordinates: LatLng) => {
  const res = await axios.post(`${apiUrl}/api/coordinates`, coordinates)
  return res.data
}
