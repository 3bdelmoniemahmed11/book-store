import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../../Store/Features/BookSlice";
import { displayDesc } from "../../Store/Features/BookSlice";
const BooksList = ({ isLoading, books, getBookId }) => {
  const { isLogIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const bookList =
    books.length > 0
      ? books.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex  justify-content-between align-items-center"
            >
              <div>{item.title}</div>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-primary"
                  // onClick={() => dispatch(displayDesc(item))}
                  onClick={() => getBookId(item.id)}
                >
                  Read
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={!isLogIn}
                  onClick={() =>
                    dispatch(deleteBooks(item))
                      .unwrap()
                      .then((oData) => console.log(oData))
                      .catch((error) => console.log(error))
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })
      : "there is no books";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading...." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
