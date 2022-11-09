import { useContext } from "react";
import ThemeProvider from "./clientContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <ThemeProvider>
        <head></head>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}

/* "use client";

import { useRouter } from "next/navigation";
import SimpleDesign from "./details/[id]/simpleDesign";

export default function Loading({ params }: any) {
  // You can add any UI inside Loading, including a Skeleton.
  const { asPath }: any = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;
  //console.log(URL);

  return (
    <>
      <SimpleDesign />
      loading
    </>
  );
}
 */
