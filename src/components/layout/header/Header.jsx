import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline, IoMoonOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import FullscreenToggle from "../../ui/FullscreenToggle";

const Header = () => {
    return(
        <header className="bg-white py-4 fixed top-0 right-0 left-0 z-50">
            <div className="container mx-auto">
                <ul className="flex justify-end gap-6">
                    <li className="cursor-pointer">
                        <IoSearchOutline size={ 24 } />
                    </li>
                    <li className="cursor-pointer">
                        <IoMoonOutline size={ 24 } />
                    </li>
                    <li className="cursor-pointer">
                        <IoIosNotificationsOutline size={ 24 } />
                    </li>
                    <li>
                        <FullscreenToggle />
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                        <HiOutlineUserCircle size={ 24 } />
                        <span className="block text-sm font-medium text-gray-600">Hi, Test</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;