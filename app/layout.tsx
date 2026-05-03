import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Completion Bottleneck Finder",
  description: "Identifies where students drop out in online courses. Pinpoint exact lessons causing dropouts and get actionable improvement suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="060478b2-5a45-49d0-8335-1398c0ff4c81"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
