import React from 'react'
import { useFormik } from "formik";
import { loginSchema } from "../schemas/loginSchema";
import { useNavigate } from 'react-router-dom';


const initialValues = {
    mobile: '',
    password: ''
  }

function Login() {

      const navigate = useNavigate()


    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
      initialValues,
      validationSchema: loginSchema,
    })
  
  
  
    
    return (
      <div className="max-w-[1640px] mx-auto h-screen bg-white flex justify-center items-center">
        <div className="w-[350px] h-auto bg-white my-24 text-center items-center rounded-lg flex flex-col sm:shadow-custom-light sm:shadow-black sm:drop-shadow-xl">
          <form onSubmit={handleSubmit}>
            <h1 className="m-10 font-sans text-black font-bold text-2xl">
              Login
            </h1>
         
             <input
              type="text"
              name='mobile'
              placeholder="Mobile No :"
              className="w-[300px] h-10 p-2 px-4 mt-6 rounded-xl outline-none shadow-custom-light shadow-black drop-shadow-xl"
              value={values.mobile} onBlur={handleBlur} onChange={handleChange}
            />
            <div className="w-[300px] px-2 pt-1 flex justify-start text-xs text-red-500 ">
              {errors.mobile && touched.mobile && <p>{errors.mobile}</p> }
            </div>
            <input
              type="password"
              name='password'
              placeholder="Password"
              className="w-[300px] h-10 p-2 px-4 mt-6 rounded-xl outline-none shadow-custom-light shadow-black drop-shadow-xl"
              value={values.password} onBlur={handleBlur} onChange={handleChange}
            />
            <div className="w-[300px] px-2 pt-1 flex justify-start text-xs text-red-500 ">
              {errors.password && touched.password && <p>{errors.password}</p> }
            </div>
            <button
            type='submit'
            className="w-[100px] bg-[#429690] hover:bg-[#2F7E79] text-white font-bold p-4 rounded-full mb-48 mt-12 shadow-custom-light shadow-black drop-shadow-xl"
          >
            Login
          </button>
          </form>
          
          <button
            onClick={() => navigate("/signup")}
            className="text-violet-400  hover:text-violet-500 mb-4 cursor-pointer"
          >
            Sign up
          </button>
        </div>
  
      </div>
    );
}

export default Login