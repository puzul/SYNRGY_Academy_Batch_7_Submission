const Footer = () => {
  return (
    <footer className="
      flex justify-center items-center
      w-full
      py-[60px]
      mt-[100px]
    ">
      <div className="
        flex justify-center
        w-[1440px] h-full
      ">
        <div className="
          flex justify-between
          w-[1168px]
        ">
          <div>
            <ul className="
              flex flex-col
            ">
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">binarcarrental@gmail.com</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">081-233-344-808</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">Our services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">Why Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">Testimonial</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[14px] font-light">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start gap-y-4">
            <span className="text-[14px] font-light">
              Connect with us
            </span>
            <ul className="
              flex gap-x-4
            ">
              <li>
                <a href="" className="text-[14px] font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className="text-[14px] font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className="text-[14px] font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className="text-[14px] font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className="text-[14px] font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitch">
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start gap-y-4">
            <p className="text-[14px] font-light">Copyright Binar 2022</p>
            <a href="#" className="
              w-[100px] h-[38px]
              bg-binar-dark-blue-4
            "></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;