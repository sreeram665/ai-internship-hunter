import "./globals.css";

export const metadata = {
  title: "AI Internship Hunter",
  description: "Track and manage internship opportunities in one focused dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
