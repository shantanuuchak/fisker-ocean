import "./globals.css";

export const metadata = {
  title: "Fisker Ocean Configurator",
  description: "Create your dream fisker ocean!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
