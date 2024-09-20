import axios from "axios"
import { LatLng } from "leaflet"

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000'

export const sendTheftReport = async (coordinates: LatLng) => {
  const res = await axios.post(`${apiUrl}/api/coordinates`, coordinates)
  return res.data
}
