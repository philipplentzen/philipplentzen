"use client";

export default function loader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: string;
  quality?: string;
}) {
  if (process.env.NODE_ENV == "development") {
    return src;
  }

  const imageOptimizationApi = process.env.CLOUD_IMAGE_OPTIMATION_API;
  const baseURL = new URL(
    (process.env.COOLIFY_URL || "http://localhost:3000").split(",")[0],
  );

  const query = new URLSearchParams();

  if (width) {
    query.set("width", width);
  }
  if (quality) {
    query.set("quality", quality);
  }

  return `${imageOptimizationApi}/image/${baseURL.href}/${src}?${query.toString()}`;
}
