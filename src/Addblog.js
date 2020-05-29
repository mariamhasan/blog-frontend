import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const AddBlog = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fileName, setfileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setfileName(e.target.files[0].name);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", file);
    formData.append("title", title);
    formData.append("Body", body);

    const res = await axios.post(
      "http://localhost:3001/posts/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
        
      }
    );

    const { fileName, filePath } = res.data;

    setUploadedFile({ fileName, filePath });
  };

  return (
    <React.Fragment>
      <form
        onSubmit={onSubmit}
        className="col-lg-6 offset-lg-3 "
        enctype="multipart/form-data"
      >
        <div className="form-group mb-4">
          <div className="custome-file mb-4">
            <label>Title</label>
            <input
              type="text"
              className="add-blog-title flex-element form-control"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-4">
            <label>Body</label>
            <input
              type="textarea"
              className="add-blog-body flex-element form-control"
              rows="50"
              cols="50"
              onChange={e => {
                setBody(e.target.value);
              }}
            />
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input form-control"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {fileName}
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </React.Fragment>
  );
};

export default AddBlog;


