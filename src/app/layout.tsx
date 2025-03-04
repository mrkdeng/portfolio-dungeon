import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio Dungeon",
  description: "Welcome to my portfolio dungeon",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.png" />
      <head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Eater&family=Kablammo&display=swap');
          `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}