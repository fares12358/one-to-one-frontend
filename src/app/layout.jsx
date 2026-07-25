import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata = {
  title: "Valley Seeds | Premium Vegetable Seeds",
  description:
    "Valley Seeds is Egypt's leading importer of elite vegetable seeds. Connecting global agricultural innovation with Egyptian farmers since 2018.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
          <LangProvider>
            {children}
          </LangProvider>
      </body>
    </html>
  );
}
