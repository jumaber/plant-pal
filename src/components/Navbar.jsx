import { Link } from "react-router-dom"
import { Button_Large } from "./Button_Large"

export function NavBar(){
    return (
        <nav>
            <h1>Plant Pal</h1>
            <Link to="/AddPlant">
            <Button_Large text="Add Plant" />
        </Link>
        </nav>
    )
}