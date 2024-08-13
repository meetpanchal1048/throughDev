import styles from "./page.module.css";

export const metadata = {
  title: "0_0",
  description: "0_0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="T9mtIxRwxUK65Cx7F-HzAQjfQPkQU7AjVM1C9vXQhgc" />
      </head>
      <body className={styles.mainBody}>{children}</body>
    </html>
  );
}
