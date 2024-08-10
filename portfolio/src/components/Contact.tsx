import React from "react";
import { Fragment } from "react";
import PageLine from "./PageLine";

interface Props{
    id : string;
    text : string;
}
export default function Contact(){

    return (
        <>
        <div className="page">
        <h2>CONTACT</h2>

        </div>
        <PageLine></PageLine>
        </>
    );
}