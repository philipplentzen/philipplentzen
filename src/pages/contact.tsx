import React from "react"
import { Helmet } from "react-helmet"
import { Map } from "../components/Map"
import { Head } from "../components/Head"

/**
 * Props
 */
interface IcontactProps {}

/**
 * contact
 */
const ContactPage: React.FC<IcontactProps> = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "contact light" }} />
      <Head title="Kontakt" url="/contact" />
      <Map />
      <div className="mail">
        <a href="mailto:kontakt@philipplentzen.dev">
          kontakt@philipplentzen.dev
        </a>
      </div>
    </>
  )
}

export default ContactPage
