import { FaApple, FaGoogle } from "react-icons/fa"
import worker from "../assets/workers.jpg"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebaseConfig.js"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {


  const navigate = useNavigate()
  const [formData, setFormData] = useState({
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      const user = userCredential.user
      console.log(user)
      alert("Login Successful")
      navigate("/chat")

    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }
  }


  return (

    <div className="min-h-screen bg-white">

      <div className="flex justify-center p-5">

        {/* Left Side */}

        <div className="w-full md:w-[50%] ">

          <div className="flex flex-col justify-center items-center mx-[4rem]">
            <h2 className="tracking-wider text-[35px] font-medium">
              Proceed to Account
            </h2>

            <p>
              Welcome Back, We are happy to see you back.
            </p>
          </div>

          {/* Form */}

          <div className="flex items-center justify-center mt-8">

            <form className="flex flex-col w-[360px]" onSubmit={handleSubmit}>

              <label
                htmlFor="emailForm"
                className="text-[#a6a6a6] mb-3"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="py-3 px-4 rounded-full bg-[#f3f3f3] mb-5 outline-none"
              />

              <label
                htmlFor="passwordForm"
                className="text-[#a6a6a6] mb-3"
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="py-3 px-4 rounded-full bg-[#f3f3f3] mb-5 outline-none"
              />

              <button
                type="submit"
                className="bg-[#FFD85F] rounded-full py-3 px-4 tracking-wide font-medium mt-2 hover:opacity-90 transition duration-300"
              >
                Submit
              </button>

            </form>

          </div>

          {/* Social Buttons */}

          <div className="flex justify-center w-full gap-2">

            <span className="border border-[#808080] rounded-full py-3 px-4 w-[172px] cursor-pointer text-center flex justify-center items-center gap-3 mt-5 hover:bg-[#f3f3f3] transition duration-300">
              <FaApple />
              Apple
            </span>

            <span className="border border-[#808080] rounded-full py-3 px-4 w-[172px] cursor-pointer text-center flex justify-center items-center gap-3 mt-5 hover:bg-[#f3f3f3] transition duration-300">
              <FaGoogle />
              Google
            </span>

          </div>

          {/* Divider */}

          <div className="flex justify-center mt-7">
            <div className="w-[360px] h-[1px] bg-[#c7c7c7]"></div>
          </div>

          {/* Bottom Links */}

          <div className="flex justify-center items-center w-full mt-4">

            <div className="text-[12.5px] flex justify-between w-[60%]">

              <span className="text-[#909090] tracking-wide">
                No account yet?

                <a
                  href="/signup"
                  className="underline text-black font-medium ml-1"
                >
                  Sign up
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

        {/* Right Side Image */}

        <div className="hidden md:block w-[50%] mr-10">

          <img
            src={worker}
            alt="workers"
            className="w-full h-full object-cover rounded-xl"
          />

        </div>

      </div>

    </div>
  )
}