import { useAtom } from "jotai";
import { nigthJotai } from "../jotai";
import { FaSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Button = () => {
    const [nigth, setNigth] = useAtom(nigthJotai)

    const alterTheme = () => {  
        setNigth(!nigth)
        const btn = document.querySelector(".ball_container")
        btn?.classList.toggle("open_container")
    }

    return(
        <div className="ball_container" onClick={alterTheme}>
            {
                nigth ? <BsFillMoonStarsFill /> : <FaSun />
            }
        </div>
    )
}