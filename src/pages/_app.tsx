import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "light",
    theme: { colors: { primary: "#c32200" } },
  });
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
