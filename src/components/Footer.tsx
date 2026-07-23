import React from "react";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          EA<span className="dot">.</span>
        </div>
        <p className="footer__made">
          Made with <span className="heart">❤</span> by Emmanuel Adio
        </p>
        <Socials size="sm" />
      </div>
    </footer>
  );
}
