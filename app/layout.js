import MainNavigation from "@/components/ui/MainNavigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <MainNavigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
