import React from "react";
import TypingEffect from "./TypingEffect"; 
import PageLine from "./PageLine";
import NavBar from "./NavBar"; // Assuming NavBar is used on this page

export default function Home(){
  return (
    <>
      <div className="home container-fluid p-4">
        <div className="textBox Home">
          <h2>
            <TypingEffect
              texts={["HELLO, MY NAME IS EMMANUEL ADIO", "Welcome to My Portfolio"]}
              typingSpeed={100}
              deletingSpeed={50}
              loop
            />
          </h2>
        </div>
      </div>
      <PageLine />
    </>
  );
}
