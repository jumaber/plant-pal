import { Link } from "react-router-dom"
import { ButtonLarge } from "./Button_Large"

export function NavBar(){
    return (
        <nav>
            <h1>Plant Pal</h1>
            <Link to="/add">
            <ButtonLarge text="Add Plant" />
        </Link>
        </nav>
    )
}
