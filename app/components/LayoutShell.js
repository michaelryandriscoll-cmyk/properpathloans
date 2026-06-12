"use client";

import Header from "./header";
import Footer from "./footer";

export default function LayoutShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
