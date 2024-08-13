import React from "react";
import { Fragment } from "react";

import PageLine from "./PageLine";
import NavBar from "./NavBar";

interface Props {
  id: string;
  text: string;
}
export default function Home() {
  return (
    <>
    <div className="page home container-fluid p-4">
      <div className="textBox Introduction">
        <h2 className="textBox mb-4">HELLO, MY NAME IS EMMANUEL ADIO</h2>
        <p>*This is where my short introduction will go*</p>
      </div>
    </div>
    <PageLine></PageLine>
    </>
  );
}
