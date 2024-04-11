import { ImageResponse } from "next/og";

import { Logo } from "@/components/logo";

export const alt = `kreativer entwickler. informatik student. aus der kaiserstadt.`;
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
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
          backgroundColor: `#F2F7FA`,
          backgroundImage: `url('https://philipplentzen.dev/images/grain.png'), linear-gradient(to bottom, rgba(24,169, 153, 0.3), rgba(24,169, 153, 0))`,
          gap: `1rem`,
          fontSize: `1.2rem`,
        }}
      >
        <span style={{ color: `#18A999`, fontFamily: `ui-monospace` }}>
          kreativer entwickler. informatik student. aus der kaiserstadt.
        </span>
        <Logo />
      </div>
    ),
    {
      ...size,
    }
  );
}
