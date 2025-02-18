import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Guru Darshan",
  description:
    "I am a skilled full-stack developer based in Bangalore, India, with a strong foundation in artificial intelligence and machine learning pursuing a B.E. at Dayananda Sagar College of Engineering with a CGPA of 9.15/10. Proficient in React, Next.js, TypeScript, Python, and Node.js, I excel at building modern, scalable, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark">{children}</body>
    </html>
  );
}
