import { Metadata } from "next";
import ButtonComponent from "./button";

export const metadata: Metadata = {
  title: "About Us | Name of website ",
  description: "A lot of keywords",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

export default async function Contact() {    
    console.log('hey is this in server or client?');

    const response = await fetch('https://jsonplaceholder.org/posts');
    const posts = await response.json();
    console.log(posts);
    return (
        <div>
            <ButtonComponent />
        </div>
    )
}