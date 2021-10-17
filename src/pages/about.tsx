import React from "react"
import { Head } from "../components/Head"
import { Helmet } from "react-helmet"
import { Title } from "../components/text/Title"
import { StaticImage } from "gatsby-plugin-image"
import {
  entryDefaultAnimation,
  exitDefaultAnimation,
} from "../animations/pages"
import TransitionLink from "gatsby-plugin-transition-link"

interface AboutPageProps {}

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "about dark" }} />
      <Head title="Über mich" url="/about" />

      <Title title="Über mich" subTitle="" />

      <div className="row">
        <div className="column" md={8} inset-follows-md={1}>
          <article>
            <h3>Hi✌️,</h3>
            <p>
              mein Name ist Philipp, ich bin Student, 20 Jahre alt, komme aus
              Aachen und meine Zeit verbringe ich mit dem Verschieben von Pixeln
              im Browser.
            </p>
            <p>
              Nun ja, kurz und knapp gesagt mag das so stimmen, doch bei
              genauerer Betrachtung ist es nicht nur das. Im LinkedIn-Jargon
              würde man das vermutlich „Fullstack-Developer mit erweiterten
              Kenntnissen in UI&UX“ nennen. Klingt cool, aber wie sieht das in
              der Realität aus?
            </p>
            <p>
              Seit nun mehr als 6 Jahren entwickle ich Webseiten. Anfangs waren
              es kleine statische HTML-Seiten für den Bekanntenkreis. Ich hatte
              keine Ahnung, wie man cleanen Code schreibt, debuggt oder
              dynamischen Content erstellt. Aber hey, da gab es diese Domain und
              man konnte meine kleine Webseite sehen. Mich hatte die Euphorie
              gepackt und bis heute lässt sie mich nicht mehr los. Natürlich
              blieb es nicht lange bei statischen Seiten. Mithilfe von PHP
              bekamen die Seiten Serverseitige Funktionen, durch JavaScript
              (später dann TypeScript) wurden der Content dynamisch und durch
              das stetige Verbessern meiner CSS-Kenntnisse wurden sie richtig
              hübsch. Gebündelt wurde das alles erstmals in einem
              selbstentwickelten Online-Shop mit eigenem CSS-Framework.
            </p>
            <p>
              Alle meine bisherigen Projekte findest du&nbsp;
              <TransitionLink
                to="/portfolio"
                exit={{
                  delay: 0,
                  length: 1,
                  trigger: props => {
                    exitDefaultAnimation(props)
                  },
                }}
                entry={{
                  delay: 0.9,
                  length: 1,
                  trigger: props => {
                    entryDefaultAnimation(props)
                  },
                }}
              >
                hier
              </TransitionLink>
              .
            </p>
            <p>
              Aufgebaut habe ich mir diese Kenntnisse in Eigeninitiative während
              meiner Schulzeit, in meinem Studium und in meiner Zeit als
              Werkstudent. Durch das Aneignen neuer Technologien im Alleingang,
              habe ich gelernt eigenständig zu arbeiten. Auch wenn das häufig
              hieß, stundenlang StackOverflow Diskussionen oder die X-te Doku zu
              lesen. Ich will ehrlich sein, das hat sich bis heute nicht
              verändert. Was sich allerdings verändert hat, ist die
              Team-Fähigkeit. Seit dem ersten Semester arbeite ich als
              Werkstudent in einem kleinen Entwickler-Team (INFORM DataLab).
              Dort habe ich es geschafft, als bis dahin allein kämpfender
              Programmierer, mich schnell in das bestehende Team zu integrieren,
              sodass alle voneinander profitieren können.
            </p>
            <p>
              Wenn du es bis hier geschafft hast und Interesse an einer
              Zusammenarbeit hast, schreib mir doch einfach mal eine{" "}
              <a href="mailto:kontakt@philipplentzen.dev">E-Mail</a>. Ich würde
              mich freuen, von dir zu hören.
            </p>
          </article>
        </div>
        <div className="column" md={5} inset-md={1}>
          <div className="thumbnail">
            <StaticImage src="../images/me_about.jpg" alt="me, myself and i" />
            <StaticImage
              src="../images/me_about_overlay.png"
              alt="Me texture"
              className="overlay"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
