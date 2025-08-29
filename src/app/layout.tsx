import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MapsThatMatter",
  description: "Open-source geospatial consulting for the public good",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full border-b border-gray-200 p-4">
          <nav className="mx-auto flex max-w-6xl items-center justify-between">
            {/* ✅ internal navigation uses Link */}
            <Link href="/" className="text-xl font-bold">
              MapsThatMatter
            </Link>

            <div className="flex space-x-4">
              {/* ✅ internal links */}
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/writing" className="hover:underline">
                Writing
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>

              {/* 🌍 external links stay <a> */}
              <a
                href="https://github.com/thijsradijs-pzh/mapsthatmatter"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/company/mapsthatmatter"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl p-4">{children}</main>

        <footer className="mt-12 border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          © 2025 MapsThatMatter.io. Some rights reserved.
        </footer>
      </body>
    </html>
  );
}
