import { FormEvent, useMemo, useRef, useState } from "react";

const Cars = () => {

  const [carType, setCarType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const allowSearch = useMemo(() => {
    return carType && date && time ? true : false;
  }, [carType, date, time])

  const searchCars = (e:FormEvent) => {
    e.preventDefault();
  }

  return (
    <main>
      <section className="
        flex justify-center items-end
        w-full h-[504px]
        pt-[97px]
        bg-[#F1F3FF]
      ">
        <div className="
          relative
          flex justify-center gap-x-[30px]
          w-[1440px]
        ">
          <div className="
            flex flex-col gap-y-4 self-center
            pb-[139px] pl-32
          ">
            <h1 className="text-[36px] font-bold">
              Sewa & Rental Mobil Terbaik di kawasan Jakarta
            </h1>
            <p className="text-[14px] font-light">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="
            relative
            flex items-end self-end
            w-full max-w-[704px] h-full
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
          <form onSubmit={searchCars} className="
            absolute -bottom-[60px]
            flex justify-center items-end gap-x-4
            w-[1047px]
            p-6
            bg-binar-neutral-1
            rounded-[6px]
            shadow-binar-high
            z-10
          ">
            <div className="
              flex justify-center items-start gap-x-4
              w-full
            ">
              <div className="
                flex flex-col
                w-full
              ">
                <label htmlFor="driver-type" className="text-xs">
                  Tipe Driver
                </label>
                <select name="driver-type" id="driver-type" required value={carType} onChange={e => {setCarType(e.target.value)}} className="
                  px-3 py-[7px]
                  border border-solid border-binar-neutral-2
                  rounded-md
                  text-xs text-binar-neutral-3
                ">
                  <option value="" disabled className="text-binar-neutral-2">Pilih Tipe Driver</option>
                  <option value="true" className="text-binar-neutral-5">Dengar Sopir</option>
                  <option value="false" className="text-binar-neutral-5">{"Tanpa Sopir (Lepas Kunci)"}</option>
                </select>
              </div>
              <div className="
                flex flex-col
                w-full
              ">
                <label htmlFor="date" className="text-xs">
                  Tanggal
                </label>
                <input type="date" name="date" id="date" required value={date} onChange={e => {setDate(e.target.value)}} className="
                  px-3 py-1.5
                  border border-solid border-binar-neutral-2
                  rounded-md
                  text-xs text-binar-neutral-3
                " />
              </div>
              <div className="
                flex flex-col
                w-full
              ">
                <label htmlFor="time" className="text-xs">
                  Waktu Jemput/Ambil
                </label>
                <input type="time" name="time" id="time" required value={time} onChange={e => {setTime(e.target.value)}}  className="
                  px-3 py-1.5
                  border border-solid border-binar-neutral-2
                  rounded-md
                  text-xs text-binar-neutral-3
                " />
              </div>
              <div className="
                flex flex-col
                w-full
              ">
                <label htmlFor="car-seats" className="text-xs">
                  Jumlah Penumpang
                </label>
                <div className="
                  relative
                  h-min
                ">
                  <input type="number" name="car-seats" id="car-seats" placeholder="Jumlah Penumpang" className="
                    w-full
                    px-3 py-[7px]
                    border border-solid border-binar-neutral-2
                    rounded-md
                    text-xs text-binar-neutral-3
                  " />  
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users absolute top-[7px] right-3 pointer-events-none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
              </div>
            </div>
            <button id="search-car-btn" type="submit" disabled={!allowSearch} className="
              flex justify-center items-center
              w-[92px] h-9
              border border-solid border-transparent hover:border-[#222222] disabled:hover:border-transparent
              rounded-[4px]
              bg-binar-sucess hover:bg-binar-neutral-1 disabled:hover:bg-binar-sucess
              text-[14px] font-bold text-binar-neutral-1 hover:text-binar-neutral-5 disabled:hover:text-binar-neutral-1
              disabled:opacity-65
            ">
              Cari Mobil
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Cars;