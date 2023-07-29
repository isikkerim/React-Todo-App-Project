 import "../css/Home.css";

 import { Link } from "react-router-dom";


function Navbar(){
    return(<div>

        {/* HOME PAGE NAVBAR  FIELD */}


        <ul className="ul">
            <li className="li">
                <Link className="link" to={`/`}>ANA SAYFA</Link>

            </li>
            <li className="li">
                <Link className="link" to={`/about`}>HAKKIMIZDA</Link>

            </li>
            <li className="li">
                <Link className="link" to={`/contactus`}>İLETİŞİM</Link>

            </li>
        </ul>
  </div>);}

  export default Navbar;