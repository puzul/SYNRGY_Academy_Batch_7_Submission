import { useLocation } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import { useEffect, useState } from "react";

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

const Dashboard = () => {
  const pageName = useLocation().pathname.split("/")[2];
  const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [cars, setCars] = useState<Car[]>([]);
  const [firstTenCars, setFirstTenCars] = useState<Car[]>([]);
  
  const getCars = () => {
    fetch("http://localhost:8000/cars")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCars(data);
        const firstTenCarsTmp:Car[] = [];
        for (let i=0; i<10 && i<data.length; i++) firstTenCarsTmp.push(data[i]);
        setFirstTenCars(firstTenCarsTmp)
      })
      .catch(err => {
        if (err.name==="AbbortError") console.log("fetch aborted.")
      })
  }

  useEffect(() => {
    getCars();
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
            <span className="font-bold">Dashboard</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Dashboard</span>
          </div>
          <div className="flex justify-left">
            <h1 className="text-[24px] font-bold">Dashboard</h1>
          </div>
        </section>
        <section id="main" className="
          flex flex-col justify-center gap-y-8
          w-full
          p-8
        ">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2 h-6">
              <div className="w-1 bg-binar-dark-blue-4">
              </div>
              <h2 className="text-[14px] font-bold">List Orders</h2>
            </div>
            <table className="text-[14px]">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">No</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">User Email</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Car</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Start Rent</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Finisih Rent</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Price</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={`user-${user}`}>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">{index+1}</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">User Email</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Car</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Start Rent</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Finish Rent</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Price</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Status</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-end">
              <div className="flex gap-x-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Limit</span>
                  <select name="" id="" disabled defaultValue="" className="
                    flex justify-center items-center
                    h-9
                    px-3
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <option value="">10</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Jump to page</span>
                  <div className="flex">
                    <select name="" id="" disabled defaultValue="" className="
                      flex justify-center items-center
                      w-[76px]
                      px-3
                      border border-solid border-binar-neutral-2
                      rounded-sm
                      text-xs text-binar-neutral-3
                    ">
                      <option value="">1</option>
                    </select>
                    <button className="
                      flex justify-center items-center
                      py-2 px-3
                      rounded-sm
                      bg-binar-dark-blue-4
                      text-[14px] font-bold text-binar-neutral-1
                    ">
                      Go
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <ul className="flex">
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">&laquo;</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">1</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">2</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">3</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">...</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">9</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">&raquo;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2 h-6">
              <div className="w-1 bg-binar-dark-blue-4">
              </div>
              <h2 className="text-[14px] font-bold">List Cars</h2>
            </div>
            <table className="text-[14px]">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">No</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Name</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Category</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Price</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Start Rent</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Finished Rent</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Created at</th>
                  <th className="py-3 px-4 bg-binar-dark-blue-1 text-left">Updated at</th>
                </tr>
              </thead>
              <tbody>
                {firstTenCars.map((car:Car, index) => (
                  <tr key={`car-${car.id}`}>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">{index+1}</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">{car.manufacture} {car.type}</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Category</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">{car.rentPerDay}</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Start Rent</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">Finish Rent</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">{car.createdAt?.toLocaleDateString()}</td>
                    <td className="py-3 px-4  border-b border-solid border-b-binar-dark-blue-1 bg-binar-neutral-1">{car.updatedAt?.toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-end">
              <div className="flex gap-x-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Limit</span>
                  <select name="" id="" disabled defaultValue="" className="
                    flex justify-center items-center
                    h-9
                    px-3
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <option value="">10</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Jump to page</span>
                  <div className="flex">
                    <select name="" id="" disabled defaultValue="" className="
                      flex justify-center items-center
                      w-[76px]
                      px-3
                      border border-solid border-binar-neutral-2
                      rounded-sm
                      text-xs text-binar-neutral-3
                    ">
                      <option value="">1</option>
                    </select>
                    <button className="
                      flex justify-center items-center
                      py-2 px-3
                      rounded-sm
                      bg-binar-dark-blue-4
                      text-[14px] font-bold text-binar-neutral-1
                    ">
                      Go
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <ul className="flex">
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">&laquo;</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">1</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">2</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">3</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">...</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">9</a>
                  </li>
                  <li className="
                    flex justify-center items-center
                    w-[38px] h-[38px]
                    border border-solid border-binar-neutral-2
                    rounded-sm
                    text-xs text-binar-neutral-3
                  ">
                    <a href="#">&raquo;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </> 
  )
}

export default Dashboard;