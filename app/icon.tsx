import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#e3a52f",
        color: "#0c0d0d",
        display: "flex",
        fontSize: 22,
        fontWeight: 800,
        height: "100%",
        justifyContent: "center",
        letterSpacing: "-1px",
        width: "100%",
      }}
    >
      RA
    </div>,
    size,
  );
}
