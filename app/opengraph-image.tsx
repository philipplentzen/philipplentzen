import { ImageResponse } from "next/og";

import { Logo } from "@/components/logo";

export const alt = `kreativer entwickler. informatik student. öcher jong.`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = `image/png`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `flex-start`,
          width: `100%`,
          height: `100%`,
          backgroundColor: `#F2F7FA`,
          backgroundImage: `url('https://github.com/philipplentzen/philipplentzen/blob/c7b03c5fa6720ad81a3ee8b24139b01ed4903fdc/public/images/clouds.png?raw=true'), linear-gradient(to bottom, rgba(24,169, 153, 0.3), rgba(24,169, 153, 0))`,
          gap: `0.5rem`,
          padding: `6rem`,
        }}
      >
        <img
          src={`https://github.com/philipplentzen/philipplentzen/blob/c7b03c5fa6720ad81a3ee8b24139b01ed4903fdc/public/images/clouds.png?raw=true`}
          style={{ position: `absolute` }}
        />
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            color: `rgba(15, 30, 41, 0.8)`,
          }}
        >
          <span style={{ position: `relative` }}>
            <span
              style={{
                left: `-0.25rem`,
                top: `-0.25rem`,
                position: `absolute`,
                borderRadius: `100%`,
                width: `1.25rem`,
                height: `1.25rem`,
                backgroundColor: `#18A999`,
                marginRight: `0.5rem`,
                opacity: 0.25,
              }}
            ></span>
            <span
              style={{
                borderRadius: `100%`,
                width: `0.75rem`,
                height: `0.75rem`,
                backgroundColor: `#18A999`,
                marginRight: `0.5rem`,
              }}
            ></span>
          </span>
          verfügbar
        </div>
        <Logo />
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
          }}
        >
          {[`Kreativer Entwickler`, `Informatikstudent`, `Öcher Jong`].map(
            (text) => (
              <span
                key={text}
                style={{
                  color: `rgba(15, 30, 41, 0.6)`,
                  fontSize: `2rem`,
                  lineHeight: 1,
                }}
              >
                {text.toLowerCase()}.
              </span>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
