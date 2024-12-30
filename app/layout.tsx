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
      <body>{children}</body>
    </html>
  );
}
