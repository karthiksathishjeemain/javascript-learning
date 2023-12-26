
import {Outlet,Link} from "react-router-dom"
export default function Navbar({name}){
    return (
<>
{console.log(name)}
<ul>
<Link to = "/">Home</Link>

</ul>

<ul>
<Link to = "/create">Create</Link>

</ul>
<ul>
<Link to = "/about">About</Link>

</ul>


<Outlet/>







</>




    )
}