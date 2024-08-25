import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import Footer from './layout/Footer';
export const metadata = {
  title: "Huddle Trading",
  description: "Huddle Investing is an innovative platform that connects investors with seasoned financial experts, offering automated tools, expert-driven insights, and community-based trading. Our mission is to simplify the investment process, foster collaboration, and empower users to achieve financial growth through cutting-edge technology and trusted expertise.",
  icons: {
    icon: ["/assets/favicon.ico?v=4"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader 
      
      
      color="#005B2F"/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
