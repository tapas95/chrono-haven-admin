import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/chronoHaven.svg';
import { AiOutlineDashboard } from "react-icons/ai";
import { MdDisplaySettings } from "react-icons/md";
import { PiWatch } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
    return(
        <aside className="w-[300px] bg-white dark:bg-gray-950 fixed top-0 bottom-0 left-0 border-r dark:border-gray-900 z-50">
            <Link to={ '/admin/dashboard' } className="block p-4 border-b dark:border-gray-900">
                <img src={ Logo } alt="ChronoHaven" className="block max-w-full h-auto max-h-6 mx-auto" />
            </Link>
            <ul className="text-sm flex flex-col gap-4 px-4 py-8 font-medium">
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg bg-primary text-white">
                        <AiOutlineDashboard size={ 20 } />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg dark:text-gray-400 hover:text-primary dark:hover:text-primary duration-300 ease-in">
                        <MdDisplaySettings size={ 20 } />
                        <span>Product Management</span>
                    </Link>
                    <ul className="pt-2 pl-8 flex flex-col gap-4">
                        <li>
                            <Link className="flex items-center gap-2 dark:text-gray-400 hover:!text-primary duration-300 ease-in">
                                <PiWatch size={ 18 } className="block" />
                                <span className="d-block">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-2 dark:text-gray-400 hover:!text-primary duration-300 ease-in">
                                <BiCategory size={ 18 } className="block" />
                                <span className="d-block">Categories</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg dark:text-gray-400 hover:!text-primary duration-300 ease-in">
                        <LiaShippingFastSolid size={ 20 } />
                        <span>Order Management</span>
                    </Link>
                </li>
                <li>
                    <Link to={ '/admin/dashboard' } className="flex items-center gap-2 p-2 rounded-lg dark:text-gray-400 hover:!text-primary duration-300 ease-in">
                        <FaUsers size={ 20 } />
                        <span>Customer Management</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar;