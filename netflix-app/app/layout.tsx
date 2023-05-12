'use client';
import './globals.css';

export default function RooteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="w375 h746 ma">{children}</body>
    </html>
  );
}
