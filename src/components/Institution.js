import React, { useState } from "react";
import axios from "axios";
export default function Institution() {
    
  const [institutionName , setinstitutionName] = useState("");
  const [bookName, setBookName] = useState("");
  const data = {institutionName, bookName};

  const addInstitution = (e) => {
    e.preventDefault();
    axios
      .put ("/add_institution", data)
      .then ( (res) => {
        console.log(res);
      })
      .catch ((err) => {
        console.log(e);
      })
  };
  const editInstitution = (e) => {
    e.preventDefault();
    axios 
      .post(`/edit_institution/${institutionName}`, {data})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const deleteInstitution = (e) => {
    e.preventDefault();
    axios 
      .delete(`/delete_institution/${institutionName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return <section>
    <h2 className="text-right">أضف معهد</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="institutionName"
              placeholder="أدخل اسم معهد"
              value={institutionName}
              onChange={(event) => setinstitutionName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="bookName"
              placeholder="أدخل اسم الكتاب"
              value={bookName}
              onChange={(event) => setBookName(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addInstitution}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editInstitution}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deleteInstitution}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
  </section>;
}
