import React, {useState} from "react";
import axios from 'axios';
export default function Section() {
  const [sectionName, setSectionName] = useState("");
  const [bookName, setBookName] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [sectionDescrption, setSectionDescrption] = useState("");
  const [moduleName, setModuleName] = useState("");
  const data = { bookName, sectionDescrption, lessonName, sectionName, moduleName };

  const addSection = (e) => {
    e.preventDefault();
    axios
      .put("/add_section", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteSection = (e) => {
    axios
      .delete(`/delete_section/${sectionName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editSection = (e) => {
    axios
      .post("/update_section", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <h2 className="text-right">أضف فقرة</h2>
      <form>
        <div className="form-row">
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
              name="moduleName"
              placeholder="أدخل اسم الوحدة"
              value={moduleName}
              onChange={(event) => setModuleName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="sectionName"
              placeholder="أدخل اسم الفقرة"
              value={sectionName}
              onChange={(event) => setSectionName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
          <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              placeholder="أدخل النص"
              rows="3"
              value={sectionDescrption}
              onChange={(event) => setSectionDescrption(event.target.value)}
              ></textarea>
          </div>
        </div>
        

        <button type="submit" className="btn" onClick={addSection}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editSection}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deleteSection}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
