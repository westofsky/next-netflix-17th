'use client';
import './globals.css';
import ReactQueryProvider from "./ReactQueryProvider";

export default function RooteLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html>
      <body className = "w375 h746 ma">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}