import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#0f2027",
          minHeight: "100vh",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <header
          style={{
            background: "#2c5364",
            color: "#fff",
            padding: "1.5rem 2rem",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            letterSpacing: "0.15em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          FleetFlow 🚚
        </header>
        <div style={{ padding: "2rem" }}>{children}</div>
        <footer
          style={{
            background: "#203a43",
            color: "#fff",
            textAlign: "center",
            padding: "1rem",
            position: "fixed",
            width: "100%",
            bottom: 0,
            left: 0,
            fontSize: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          &copy; {new Date().getFullYear()} FleetFlow. All rights reserved.
        </footer>
      </body>
    </html>
  );
}