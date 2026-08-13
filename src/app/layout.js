import { black } from "next/dist/lib/picocolors";
import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div style={{ backgroundColor: "beige" }}>I am navbar</div>

        {children}

        <div style={{ backgroundColor: "beige" }}>I am footer</div>
      </body>
    </html>
  );
}
