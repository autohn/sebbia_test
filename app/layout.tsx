import { useContext } from "react";
import LoadingProvider from "./clientContextProvider";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <LoadingProvider>
        <head></head>
        <body>
          <Header></Header>
          {children}
        </body>
      </LoadingProvider>
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
