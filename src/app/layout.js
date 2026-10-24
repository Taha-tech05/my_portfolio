import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-mono", display: "swap" });

export const metadata = {
  title: "Taha Irfan Portfolio",
  description:
    "Muhammad Taha Irfan — Computer Science student and full-stack / AI engineer. Portfolio built as a code editor.",
  openGraph: {
    title: "Taha Irfan — Full-Stack & AI Engineer",
    description: "Computer Science student building full-stack platforms and AI systems. Browse the file tree to explore.",
    type: "website",
  },
};

const motionInit = `try{var l=localStorage.getItem('low-motion')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches;document.documentElement.setAttribute('data-motion',l?'low':'full')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-motion="full" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: motionInit }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
