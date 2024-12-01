
import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "Portfolio | Sachin Parihar",
  description: "This is Sachin Parihar's Portfolio",
  icons:{
    icon:"https://ibb.co/VJWXmNT",
    apple:"https://ibb.co/VJWXmNT"
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Other SEO-related meta tags can be added here */}
        <link rel="icon" href="https://i.ibb.co/KbjCwGW/original-36051dd8be8d73ec9caea4721bb8d807-removebg-preview.png" />
      </Head>
      <html data-theme="light" lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
