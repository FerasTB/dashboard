import React, { useState } from "react";
import axios from "axios";
export default function Student() {
  
  const [studentName , setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [institutionName , setInstitutionName] = useState("");
  const data = {institutionName, studentNumber, studentName};

  const addStudent = (e) => {
    e.preventDefault();
    axios
      .put ("/add_student", data)
      .then ( (res) => {
        console.log(res);
      })
      .catch ((err) => {
        console.log(e);
      })
  };
  const editStudent = (e) => {
    e.preventDefault();
    axios 
      .post(`/edit_student/${studentName}`, {data})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const deleteStudent = (e) => {
    e.preventDefault();
    axios 
      .delete(`/delete_student/${studentName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return <section>
    <h2 className="text-right">أضف طالب</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="studentName"
              placeholder="أدخل اسم الطالب"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="institutionName"
              placeholder="أدخل اسم المعهد"
              value={institutionName}
              onChange={(event) => setInstitutionName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="studentNumber"
              placeholder="أدخل رقم الطالب"
              value={studentNumber}
              onChange={(event) => setStudentNumber(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addStudent}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editStudent}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deleteStudent}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
  </section>;
}
