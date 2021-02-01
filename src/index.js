import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// this component, being the one that injects into the root
// has specific classification:
// stateless functional component or dumb components

// rules: always return JSX

// div / section / article or Fragment:
// return sigle element(wraped in "container"). or using a <React.Fragment> </React.Fragment>, <></>

// camelCase for html attribute
// className instead of class
// close every element
// formatting

function Booklist() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      {" "}
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81zv%2BgeN0GL._AC_UL200_SR200,200_.jpg"
        alt="book cover"
      />
      <h1>The Devil You Know: A Black Power Manifesto</h1>
      <h4
        style={{ color: "#617d18", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        Charles M Blow
      </h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

// </article>here we inject the JSX above by saying what we are rendering and where
// we are rendering the component Booklist and we ae injecting it in the root
