import "./NewParking.css";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../../Data/FormSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewParking = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  const { data, loading, error } = useFetch("http://localhost:8000/api/parkingSlot/allParkingSlot");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSlots(value);

  };

  console.log(files)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/ds6f1oe6i/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newParking = {
        ...info,
        slots,
      
        photos: list,
      }

      await axios.post("http://localhost:8000/api/parking/addparking", newParking);

    } catch (err) { console.log(err) }

  };
  return (

    <div className="new">

      <div className="newContainer">
        <div className="top">
          <h1>Add New Parking</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <image
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Parking Slot</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                    data.map((slots) => (
                      <option key={slots._id} value={slots._id}>
                        {slots.title}
                      </option>
                    ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>




            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default NewParking;