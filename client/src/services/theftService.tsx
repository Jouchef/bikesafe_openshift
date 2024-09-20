import axios from "axios"
import { LatLng } from "leaflet"


//const apiUrl = import.meta.env.VITE_API_URL 

const apiUrl = 'http://bikesafe-openshift-server-testt-git:3000'

console.log("THEFT_VITE_API_URL:", import.meta.env.VITE_API_URL)

export const sendTheftReport = async (coordinates: LatLng) => {
  const res = await axios.post(`${apiUrl}/api/coordinates`, coordinates)
  return res.data
}
