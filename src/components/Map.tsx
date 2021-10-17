import React from "react"
import mapboxgl from "mapbox-gl"
import ReactDOM from "react-dom"
import "mapbox-gl/dist/mapbox-gl.css"

/**
 * Props
 */
interface IMapProps {}

/**
 * Map
 */
export class Map extends React.Component<IMapProps> {
  private mapElement: HTMLDivElement | null

  constructor(props) {
    super(props)

    this.mapElement =
      typeof document !== "undefined" ? document.createElement("div") : null
  }

  componentDidMount() {
    if (this.mapElement != null) {
      this.mapElement.classList.add("background")
      document.body.appendChild(this.mapElement)
      new mapboxgl.Map({
        container: this.mapElement,
        accessToken:
          "pk.eyJ1IjoicGhpbGlwcGxlbnR6ZW4iLCJhIjoiY2tvdnpwd2g1MDFjaTJ2c2YwZTdoZWc1NiJ9.IQCUyctkvgzgn7IGZYKpJQ",
        style: "mapbox://styles/philipplentzen/ckp2ko25n6hrm17n1arasixw0",
        // Empire State Building [lng, lat]
        center: [6.083611, 50.775555],
        zoom: 12.94,
        interactive: false,
      })
    }
  }

  componentWillUnmount() {
    if (this.mapElement != null) {
      document.body.removeChild(this.mapElement)
    }
  }

  render() {
    if (this.mapElement != null) {
      return ReactDOM.createPortal(null, this.mapElement)
    } else {
      return null
    }
  }
}
