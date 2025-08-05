import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "./Button";
import { Tooltip } from "react-tooltip";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeModeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <Button className="block !p-0 bg-transparent !text-theme dark:!text-gray-400 hover:!text-primary dark:hover:!text-primary border-0" onClick={ toggleTheme }>
            { theme === 'dark' ? <IoSunnyOutline size={ 24 } data-tooltip-id="themeModeTooltip" data-tooltip-content="Enter Light Theme" /> : <IoMoonOutline size={ 24 } data-tooltip-id="themeModeTooltip" data-tooltip-content="Enter Dark Theme" /> }
            <Tooltip id="themeModeTooltip" className="text-sm capitalize leading-none !p-2" />
        </Button>
    )
}
export default ThemeModeToggle;