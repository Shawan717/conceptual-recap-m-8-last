import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const Nevbar = () => {
    return (
        <div className="flex justify-between shadow-lg p-5">
            <Logo></Logo>
            <nav>
                <ul className="flex gap-5 text-[20px]">
                    <li>
                      <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-300 underline" : ""}>Home</NavLink></li>
                    <li><NavLink to="/favorites" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-300 underline" : ""}>Favorites</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-300 underline" : ""}>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    ); 
};

export default Nevbar;