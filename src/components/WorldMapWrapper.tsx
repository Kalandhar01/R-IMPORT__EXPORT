"use client";

import dynamic from "next/dynamic";

const WorldMapSectionClient = dynamic(
  () => import("@/components/WorldMapSection"),
  { ssr: false }
);

export default function WorldMapWrapper() {
  return <WorldMapSectionClient />;
}
