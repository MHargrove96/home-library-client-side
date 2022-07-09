import React from "react";
import cookie from "cookie";

import classes from "./UserBookCard.module.css";
const addBookURl = "https://librarybackend22.herokuapp.com/mybooks";
const removeBookURL = "https://librarybackend22.herokuapp.com/mybooks";

const UserBookCard = ({ book, setBookState }) => {
  const {
    ownedbook_id,
    googlebook_id,
    thumbNail,
    book_title,
    book_authors,
    book_description,
  } = book;

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

  const removeBook = async (id) => {
    const cookies = cookie.parse(document.cookie);

    await fetch(`${removeBookURL}/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
    });
    setBookState(true)
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgBox}>
          <img src={thumbNail} alt={book_title} className={classes.coverImg} />
        </div>
        <div className={classes.textBox}>
          <h3 className={classes.titleTxt}>{book_title}</h3>
          <br />
          <h4 className={classes.authorTxt}>By: {book_authors}</h4>
          <div className={classes.btnBox}>
            <button onClick={() => {removeBook(ownedbook_id)}} className={classes.removeBookBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.5 15c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-2-16h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-7 15.5c0-1.267.37-2.447 1-3.448v-6.052c0-.552.447-1 1-1s1 .448 1 1v4.032c.879-.565 1.901-.922 3-1.006v-7.026h-18v18h13.82c-1.124-1.169-1.82-2.753-1.82-4.5zm-7 .5c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1v10zm5 0c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1v10z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBookCard;
