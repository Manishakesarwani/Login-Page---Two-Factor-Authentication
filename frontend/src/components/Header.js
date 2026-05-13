import { Link } from "react-router-dom"
import useLogout from "../hooks/useLogout"
import { useUserAuthenticateContext } from "../hooks/useUserAuthenticateContext";

export const Header = () => {

    const {logoutUser} = useLogout();
    const {user} = useUserAuthenticateContext();

  return (
    <div className="header">
        <div className="container">

            <nav>
                <Link to="/"><h1>App Name</h1></Link>
                <div className="nav_button">
                    {/* {!user && <Link to="/authenticate">Get Started</Link>} */}
                    {user && <button type="button" onClick={logoutUser}>Logout</button>}
                </div>
            </nav>

        </div>
    </div>
  )
}
