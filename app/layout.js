import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DocMate - Doctor Appointment App",
  description: "Connect with the doctor. We care about your health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getPossibleInstrumentationHookFilenames.className} `}
      >{/*The header */}
        <main>

        </main>
        {children}

        {/*The footer */}
      </body>
    </html>
  );
}
