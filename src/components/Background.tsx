import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface BackgroundProps {}

export const Background: React.FunctionComponent<BackgroundProps> = () => {
  return (
    <div className="clouds">
      <StaticImage
        src="../images/clouds/2.png"
        alt="Cloud 1"
        placeholder="blurred"
      />
      <StaticImage
        src="../images/clouds/5.png"
        placeholder="blurred"
        alt="Cloud 2"
      />
      {/*<StaticImage src="../images/clouds/4.png"*/}
      {/*             placeholder="blurred"*/}
      {/*             alt="Cloud 3" />*/}
      <StaticImage
        src="../images/clouds/1.png"
        placeholder="blurred"
        alt="Cloud 4"
      />
      {/*<StaticImage src="../images/clouds/5.png" alt="Cloud 5" />*/}
    </div>
  )
}
