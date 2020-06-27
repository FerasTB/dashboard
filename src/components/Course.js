import React, { useState } from "react";
import axios from "axios";
export default function Course() {
  const [bookname, setBookname] = useState("");
  const [classname, setClassname] = useState("");
  const [price, setPrice] = useState("");
  const data = { bookname, classname, price };

  const addbook = (e) => {
    e.preventDefault();
    axios
      .put("/add_course", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletebook = (e) => {
    axios
      .delete(`/delete_course/${bookname}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editbook = (e) => {
    axios
      .post("/update_course", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <h2 className="text-right">أضف كتاب</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="price"
              placeholder="أدخل السعر"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="classnumber"
              placeholder="أدخل الصف"
              value={classname}
              onChange={(event) => setClassname(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="bookname"
              placeholder="أدخل اسم الكتاب"
              value={bookname}
              onChange={(event) => setBookname(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addbook}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editbook}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deletebook}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
