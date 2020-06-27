import React, { useState } from "react";
import axios from "axios";
export default function Module() {
  const [bookname, setBookname] = useState("");
  const [modulename, setModulename] = useState("");
  const data = { bookname, modulename };

  const addmodule = (e) => {
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
  const deletemodule = (e) => {
    axios
      .delete(`/delete_course/${bookname}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h2 className="text-right">أضف وحدة</h2>
      <form>
        <div className="form-row">
          <div className="col-md-4"></div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="modulename"
              placeholder="أدخل اسم الوحدة"
              value={modulename}
              onChange={(event) => setModulename(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="bookname"
              placeholder="أدخل الكتاب"
              value={bookname}
              onChange={(event) => setBookname(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addmodule}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletemodule}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
