import React from "react";
import cookie from "cookie";

import classes from "./Card.module.css";
const addBookURl = "https://librarybackend22.herokuapp.com/mybooks";
const wishlistURl = "https://librarybackend22.herokuapp.com/mywishlist";

const Card = ({ book, setBookState }) => {
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;

  const addToOwned = async () => {
    const cookies = cookie.parse(document.cookie);

    await fetch(addBookURl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
      body: JSON.stringify({
        googlebook_id: book.id,
        thumbNail: thumbnail,
        book_title: book.volumeInfo.title,
        book_authors: book.volumeInfo.authors,
        book_description: book.volumeInfo.description,
      }),
    });
    setBookState(true)
  };

  const addToWishList = () => {
    const cookies = cookie.parse(document.cookie);
    fetch(wishlistURl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
      body: JSON.stringify({
        googlebook_id: book.id,
        thumbNail: thumbnail,
        book_title: book.volumeInfo.title,
        book_authors: book.volumeInfo.authors,
        book_description: book.volumeInfo.description,
      }),
    });
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgBox}>
          <img
            src={thumbnail}
            alt={book.volumeInfo.title}
            className={classes.coverImg}
          />
        </div>
        <div className={classes.textBox}>
          <h3 className={classes.titleTxt}>{book.volumeInfo.title}</h3>
          <br />
          <h4 className={classes.authorTxt}>By: {book.volumeInfo.authors}</h4>
          <div className={classes.btnBox}>
            <button onClick={addToOwned} className={classes.ownedBtn}>
              Owned
            </button>
            {/* <button onClick={addToWishList} className={classes.wishListBtn}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNC40MTljLTIuODI2LTUuNjk1LTExLjk5OS00LjA2NC0xMS45OTkgMy4yNyAwIDcuMjcgOS45MDMgMTAuOTM4IDExLjk5OSAxNS4zMTEgMi4wOTYtNC4zNzMgMTItOC4wNDEgMTItMTUuMzExIDAtNy4zMjctOS4xNy04Ljk3Mi0xMi0zLjI3eiIvPjwvc3ZnPg==" />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
