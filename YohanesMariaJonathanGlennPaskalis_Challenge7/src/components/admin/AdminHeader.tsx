import { Link } from "react-router-dom";

interface AdminHeaderProps {
  pageName:string,
};

const AdminHeader = ({ pageName }: AdminHeaderProps) => {
  return (
    <header>
      <nav className="fixed">
        <div className="
          fixed top-0 left-[70px] right-0 
          flex justify-between items-center
          h-[70px]
          py-[18px] px-6
          bg-binar-neutral-1
          shadow-binar-high
          z-[1]
        ">
          <div className="flex items-center">
            <div className="
              w-[100px] h-[34px]
              mr-[100px]
              bg-binar-dark-blue-1
            "></div>
            <button className="w-6 h-6 bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
          <div className="flex gap-x-4">
            <div className="flex">
              <input type="text" placeholder="Search" className="
                px-3 py-[7px]
                border border-solid border-binar-neutral-5
                text-binar-neutral-3
              " />
              <button className="
                flex justify-center items-center
                py-2 px-3
                border border-solid border-binar-dark-blue-4
                rounded-sm
                text-[14px] font-bold text-binar-dark-blue-4
              ">Search</button>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/img/profile_pictures/Unis_Badri.png" alt="" />
              <span className="text-[14px] font-light">Unis Badri</span>
              <button className="
                w-6 h-6
                bg-transparent
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="
          fixed top-0 bottom-0 left-0
          flex flex-col items-center 
          w-[70px]
          pt-[18px]
          bg-binar-dark-blue-4
        ">
          <div className="
            w-[34px] h-[34px]
            mb-[18px]
            bg-binar-dark-blue-1
          "></div>
          <Link to="/admin/dashboard" className={`flex flex-col justify-center items-center gap-y-0.5 w-full h-16 text-xs text-binar-neutral-1 ${pageName==='dashboard' ? 'bg-binar-dark-blue-3  font-bold' : 'font-light'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/cars" className={`flex flex-col justify-center items-center gap-y-0.5 w-full h-16 text-xs text-binar-neutral-1 ${pageName!=='dashboard' ? 'bg-binar-dark-blue-3 font-bold' : 'font-light'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            <span>Cars</span>
          </Link>
        </div>
        <div className="
          fixed top-[70px] bottom-0 left-[70px]
          flex flex-col
          w-[220px]
          pt-6
          bg-binar-neutral-1
        ">
          <span className="
            w-full
            py-[11px] px-6
            text-[14px] font-bold text-binar-neutral-3
          ">
            {pageName==='dashboard' ? 'DASHBOARD' : 'CARS'}
          </span>
          <span className="
            w-full
            py-[11px] px-6
            bg-binar-dark-blue-1
            text-[14px] font-bold
          ">
            {pageName==='dashboard' ? 'Dashboard' : 'List Car'}
          </span>
        </div>
      </nav>
    </header>
  )
}

export default AdminHeader;