import React, { useState } from "react";
import SideNav from "./SideNav";
import "./addcourse.css";
function Addcourse() {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      courseName,
      description,
      duration,
    };

    // Send courseData to backend or perform necessary actions
    console.log("Course Data Submitted:", courseData);

    // Reset form fields
    setCourseName("");
    setDescription("");
    setDuration("");
  };
  return (
    <>
      <div
        className="w-100 m-0 p-0 d-flex"
        style={{ backgroundColor: "#fccca8" }}
      >
        <SideNav />
        <div className="mt-5 w-100">
          <div className="px-md-4 ">
            <div
              className="course-form  mt-5 text-center  p-3"
              style={{ height: "500px" }}
            >
              <h2>Add New Course</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="courseName">Course Name:</label>
                  <input
                    type="text"
                    id="courseName"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Duration (e.g., 10 hours):</label>
                  <input
                    type="text"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">Add Course</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcourse;
