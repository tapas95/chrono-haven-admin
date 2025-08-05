import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import ThemeModeToggle from "../../ui/ThemeModeToggle";
import FullscreenToggle from "../../ui/FullscreenToggle";

const Header = () => {
    return(
        <header className="bg-white dark:bg-gray-950 dark:text-gray-400 py-4 border-b dark:border-gray-900 fixed top-0 right-0 left-0 z-50">
            <div className="container mx-auto">
                <ul className="flex justify-end gap-6">
                    <li className="cursor-pointer">
                        <IoSearchOutline size={ 24 } />
                    </li>
                    <li className="cursor-pointer">
                        <ThemeModeToggle />
                    </li>
                    <li className="cursor-pointer">
                        <IoIosNotificationsOutline size={ 24 } />
                    </li>
                    <li>
                        <FullscreenToggle />
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                        <HiOutlineUserCircle size={ 24 } />
                        <span className="block text-sm font-medium text-gray-600 dark:text-gray-400">Hi, Test</span>
                        <IoIosArrowDown />
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;