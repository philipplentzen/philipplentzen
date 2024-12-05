import { ImageResponse } from "next/og";

import { Logo } from "@/components/logo";

export const alt = `kreativer entwickler. informatik student. öcher jong.`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = `image/png`;

export async function GET() {
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
          backgroundImage: `url('https://philipplentzen.dev/images/grain.png'), linear-gradient(to bottom, rgba(24,169, 153, 0.3), rgba(24,169, 153, 0))`,
          gap: `0.5rem`,
          padding: `6rem`,
        }}
      >
        <img
          src={`https://philipplentzen.dev/images/clouds.png`}
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
          available
        </div>
        <Logo />
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
          }}
        >
          {[`creative developer`, `computer science student`, `Öcher Jong`].map(
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
