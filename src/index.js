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

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81zv%2BgeN0GL._AC_UL200_SR200,200_.jpg",
  title: "The Devil You Know: A Black Power Manifesto",
  author: " Charles M Blow",
};
const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/918sHoEOD8L._AC_UL200_SR200,200_.jpg",
  title: "Llama Llama I Love You",
  author: "Anna Dewdney",
};
function Booklist() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;

  return (
    <article className="book">
      {" "}
      <img src={img} alt="book cover" />
      <h1> {title}</h1>
      <h4
        style={{ color: "#617d18", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

// </article>here we inject the JSX above by saying what we are rendering and where
// we are rendering the component Booklist and we ae injecting it in the root
