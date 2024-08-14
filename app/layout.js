import styles from "./page.module.css";

export const metadata = {
  title: "throughDev",
  description: "Explore insightful tutorials and tips on React, Angular JS, CSS, and Next.js. Our blogs will cover highlighed topics with simple understandable examples. Blogs will be short so you don't bored.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Codespaces */}
        <meta name="google-site-verification" content="T9mtIxRwxUK65Cx7F-HzAQjfQPkQU7AjVM1C9vXQhgc" />
        {/* Test tag */}
        {/* <meta name="google-site-verification" content="OuUYXE6regZM7G0LAtEXnXjTmGQik5t6mDlEt1Bl0mo" /> */}
      </head>
      <body className={styles.mainBody}>{children}</body>
    </html>
  );
}
