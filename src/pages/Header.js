import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Outlet} from "react-router-dom";

export default function Header(){
    return(
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home" >Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs" >Contact</Link>
                        </li>
                        <li>
                            <Link to="/contact" >Blogs</Link>
                        </li>
                    </ul>
                </nav>

            <Outlet />
        </div>
    )

}