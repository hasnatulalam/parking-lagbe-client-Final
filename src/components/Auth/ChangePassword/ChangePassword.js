import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../../../components/assets/images/login.jpg";




const ChangePassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:9000/api/auth/forget-password/${id}/${token}",
      input
    );
    if (res.status === 200) {
      alert("password changed Successfully");
      navigate("/login");
    }
  };
  return (

    <div className="py-10">

      <section className='max-h-screen flex  justify-around items-center'>
        <div className="card items-center card-side gap-x-10 flex-col lg:flex-row p-10">
          <figure className='max-w-md'><img src={loginImg} alt="Movie" className='w-full' /></figure>
          <div className="card-body p-3 lg:p-8 w-64 sm:w-full lg:w-96 shadow-xl rounded-2xl">
            <h2 className="card-title text-2xl justify-center mb-5">New Password</h2>

            <form
              onSubmit={handleSubmit}
              className="form-control w-full max-w-md"
            >
              <div className="form-control w-full max-w-md">
                <input
                   required

                   className="input input-bordered w-full max-w-full focus:outline-none"
                   type="password"
                   name="password"
                   id="password"
                   placeholder="Your Password"
                   onChange={(e) =>
                     setInput({
                       ...input,
                       [e.target.name]: e.target.value,
                     })
                   }
                />
              </div>
              <div className="form-control w-full max-w-md my-3">
                <input
                  required

                  className="input input-bordered w-full max-w-full focus:outline-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your  confirmPassword  Password"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <input type="submit" className='btn btn-primary mb-3 mt-5' value="Change Password" />
            </form>
          </div>
        </div>
      </section>
    </div>


  );
};

export default ChangePassword;