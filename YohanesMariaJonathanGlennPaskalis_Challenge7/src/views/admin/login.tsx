import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <main className="
      flex justify-center
      w-screen h-screen
      bg-binar-dark-blue-4
    ">
      <div className="
        relative
        flex
        w-[1440px]
      ">
        <img src="/img/admin/Login_Background.png" alt="" />
        <div className="
          absolute top-0 bottom-0 right-0
          flex flex-col justify-center gap-y-8
          px-8
          bg-binar-neutral-1
        ">
          <div className="
            w-[100px] h-[34px]
            mr-[100px]
            bg-binar-dark-blue-2
          "></div>
          <h1 className="text-[32px] font-bold">
            Welcome, Admin BCR
          </h1>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="text" id="email" className="
              px-3 py-1.5
              border border-solid border-binar-neutral-2
              rounded-md
              text-binar-neutral-3
            " />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password" id="password" className="
              px-3 py-1.5
              border border-solid border-binar-neutral-2
              rounded-md
              text-binar-neutral-3
            " />
          </div>
          <Link to="/admin/dashboard" className="
            flex justify-center items-center
            w-full
            py-2 px-3
            rounded-sm
            bg-binar-dark-blue-4
            text-[14px] font-bold text-binar-neutral-1
          ">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Login;