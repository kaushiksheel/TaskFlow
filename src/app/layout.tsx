import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow",
  description:
    "TaskFlow is your go-to task management platform, meticulously crafted to elevate your productivity and streamline your projects effortlessly. Inspired by industry-leading tools like Trello, BoardWorks offers a seamless and intuitive interface tailored to suit the needs of individuals, teams, and organizations of all sizes.",
  openGraph: {
    title: "TaskFlow",
    description:
      "TaskFlow is your all-in-one task management solution, designed to empower individuals and teams to craft their workflow with ease and efficiency. With a user-friendly interface inspired by popular platforms like Trello, TaskForge offers a seamless experience for organizing tasks, collaborating with team members, and tracking progress on projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
