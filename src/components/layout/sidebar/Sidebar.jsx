import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/chronoHaven.svg';
import { AiOutlineDashboard } from "react-icons/ai";
import { PiWatch } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
    return(
        <aside className="w-[300px] bg-white fixed top-0 bottom-0 left-0 border-r z-50">
            <Link to={ '/admin/dashboard' } className="block p-4 border-b">
                <img src={ Logo } alt="ChronoHaven" className="block max-w-full h-auto max-h-6" />
            </Link>
            <ul className="text-sm flex flex-col gap-4 px-4 py-8 font-medium">
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2  rounded-lg bg-primary text-white">
                        <AiOutlineDashboard size={ 24 } />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg hover:text-primary transition-3">
                        <PiWatch size={ 24 } />
                        <span>Product Management</span>
                    </Link>
                    <ul className="list-disc pt-2 pl-14 flex flex-col gap-4">
                        <li>
                            <Link>Products</Link>
                        </li>
                        <li>
                            <Link>Categories</Link>
                        </li>
                    </ul>
                </li>
                {/* <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg hover:text-primary transition-3">
                        <BiCategory size={ 24 } />
                        <span>Category</span>
                    </Link>
                </li> */}
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg hover:text-primary transition-3">
                        <LiaShippingFastSolid size={ 24 } />
                        <span>Order Management</span>
                    </Link>
                </li>
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg hover:text-primary transition-3">
                        <FaUsers size={ 24 } />
                        <span>Customer Management</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar;