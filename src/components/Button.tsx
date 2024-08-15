import React from "react";
import { Fragment } from "react";

interface Props{
    text : string;
}
export default function Button({text} : Props){

    return (
        <button className="Button">
          {text}
        </button>
      );
}