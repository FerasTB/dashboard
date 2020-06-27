import React, { useState } from "react";
import axios from "axios";
export default function Active() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const data = { name, course };

  const enablestudent = (e) => {
    e.preventDefault();
    axios
      .put("/add_student", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const disablestudent = (e) => {
    axios
      .delete(`/delete_course/${name}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h2 className="text-right">تفعيل/إلغاء تفعيل اشتراك</h2>
      <form>
        <div className="form-row">
          <div className="col-md-4"></div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="name"
              placeholder="أدخل اسم الطالب"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="institution"
              placeholder="أدخل اسم الكتاب"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={enablestudent}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={disablestudent}>
          <i class="far fas fa-minus text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
