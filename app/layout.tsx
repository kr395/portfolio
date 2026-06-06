import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lumina Creative Suite - Gopal Kumar Das Portfolio",
  description:
    "Explore the single-page interactive coding journey and creative portfolio of Gopal Kumar Das, Software Engineer | AI & Full Stack Developer. Styled as a professional Figma-like UI design tool interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Anti-flash theme script ──
            Runs synchronously before paint so the user never sees the wrong theme.
            Must stay in <head> as a raw script tag, not a Next Script component.  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('portfolio-theme');
                var preferred = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.setAttribute('data-theme', preferred);
              } catch(e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--surface)] text-[var(--on-surface)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
