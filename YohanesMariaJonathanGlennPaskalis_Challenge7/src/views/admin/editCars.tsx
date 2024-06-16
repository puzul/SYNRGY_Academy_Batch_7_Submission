import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";

interface Car {
  id: string,
  plate: string,
  manufacture: string,
  image: string,
  rentPerDay: number,
  capacity: number,
  description: string,
  availableAt: string,
  transmission: string,
  available: boolean,
  type: string,
  year: number,
  options: string[],
  specs: string[],
}

const EditCars = () => {
  const id = useLocation().pathname.split("/")[3];
  const [car, setCar] = useState<Car | null>(null);
  const [manufacture, setManufacture] = useState("");
  const [type, setType] = useState("");
  const [rentPerDay, setRentPerDay] = useState(0);
  const pageName = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/cars/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCar(data);
        setManufacture(data.manufacture);
        setType(data.type);
        setRentPerDay(data.rentPerDay);
      })
      .catch(err => {
        if (err.name==="AbbortError") console.log("fetch aborted.")
      })
  }, [])

  const editCar = () => {
    const newCar = { manufacture, type, rentPerDay }
    fetch(`http://localhost:8000/cars/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCar),
      }
    ).then(() => {
      navigate("/admin/cars");
    })
  }
    return (
      <>
        <AdminHeader pageName={pageName} />
        <main className="
          pt-[70px] pl-[290px]
          w-[1440px] min-h-screen
          bg-[#F4F5F7]
        ">
          <section id="control" className="
            flex flex-col gap-y-8
            pt-8 px-8
          ">
            <div className="flex items-center gap-1">
              <span className="font-bold">Cars</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
              <span className="font-bold">List Car</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
              <span>Add New Car</span>
            </div>
            <div className="flex justify-left">
              <h1 className="text-[24px] font-bold">Add New Car</h1>
            </div>
          </section>
          <section id="main" className="
            flex flex-col justify-center gap-y-8
            w-full
            p-8
          ">
            <div className="
              flex flex-col justify-between gap-y-[300px]
              w-full
            ">
              <div className="
                flex flex-col gap-y-4
                w-full
                p-4
                bg-binar-neutral-1
              ">
                <div className="flex h-9">
                  <label htmlFor="manufacture" className="w-[147px] text-xs">Pembuat<span className="text-red-600">*</span></label>
                  <input type="text" name="manufacture" value={manufacture} onChange={e => setManufacture(e.target.value) } placeholder="Placeholder" className="
                    w-[339px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    py-[9px] px-3
                    text-xs
                    placeholder:text-binar-neutral-2
                  " id="manufacture" />
                </div>
                <div className="flex h-9">
                  <label htmlFor="type" className="w-[147px] text-xs">Tipe<span className="text-red-600">*</span></label>
                  <input type="text" name="type" value={type} onChange={e => setType(e.target.value)} placeholder="Placeholder" className="
                    w-[339px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    py-[9px] px-3
                    text-xs
                    placeholder:text-binar-neutral-2
                  " id="type" />
                </div>
                <div className="flex h-9">
                  <label htmlFor="rentPerDay" className="w-[147px] text-xs">Harga <span className="text-red-600">*</span></label>
                  <input type="number" name="rentPerDay" value={rentPerDay} onChange={e => setRentPerDay(parseInt(e.target.value))} placeholder="Placeholder" className="
                    w-[339px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    py-[9px] px-3
                    text-xs
                    placeholder:text-binar-neutral-2
                  " id="rentPerDay" />
                </div>
                <div className="flex h-9">
                  <label htmlFor="" className="w-[147px] text-xs">Start Rent</label>
                  <span className="text-xs text-binar-neutral-4">-</span>
                </div>
                <div className="flex h-9">
                  <label htmlFor="" className="w-[147px] text-xs">Finish Rent</label>
                  <span className="text-xs text-binar-neutral-4">-</span>
                </div>
                <div className="flex h-9">
                  <label htmlFor="" className="w-[147px] text-xs">Created at</label>
                  <span className="text-xs text-binar-neutral-4">-</span>
                </div>
                <div className="flex h-9">
                  <label htmlFor="" className="w-[147px] text-xs">Updated at</label>
                  <span className="text-xs text-binar-neutral-4">-</span>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Link to="/admin/cars" className="
                  flex justify-center items-center
                  w-[87px] h-9
                  py-2 px-3
                  border border-solid border-binar-dark-blue-4
                  rounded-sm
                  bg-binar-neutral-1
                  text-[14px] font-bold text-binar-dark-blue-4
                ">
                  Cancel
                </Link>
                <button onClick={editCar} className="
                  flex justify-center items-center
                  w-[87px] h-9
                  py-2 px-3
                  rounded-sm
                  bg-binar-dark-blue-4
                  text-[14px] font-bold text-binar-neutral-1
                ">
                  Save
                </button>
              </div>
            </div>
          </section>
        </main>
      </>
  )
}

export default EditCars;