import React, { useContext, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";






import axios from "axios";
const UserComplain= () => {

 
  const [description, setDescription] = useState("")
  const handleValue = (event) => {
    setDescription(event.target.value);
  }




  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await axios.post("http://localhost:8000/api/complain/addcomplain", {  description },);
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit} className="bg-slate-200 max-w-2xl mx-auto">
          <div className="col-12 col-lg-6 mx-auto">
            <div className="form-container py-5">

              <h2 className=" text-center mb-2 abril-font">
                Give Us An Honest Complain, Please !
              </h2>
              <p className="text-cyan text-center mb-5">
                Your Complain helps us to improve our operating system and
                provide you better services.
              </p>


              <Row className="mb-3">
               
                <textarea

                  required


                  className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={description}
                  onChange={handleValue}
                />
              </Row>

              <div className="text-center">
                <Button
                  type="submit"
                  className="px-4 py-2 fw-bold btn-light-green shadow-none"
                >
                  <i className="fas fa-clipboard-check text-warning me-2"></i>
                  Complain  Us
                </Button>
              </div>

            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UserComplain;