import React from "react";
import cookie from "cookie"

import classes from "./Card.module.css";
const addBookURl = "http://localhost:4001/mybooks";
const wishlistURl = "http://localhost:4001/mywishlist";

const Card = ({ book }) => {
  console.log(book);
  
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    const addToOwned = () => {
      const cookies = cookie.parse(document.cookie)


    fetch(addBookURl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.token}`
      },
      body: JSON.stringify({
        googlebook_id: book.id,
        thumbNail: thumbnail,
        book_title: book.volumeInfo.title,
        book_authors: book.volumeInfo.authors,
        book_description: book.volumeInfo.description
      }),
    });
  };

  const addToWishList = () => {
    fetch(wishlistURl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: "this will come from the token",
        wishlist_id: "this will be auto created",
        book_id: "this will be auto created i think?",
        googlebook_id: "this will come from the google books api.",
      }),
    });
  };


  return (
    <>
      <div className="card" >
        <img src={thumbnail} alt={book.volumeInfo.title} />
        <div className="bottom">
          <h3 className="title">{book.volumeInfo.title}</h3>
          <h4 className="title">By: {book.volumeInfo.authors}</h4>
        </div>
        <button onClick={addToOwned}>Owned</button>
        <button onClick={addToWishList}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNC40MTljLTIuODI2LTUuNjk1LTExLjk5OS00LjA2NC0xMS45OTkgMy4yNyAwIDcuMjcgOS45MDMgMTAuOTM4IDExLjk5OSAxNS4zMTEgMi4wOTYtNC4zNzMgMTItOC4wNDEgMTItMTUuMzExIDAtNy4zMjctOS4xNy04Ljk3Mi0xMi0zLjI3eiIvPjwvc3ZnPg==" />
        </button>
      </div>
    </>
  );
};

export default Card;
