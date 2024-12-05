import "./global.css";

export const metadata = {
  title: "Fisker Ocean",
  description: "Create your personalized dream fisker now!",
  keywords: "fisker, ocean, nextjs, tailwind, configurator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/@qpokychuk/gilroy@1.0.2/index.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
