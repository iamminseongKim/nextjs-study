import { Metadata } from "next";
import Navigation from "../components/navigation";
import AboutUs from "./about-us/page"


export const metadata :Metadata= {
  title : {
    template: "%s | Next Movies",
    default: "Loading..." 
  },
  description: 'The best movies on the best framework',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

