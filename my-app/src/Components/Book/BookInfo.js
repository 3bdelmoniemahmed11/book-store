import React from "react";

const BookInfo = ({ bookInfo, selected }) => {
  return (
    <>
      <h2>Book Details</h2>
      {selected != null ? (
        <div>
          <p className="fw-bold">Title:{selected.title}</p>
          <p className="fw-light">Description: {selected.description}</p>
          <p className="fst-italic">Price:{selected.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      )}
    </>
  );
};

export default BookInfo;
