import React, { useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../Store/Features/BookSlice";
const BookContainer = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const { isLoading, books, bookInfo } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const getBookId = (id) => {
    const selectedBooks = books.find((item) => item.id === id);
    setSelected((prev) => {
      return { ...prev, ...selectedBooks };
    });
    console.log(selectedBooks);
  };
  return (
    <>
      <div className="container">
        <hr className="my-5" />
        <div className="row">
          <div className="col">
            <BooksList
              isLoading={isLoading}
              books={books}
              getBookId={getBookId}
            />
          </div>
          <div className="col side-line">
            <BookInfo bookInfo={bookInfo} selected={selected} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookContainer;
