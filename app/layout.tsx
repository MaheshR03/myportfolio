import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://myportfolio-qk2m.vercel.app/"),
	title: 'Mahesh R',
	authors: {
		name: "Mahesh R",
	},
	description:
		"Based in Bangalore, I'm a Fullstack developer passionate about programming and tech.",
	openGraph: {
		title: "Mahesh R",
		description:
			"Based in Bangalore, I'm a Fullstack developer passionate about programming and tech.",
		url: "https://myportfolio-qk2m.vercel.app/",
		siteName: "Mahesh R",
		images: "/preview.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="suppressHydrationWarning">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
