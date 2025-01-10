import "./globals.css";

export const metadata = {
  title: "Jihyun Kim - Portfolio",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
