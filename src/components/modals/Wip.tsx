import React from "react"
import { Title } from "../text/Title"

/**
 * Props
 */
interface IWipProps {}

/**
 * Wip
 */
export const Wip: React.FC<IWipProps> = () => {
  return (
    <div className="wipAlert">
      <Title
        title="Achtung!"
        subTitle="Diese Seite ist momentan in Bearbeitung"
      />
    </div>
  )
}
