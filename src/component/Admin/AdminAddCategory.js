import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "./../../redux/action/categoryAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddCategory = () => {
  const dispatch = useDispatch();

  // bind img by useState
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isPress, setIsPress] = useState(false);

  // show and change img on browser
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allCategory.category);
  

  // save data (new category)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || selectedFile === null) {
      console.log("من فضلك اكمل البيانات");
      return;
    }

    //  save data{img && name} on server{local- postMan}
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      console.log("تم الانتهاء");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res === 201){
          console.log("تم الاضافة بنجاح")
          notify();
        } else{           
          console.log("هناك مشكلة في الاضافة")
      }
    }
  }, [loading]);

  // show notify library
  const notify = ()=> toast("تم الاضافة بنجاح");

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف تصنيف جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h4> تم الانتهاء </h4>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
