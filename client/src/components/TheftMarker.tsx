import { LatLng } from "leaflet"
import { FC, useRef, useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { Marker as LeafletMarker } from "leaflet"
import { sendTheftReport } from "../services/theftService"
import { Coordinate } from "../types"

export const TheftMarker: FC<{
  reportMode: boolean,
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinate[]>>,
  coordinates: Coordinate[]
}> = ({
  reportMode,
  setCoordinates,
  coordinates
}) => {
  const [position, setPosition] = useState<LatLng | null>(null)
  const markerRef = useRef<LeafletMarker | null>(null)

  useMapEvents({
    click(e) {
      if (!reportMode) {
        return
      }
      setPosition(e.latlng)
      setTimeout(() => {
        markerRef.current?.openPopup()
      }, 0) 
    },
  })

  const handleReportConfirm = async (position: LatLng) => {
    const newMarker = await sendTheftReport(position)
    setCoordinates(coordinates.concat(newMarker))
    setPosition(null)
  }

  return position === null ? null : (
    <Marker ref={markerRef} position={position}>
      <Popup>
        <button onClick={() => handleReportConfirm(position)}>Confirm</button>
      </Popup>
    </Marker>
  )
}
