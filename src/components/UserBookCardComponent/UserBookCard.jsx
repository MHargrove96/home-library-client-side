import React from "react";
import cookie from "cookie";

import classes from "./UserBookCard.module.css";
const addBookURl = "http://localhost:4001/mybooks";
const wishlistURl = "http://localhost:4001/mywishlist";

const UserBookCard = ({ book }) => {
  console.log(book);

  const {
    ownedbook_id,
    googlebook_id,
    thumbNail,
    book_title,
    book_authors,
    book_description
  } = book

  const addToOwned = () => {
    const cookies = cookie.parse(document.cookie);

    fetch(addBookURl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
      body: JSON.stringify({
        googlebook_id: googlebook_id,
        thumbNail: thumbNail,
        book_title: book_title,
        book_authors: book_authors,
        book_description: book_description,
      }),
    });
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
        googlebook_id: googlebook_id,
        thumbNail: thumbNail,
        book_title: book_title,
        book_authors: book_authors,
        book_description: book_description,
      }),
    });
  };

  

  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgBox}>
          <img
            src={thumbNail}
            alt={book_title}
            className={classes.coverImg}
          />
        </div>
        <div className={classes.textBox}>
          <h3 className={classes.titleTxt}>{book_title}</h3>
          <br />
          <h4 className={classes.authorTxt}>By: {book_authors}</h4>
          <div className={classes.btnBox}>
            <button onClick={addToOwned} className={classes.ownedBtn}>
              Owned
            </button>
            <button onClick={addToWishList} className={classes.wishListBtn}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNC40MTljLTIuODI2LTUuNjk1LTExLjk5OS00LjA2NC0xMS45OTkgMy4yNyAwIDcuMjcgOS45MDMgMTAuOTM4IDExLjk5OSAxNS4zMTEgMi4wOTYtNC4zNzMgMTItOC4wNDEgMTItMTUuMzExIDAtNy4zMjctOS4xNy04Ljk3Mi0xMi0zLjI3eiIvPjwvc3ZnPg==" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBookCard;
