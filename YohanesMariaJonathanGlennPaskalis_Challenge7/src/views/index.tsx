import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <main>
        <section id="main" className="
          flex justify-center items-end
          w-full h-[504px]
          pt-[97px]
          bg-[#F1F3FF]
        ">
          <div className="
            flex justify-center
            w-[1440px]
          ">
            <div className="
              flex flex-col gap-y-4 self-center
              pb-[87px] pl-32 
            ">
              <h1 className="
                text-[36px] font-bold
              ">
                Sewa & Rental Mobil Terbaik di Kawasan Jakarta
              </h1>
              <p className="text-[14px] font-light">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button className="
                w-max
                px-3 py-2
                rounded-sm
                bg-binar-lime-green-4
                text-binar-neutral-1
              ">
                Mulai Sewa Mobil
              </button>
            </div>
            <div className="
              relative
              flex items-end self-end
              w-full max-w-[704px]
              h-full
            ">
              <img src="/img/Foto_Mobil.png" alt="" className="
                absolute
                w-full h-auto
              " />
              <div className="
                w-full h-[243px]
                rounded-tl-[60px]
                bg-binar-dark-blue-4   
              "></div>
            </div>
          </div>
        </section>
        <section id="our-section" className="
          flex justify-center items-center
          w-full h-[528px]
          pt-[100px]
        ">
          <div className="
            flex justify-center gap-x-[120px] gap-y-4
            w-[1440px]
          ">
            <div className="
              flex justify-end
            ">
              <img src="/img/Foto_Desain_Our_Section.png" alt="" className="
                w-[459px] h-[428px]
              " />
            </div>
            <div className="
              flex flex-col justify-center gap-y-4
              w-[468px]
            ">
              <h2 className="
                text-[24px] font-bold
              ">
                Best Car Rental for any kind of trip in Jakarta!
              </h2>
              <p className="text-[14px] font-light">
                Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <ul className="
                flex flex-col gap-y-4
              ">
                <li className="
                  flex gap-x-4
                ">
                  <div className="
                    flex justify-center items-center
                    w-6 h-6
                    rounded-xl
                    bg-binar-dark-blue-1
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[14px] font-light">
                    Sewa Mobil Dengan Supir di Jakarta 12 Jam
                  </span>
                </li>
                <li className="
                  flex gap-x-4
                ">
                  <div className="
                    flex justify-center items-center
                    w-6 h-6
                    rounded-xl
                    bg-binar-dark-blue-1
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[14px] font-light">
                    Sewa Mobil Lepas Kunci di Jakarta 24 Jam
                  </span>
                </li>
                <li className="
                  flex gap-x-4
                ">
                  <div className="
                    flex justify-center items-center
                    w-6 h-6
                    rounded-xl
                    bg-binar-dark-blue-1
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[14px] font-light">
                    Sewa Mobil Jangka Panjang Bulanan
                  </span>
                </li>
                <li className="
                  flex gap-x-4
                ">
                  <div className="
                    flex justify-center items-center
                    w-6 h-6
                    rounded-xl
                    bg-binar-dark-blue-1
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[14px] font-light">
                    Gratis Antar - Jemput Mobil di Bandara
                  </span>
                </li>
                <li className="
                  flex gap-x-4
                ">
                  <div className="
                    flex justify-center items-center
                    w-6 h-6
                    rounded-xl
                    bg-binar-dark-blue-1
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[14px] font-light">
                    Layanan Airport Transfer / Drop In Out
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="why-us" className="
          flex justify-center items-center
          w-full
          pt-[100px]
        ">
          <div className="
            flex flex-col justify-start gap-y-8
            w-[1440px]
            px-32
          ">
            <div className="
              flex flex-col gap-y-4
              text-left
            ">
              <h2 className="text-[24px] font-bold">
                Why Us?
              </h2>
              <span className="text-[14px] font-light">
                Mengapa harus pilih Binar Car Rental?
              </span>
            </div>
            <div className="
              flex gap-x-8 gap-y-4
            ">
              <div className="
                flex flex-col gap-4
                w-full
                p-6
                border border-solid border-binar-neutral-2
                rounded-lg
              ">
                <div className="
                  flex justify-center items-center
                  w-8 h-8
                  rounded-2xl
                  bg-binar-warning
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up stroke-binar-neutral-1">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="font-bold">
                  Mobil Lengkap
                </h3>
                <span className="text-[14px] font-light">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                </span>
              </div>
              <div className="
                flex flex-col gap-4
                w-full
                p-6
                border border-solid border-binar-neutral-2
                rounded-lg
              ">
                <div className="
                  flex justify-center items-center
                  w-8 h-8
                  rounded-2xl
                  bg-binar-danger
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag stroke-binar-neutral-1">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <h3 className="font-bold">
                  Harga Murah
                </h3>
                <span className="text-[14px] font-light">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                </span>
              </div>
              <div className="
                flex flex-col gap-4
                w-full
                p-6
                border border-solid border-binar-neutral-2
                rounded-lg
              ">
                <div className="
                  flex justify-center items-center
                  w-8 h-8
                  rounded-2xl
                  bg-binar-dark-blue-4
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock stroke-binar-neutral-1">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold">
                  Layanan 24 Jam
                </h3>
                <span className="text-[14px] font-light">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                </span>
              </div>
              <div className="
                flex flex-col gap-4
                w-full
                p-6
                border border-solid border-binar-neutral-2
                rounded-lg
              ">
                <div className="
                  flex justify-center items-center
                  w-8 h-8
                  rounded-2xl
                  bg-binar-sucess
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award stroke-binar-neutral-1">
                    <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold">
                  Supir Profesional
                </h3>
                <span className="text-[14px] font-light">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial" className="
          flex flex-col justify-end
          h-auto
          pt-[100px]
          overflow-hidden
        ">
          <div className="
            flex flex-col justify-end items-center self-center gap-y-8
            w-[1668px]
          ">
            <div className="
              flex flex-col justify-center items-center gap-y-4
            ">
              <h2 className="text-[24px] font-bold">
                Testimonial
              </h2>
              <span className="text-[14px] font-light">
                Berbagai review positif dari para pelanggan kami
              </span>
            </div>
          </div>
          <div>
            <div>

            </div>
          </div>
        </section>
        <section id="getting-started" className="
          flex justify-center items-center
          w-full
          pt-[100px]
        ">
          <div className="
            flex justify-center
            w-[1440px]
          ">
            <div className="
              flex flex-col justify-center items-center gap-y-[52px]
              w-[1168px] h-[326px]
              rounded-2xl
              bg-binar-dark-blue-4
            ">
              <div className="
                flex flex-col items-center gap-y-4
              ">
                <h2 className="text-[36px] text-center font-bold text-binar-neutral-1">
                  Sewa Mobil di Jakarta Sekarang
                </h2>
                <p className="
                  w-[468px]
                  text-[14px] text-center font-light text-binar-neutral-1
                ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="
                  px-3 py-2
                  rounded-sm
                  bg-binar-lime-green-4
                  text-[14px] font-bold text-binar-neutral-1
                ">
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="
          flex justify-center items-center
          w-full
          pt-[100px]
        ">
          <div className="
            flex justify-center
            w-[1440px]
          ">
            <div className="
              flex flex-col justify-between gap-y-6
            ">
              <div className="
                flex flex-col gap-4
              ">
                <h2 className="text-[24px] font-bold">
                  Frequently Asked Question
                </h2>
                <span className="text-[14px] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
              <div className="
                flex flex-col gap-y-4
                w-[668px]
              ">
                <div className="">
                  1
                </div>
                <div className="">
                  2
                </div>
                <div className="">
                  3
                </div>
                <div className="">
                  4
                </div>
                <div className="">
                  5
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Index;