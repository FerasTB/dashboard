import React, { useState } from "react";
import axios from "axios";
export default function Lesson() {
  const [lessonName , setLessonName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [bookName , setBookName] = useState("");
  const data = {lessonName, bookName, moduleName};

  const addLesson = (e) => {
    e.preventDefault();
    axios
      .put ("/add_lesson", data)
      .then ( (res) => {
        console.log(res);
      })
      .catch ((err) => {
        console.log(e);
      })
  };
  const editLesson = (e) => {
    e.preventDefault();
    axios 
      .post(`/edit_lesson/${lessonName}`, {data})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const deleteLesson = (e) => {
    e.preventDefault();
    axios 
      .delete(`/delete_leasson/${lessonName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return <section>
    <h2 className="text-right">أضف درس</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="lessonName"
              placeholder="أدخل اسم الدرس"
              value={lessonName}
              onChange={(event) => setLessonName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="classnumber"
              placeholder="أدخل اسم الوحدة"
              value={moduleName}
              onChange={(event) => setModuleName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="bookname"
              placeholder="أدخل اسم الكتاب"
              value={bookName}
              onChange={(event) => setBookName(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addLesson}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editLesson}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deleteLesson}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
  </section>;
}
