import worker from "../assets/workers.jpg"
import { auth } from "./firebaseConfig.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SignUp() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      const user = userCredential.user

      await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: user.uid,
          fullName: formData.fullName,
          email: formData.email

        })

      })

      alert("Account Created Successfully")
      navigate("/login")

    } catch (error) {

      console.log(error.message)
      alert(error.message)

    }
  }


  return (
    <div className="min-h-screen bg-white">

      <div className="flex justify-between p-5 gap-5">

        {/* Left Side Image */}

        <div className="hidden md:block w-[50%] ml-5">

          <img
            src={worker}
            alt="workers"
            className="w-full h-full object-cover rounded-xl"
          />

        </div>

        {/* Right Side */}

        <div className="w-full md:w-[50%]">

          <div className="flex flex-col justify-center items-center mx-[4rem]">

            <h2 className="tracking-wider text-[35px] font-medium">
              Register
            </h2>

            <p>
              Welcome! We're grateful to have you with us.
            </p>

          </div>

          {/* Form */}

          <div className="flex items-center justify-center mt-5">

            <form className="flex flex-col w-[360px]" onSubmit={handleSubmit}>

              <label
                htmlFor="full"
                className="text-[#a6a6a6] mb-3"
              >
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                className="py-3 px-4 rounded-full bg-[#f3f3f3] mb-5 outline-none"
                onChange={handleChange}
              />

              <label
                htmlFor="email"
                className="text-[#a6a6a6] mb-2"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                className="py-3 px-4 rounded-full bg-[#f3f3f3] mb-5 outline-none"
                onChange={handleChange}
              />

              <label
                htmlFor="password"
                className="text-[#a6a6a6] mb-2"
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                className="py-3 px-4 rounded-full bg-[#f3f3f3] mb-5 outline-none"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="bg-[#FFD85F] rounded-full py-3 px-4 tracking-wide font-medium mt-1 hover:opacity-90 transition duration-300"
              >
                Submit
              </button>

            </form>

          </div>

          {/* Divider */}

          <div className="flex justify-center mt-5">

            <div className="w-[360px] h-[1px] bg-[#c7c7c7]"></div>

          </div>

          {/* Bottom Links */}

          <div className="flex justify-center items-center w-full mt-3">

            <div className="text-[12.5px] flex justify-between w-[60%]">

              <span className="text-[#909090] tracking-wide">
                Already have an account?

                <a
                  href="/login"
                  className="underline text-black font-medium ml-1"
                >
                  Sign in
                </a>

              </span>

              <a
                href="#"
                className="underline tracking-wide"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}