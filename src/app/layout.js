import "./globals.css";
import { Poppins } from "@next/font/google";
import { Nav } from "./Components/Nav";
const poppins = Poppins({
  subsets: ['latin'],
  weight:['400','700'],
});
 
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" classname={poppins.className}>
      <body>
        <header>
          <Nav />
        </header>
        <main >{children}</main>
      </body>
    </html>
  );
}
