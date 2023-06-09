import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBooks } from "../Store/Features/BookSlice";

const AddForm = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const { isLogIn } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispatch(insertBooks(data));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 mt-3">
            <h2>Insert Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  ref={title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  ref={price}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <textarea
                  className="form-control"
                  id="Description"
                  rows="3"
                  required
                  ref={description}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isLogIn}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddForm;
