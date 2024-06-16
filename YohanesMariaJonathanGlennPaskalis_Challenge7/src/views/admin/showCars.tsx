import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  createdAt: Date,
  updatedAt: Date,
}

const ShowCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carImages, setCarImages] = useState<string[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [deleteEndpoint, setDeleteEndpoint] = useState("");
  
  const pageName:string = useLocation().pathname.split("/")[2];

  const showModal = (car:Car) => {
    setModalIsVisible(true);
    setDeleteEndpoint(`http://localhost:8000/cars/${car.id}`);
  }

  const hideModal = () => {
    setModalIsVisible(false);
    setDeleteEndpoint("");
  }

  const getCars = () => {
    fetch("http://localhost:8000/cars")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCars(data);
        const carImagesTmp:string[] = []
        data.forEach((car:Car) => {
          const carImage = `/img/cars/${car.image.split("/")[2]}`;
          carImagesTmp.push(carImage);
        });
        setCarImages(carImagesTmp);
      })
      .catch(err => {
        if (err.name==="AbbortError") console.log("fetch aborted.")
      })
  }

  const deleteCar = () => {
    fetch(deleteEndpoint, {
      method: "DELETE"
    }).then(() => {
      getCars();
      hideModal();
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <>
      <AdminHeader pageName={pageName} />
      <main className="
        pt-[70px] pl-[290px]
        w-[1440px]
        bg-[#F4F5F7]
      ">
        <section id="control" className="
          flex flex-col gap-y-8
          pt-8 px-8
        ">
          <div className="flex items-center gap-1">
            <span className="font-bold">Cars</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Cars</span>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[24px] font-bold">List Cars</h1>
            <Link to="/admin/add-car" className="
              flex justify-center items-center
              w-[142px] h-9
              rounded-sm
              bg-binar-dark-blue-4
              text-[14px] font-bold text-binar-neutral-1
            ">
              Add New Car
            </Link>
          </div>
          <div className="
            flex gap-2
          ">
            <button className="
              flex justify-center items-center
              px-3 py-2
              border border-solid border-binar-dark-blue-4 disabled:border-binar-dark-blue-2
              rounded-sm
              bg-binar-dark-blue-1 disabled:bg-binar-neutral-1
              text-[14px] font-bold text-binar-dark-blue-4 disabled:text-binar-dark-blue-2
            ">
              All
            </button>
            <button disabled className="
              flex justify-center items-center
              px-3 py-2
              border border-solid border-binar-dark-blue-4 disabled:border-binar-dark-blue-2
              rounded-sm
              bg-binar-dark-blue-1 disabled:bg-binar-neutral-1
              text-[14px] font-bold text-binar-dark-blue-4 disabled:text-binar-dark-blue-2
            ">
              Small
            </button>
            <button disabled className="
              flex justify-center items-center
              px-3 py-2
              border border-solid border-binar-dark-blue-4 disabled:border-binar-dark-blue-2
              rounded-sm
              bg-binar-dark-blue-1 disabled:bg-binar-neutral-1
              text-[14px] font-bold text-binar-dark-blue-4 disabled:text-binar-dark-blue-2
            ">
              Medium
            </button>
            <button disabled className="
              flex justify-center items-center
              px-3 py-2
              border border-solid border-binar-dark-blue-4 disabled:border-binar-dark-blue-2
              rounded-sm
              bg-binar-dark-blue-1 disabled:bg-binar-neutral-1
              text-[14px] font-bold text-binar-dark-blue-4 disabled:text-binar-dark-blue-2
            ">
              Large
            </button>
          </div>
        </section>
        <section id="main" className="
          flex justify-center
          w-full
          py-8 pl-8
        ">
          <div className="
            grid grid-cols-[351px_351px_351px] gap-6
            w-[1440px]
          ">
            {cars.map((car, Index) => (
              <div key={`car-${car.id}`} className="
              grid grid-rows-[repeat(4,_min-content)_1fr] gap-y-4
              p-6
              rounded-lg
              bg-binar-neutral-1
              shadow-binar-low
              text-[14px]
            ">
              <img src={carImages[Index]} alt="" className="w-full h-[222px] object-cover" />
              <div className="flex flex-col gap-2">
                <span className="text-[14px] font-light">{car.manufacture} / {car.type}</span>
                <span className="font-bold">Rp {car.rentPerDay} / hari</span>
              </div>
              <div className="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                <span className="text-[14px] font-light">Start rent - Finished rent</span>
              </div>
              <div className="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span className="text-[14px] font-light">{`Updated at ${car.updatedAt?.toLocaleString().slice(0,-3)}`}</span>
              </div>
              <div className="flex gap-4">
                <button id={`btn-${car.id}`} onClick={() => showModal(car)} className="
                  flex justify-center items-center gap-x-2.5
                  w-full h-12
                  border border-solid border-binar-danger
                  rounded-sm
                  bg-binar-neutral-1
                  text-[14px] font-bold text-binar-danger
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FA2C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  Delete
                </button>
                <Link to={`/admin/edit-car/${car.id}`} className="
                  flex justify-center items-center gap-x-2.5
                  w-full h-12
                  border border-solid border-binar-neutral-1
                  rounded-sm
                  bg-binar-sucess
                  text-[14px] font-bold text-binar-neutral-1
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Edit
                </Link>
              </div>
            </div>
            ))}
          </div>
          <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-binar-neutral-5 bg-opacity-60 ${modalIsVisible ? 'flex' : 'hidden'}`}>
            <div className="
              flex flex-col justify-center items-center gap-y-6
              w-[387px] h-max
              py-6 px-8
              rounded
              bg-binar-neutral-1
              shadow-binar-high
              text-center
            ">
              <img src="/img/admin/Delete_Form_Car_Image.png" alt="" />
              <div className="flex flex-col gap-y-4">
                <span className="font-bold">
                  Menghapus Data Mobil
                </span>
                <p className="text-[14px] font-light">
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
                </p>
                <div className="flex justify-center gap-x-4">
                  <button onClick={deleteCar} className="
                    flex justify-center items-center
                    w-[87px] h-9
                    py-3 px-2
                    rounded-sm
                    bg-binar-dark-blue-4
                    text-[14px] font-bold text-binar-neutral-1
                  ">
                    Ya
                  </button>
                  <button onClick={hideModal} className="
                    flex justify-center items-center
                    w-[87px] h-9
                    py-3 px-2
                    border border-solid border-binar-dark-blue-4
                    rounded-sm
                    bg-binar-neutral-1
                    text-[14px] font-bold text-binar-dark-blue-4
                  ">
                    Tidak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
    
  )
}

export default ShowCars;