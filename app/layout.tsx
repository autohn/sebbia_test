import LoadingProvider from "./clientContextProvider";
import Header from "./header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <LoadingProvider>
        <head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </head>
        <body>
          <Header></Header>
          {children}
        </body>
      </LoadingProvider>
    </html>
  );
}
