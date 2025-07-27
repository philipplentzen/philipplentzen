import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(at 0% 0%, rgb(24, 170, 153) 0%, rgb(252, 186, 3) 100%)",
          backgroundClip: "text",
          color: "transparent",
          fontSize: "28px",
          fontWeight: "800",
          letterSpacing: "-0.05em",
        }}
      >
        pl
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Overpass",
          data: await loadGoogleFont("Overpass:wght@800"),
          style: "normal",
        },
      ],
    },
  );
}
