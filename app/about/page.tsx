import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Name of website ",
  description: "A lot of keywords",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

export default function About() {
    console.log('hey is this in server or client?');
    return <div>About page</div>;
}
