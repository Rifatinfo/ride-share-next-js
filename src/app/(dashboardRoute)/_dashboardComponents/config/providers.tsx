/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { swrConfig } from "@/lib/swr-config";
// import { swrConfig } from "@/lib/swr-config";
import { SWRConfig } from "swr";
export default function Providers({ children }: any) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
} 