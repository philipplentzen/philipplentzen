import React from "react"
import { Title } from "../components/text/Title"
import { Helmet } from "react-helmet"
import { Head } from "../components/Head"

/**
 * Props
 */
interface IdatenschutzProps {}

/**
 * datenschutz
 */
const DatenschutzPage: React.FC<IdatenschutzProps> = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "privacy dark" }}>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Head title="Datenschutzerklärung" url="/privacy" />
      <Title title="Datenschutzerklärung" subTitle="" />
      <p>
        Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden
        von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
        Bereitstellung eines funktionsfähigen und nutzerfreundlichen
        Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
        Leistungen, verarbeitet.
      </p>{" "}
      <p>
        Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
        Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als
        „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten, wie das Erheben, das Erfassen, die
        Organisation, das Ordnen, die Speicherung, die Anpassung oder
        Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung
        durch Übermittlung, Verbreitung oder eine andere Form der
        Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
        das Löschen oder die Vernichtung.
      </p>
      <p>
        Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
        insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
        Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
        gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
        entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
        Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
        eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum
        eigener Verantwortung verarbeiten.
      </p>
      <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
      <p>
        I. Informationen über uns als Verantwortliche
        <br />
        II. Rechte der Nutzer und Betroffenen
        <br />
        III. Informationen zur Datenverarbeitung
      </p>
      <h3>I. Informationen über uns als Verantwortliche</h3>
      <p>
        Verantwortlicher Anbieter dieses Internetauftritts im
        datenschutzrechtlichen Sinne ist:
      </p>
      <p>
        Philipp Lentzen
        <br />
        Kahlgrachtstraße 7
        <br />
        52080 Aachen
        <br />
        Deutschland
      </p>
      <p>
        Telefon: 015734511197
        <br />
        E-Mail: kontakt@philipplentzen.dev
      </p>
      <h3>II. Rechte der Nutzer und Betroffenen</h3>
      <p>
        Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
        haben die Nutzer und Betroffenen das Recht
      </p>
      <ul>
        <li>
          auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf
          Auskunft über die verarbeiteten Daten, auf weitere Informationen über
          die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15
          DSGVO);
        </li>
        <li>
          auf Berichtigung oder Vervollständigung unrichtiger bzw.
          unvollständiger Daten (vgl. auch Art. 16 DSGVO);
        </li>
        <li>
          auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art.
          17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß
          Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der
          Verarbeitung nach Maßgabe von Art. 18 DSGVO;
        </li>
        <li>
          auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten
          und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche
          (vgl. auch Art. 20 DSGVO);
        </li>
        <li>
          auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht
          sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß
          gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch
          Art. 77 DSGVO).
        </li>
      </ul>
      <p>
        Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen
        gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede
        Berichtigung oder Löschung von Daten oder die Einschränkung der
        Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt,
        zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese
        Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand
        verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
        über diese Empfänger.
      </p>
      <p>
        <strong>
          Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das
          Recht auf Widerspruch gegen die künftige Verarbeitung der sie
          betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe
          von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist
          ein Widerspruch gegen die Datenverarbeitung zum Zwecke der
          Direktwerbung statthaft.
        </strong>
      </p>
      <h3>III. Informationen zur Datenverarbeitung</h3>
      <p>
        Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
        gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
        Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen und nachfolgend keine anderslautenden Angaben zu
        einzelnen Verarbeitungsverfahren gemacht werden.
      </p>
      <h4>Serverdaten</h4>
      <p>
        Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren
        und stabilen Internetauftritts, werden Daten durch Ihren
        Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt.
        Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres
        Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf
        unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s)
        unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des
        jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von
        dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.
      </p>
      <p>
        Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch
        nicht gemeinsam mit anderen Daten von Ihnen.
      </p>
      <p>
        Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit.
        f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung,
        Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.
      </p>
      <p>
        Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit
        keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist.
        Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls
        ganz oder teilweise von der Löschung ausgenommen.
      </p>
      <h4>Kontaktanfragen / Kontaktmöglichkeit</h4>
      <p>
        Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten,
        werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
        Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
        Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung
        können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
      </p>
      <p>
        Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
      </p>
      <p>
        Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
        worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
        Vertragsabwicklung.
      </p>
      <h4>Google Analytics</h4>
      <p>
        In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei
        handelt es sich um einen Webanalysedienst der Google Ireland Limited,
        Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google“
        genannt.
      </p>
      <p>
        Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens
        unseres Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f)
        DSGVO. Unser berechtigtes Interesse liegt in der Analyse, Optimierung
        und dem wirtschaftlichen Betrieb unseres Internetauftritts.
      </p>
      <p>
        Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort,
        Zeit oder Häufigkeit des Besuchs unseres Internetauftritts, werden dabei
        an einen Server von Google in den USA übertragen und dort gespeichert.
        Allerdings nutzen wir Google Analytics mit der sog.
        Anonymisierungsfunktion. Durch diese Funktion kürzt Google die
        IP-Adresse schon innerhalb der EU bzw. des EWR.
      </p>
      <p>
        Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine
        Auswertung über den Besuch unseres Internetauftritts sowie über die
        dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch können diese
        Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit
        der Nutzung unseres Internetauftritts und der Nutzung des Internets
        zusammenhängen.
      </p>
      <p>
        Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden.
        Zudem hält Google unter
      </p>
      <p>
        <a
          href="https://www.google.com/intl/de/policies/privacy/partners"
          target="_blank"
          rel="noopener"
        >
          https://www.google.com/intl/de/policies/privacy/partners
        </a>
      </p>
      <p>
        weitere datenschutzrechtliche Informationen für Sie bereit, so bspw.
        auch zu den Möglichkeiten, die Datennutzung zu unterbinden.
      </p>{" "}
      <p>Zudem bietet Google unter</p>
      <p>
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="noopener"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
      </p>
      <p>
        ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an.
        Dieses Add-on lässt sich mit den gängigen Internet-Browsern installieren
        und bietet Ihnen weitergehende Kontrollmöglichkeit über die Daten, die
        Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das
        Add-on dem JavaScript (ga.js) von Google Analytics mit, dass
        Informationen zum Besuch unseres Internetauftritts nicht an Google
        Analytics übermittelt werden sollen. Dies verhindert aber nicht, dass
        Informationen an uns oder an andere Webanalysedienste übermittelt
        werden. Ob und welche weiteren Webanalysedienste von uns eingesetzt
        werden, erfahren Sie natürlich ebenfalls in dieser Datenschutzerklärung.
      </p>
      <h4>Mapbox API</h4>
      <p>
        Für Anfahrtsbeschreibungen setzen wir Mapbox API, einen Dienst der
        Mapbox Inc., 740 15th Street NW, 5 th Floor, Washington, District of
        Columbia 20005, USA, nachfolgend nur „Mapbox“ genannt, ein.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Optimierung der Funktionalität unseres
        Internetauftritts.
      </p>
      <p>
        Bei Aufruf einer unserer Internetseiten, in die der Dienst Mapbox
        eingebunden ist, wird durch Mapbox ein Cookie über Ihren Internet -
        Browser auf Ihrem Endgerät gespeichert. Hierdurch werden Informationen
        über Ihre Nutzung unseres Internetauftritts, einschließlich Ihrer IP-
        Adresse, an einen Server von Mapbox in den USA übertragen und dort
        gespeichert. Diese Daten werden zum Zwecke der Anzeige der Seite bzw.
        zur Gewährleistung der Funktionalität des Dienstes Mapbox verarbeitet.
        Diese Informationen wird Mapbox womöglich an Dritte weitergeben, sofern
        dies gesetzlich vorgeschrieben ist oder die Informationen durch Dritte
        im Auftrag von Mapbox&nbsp;verarbeitet werden.
      </p>{" "}
      <p>
        Die „Terms of Service“, die durch Mapbox unter{" "}
        <a href="https://www.mapbox.com/tos/#maps">
          https://www.mapbox.com/tos/#maps
        </a>{" "}
        bereitgestellt werden, enthalten weitergehenden Informationen über die
        Nutzung von Mapbox und über die von Mapbox erlangten Daten.
      </p>{" "}
      <p>
        Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Installation der Cookies durch die entsprechenden
        Einstellungen in Ihrem Internet -Browser zu verhindern. Einzelheiten
        hierzu finden Sie vorstehend unter dem Punkt „Cookies“. Die Nutzung des
        Dienstes Mapbox über unseren Internetauftritt ist dann allerdings nicht
        mehr möglich.
      </p>{" "}
      <p>Zudem bietet Mapbox unter</p>{" "}
      <p>
        <a
          href="https://www.mapbox.com/privacy/"
          target="_blank"
          rel="noopener"
        >
          https://www.mapbox.com/privacy/
        </a>
        <u> </u>
      </p>{" "}
      <p>
        weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren
        Rechten und Möglichkeiten zum Schutz Ihrer Privatsphäre an.
      </p>{" "}
      <h4>CloudFlare</h4>{" "}
      <p>
        Zur Absicherung unseres Internetauftritts sowie zur Optimierung der
        Ladezeiten setzen wir den Dienst CloudFlare als sog. CDN
        (Content-Delivery-Network) ein. Es handelt sich hierbei um einen Dienst
        der Cloudflare Inc., 101 Townsend Street, San Francisco, California
        94107, USA, nachfolgend nur „CloudFlare“ genannt.
      </p>{" "}
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in dem sicheren Betrieb unseres Internetauftritts sowie
        in dessen Optimierung.
      </p>{" "}
      <p>
        Sofern Sie unseren Internetauftritt aufrufen, werden Ihre Anfragen über
        den Server von CloudFlare geleitet. Hierbei werden statistische
        Zugriffsdaten über den Besuch unseres Internetauftritts erhoben und
        durch CloudFlare ein Cookie über Ihren Internet-Browser auf Ihrem
        Endgerät gespeichert. Zu den Zugriffsdaten zählen
      </p>{" "}
      <p>- Ihre IP-Adresse,</p>
      <p>
        - die von Ihnen aufgerufene(n) Internetseite(n) unseres
        Internetauftritts,
      </p>{" "}
      <p>- Typ und Version des von Ihnen genutzten Internet - Browsers,</p>{" "}
      <p>- das von Ihnen genutzte Betriebssystem,</p>{" "}
      <p>
        - die Internetseite, von der sie auf unseren Internetauftritt gewechselt
        haben (Referrer- URL),
      </p>{" "}
      <p>- Ihre Verweildauer auf unserem Internetauftritt und&nbsp;</p>{" "}
      <p>- die Häufigkeit des Aufrufs unserer Internetseiten.</p>{" "}
      <p>
        Die Daten werden durch CloudFlare zum Zwecke statistischer Auswertungen
        der Zugriffe sowie zur Sicherheit und Optimierung des Angebots
        verwendet.
      </p>{" "}
      <p>
        Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Installation der Cookies durch die entsprechenden
        Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
        hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
      </p>{" "}
      <p>CloudFlare bietet unter</p>{" "}
      <p>
        <a
          href="https://www.cloudflare.com/privacypolicy/"
          target="_blank"
          rel="noopener"
        >
          https://www.cloudflare.com/privacypolicy/
        </a>
      </p>{" "}
      <p>
        weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren
        Rechten und Möglichkeiten zum Schutz Ihrer Privatsphäre an.
      </p>{" "}
      <p>
        <a
          href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html"
          target="_blank"
          rel="noopener"
        >
          Muster-Datenschutzerklärung
        </a>{" "}
        der{" "}
        <a
          href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"
          target="_blank"
          rel="noopener"
        >
          Anwaltskanzlei Weiß &amp; Partner
        </a>
      </p>
    </>
  )
}

export default DatenschutzPage
