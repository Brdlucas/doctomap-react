import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="p-2 shadow-xl ">
      <div className="flex flex-row justify-end  gap-3 bg-white">
        <NavLink
          className="p-2 rounded-xl uppercase text-white bg-gray-800 drop-shadow-2xl w-30 text-center"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="p-2 rounded-xl uppercase text-white bg-gray-800 drop-shadow-2xl w-30 text-center"
          to={"/doctors"}
        >
          Docteurs
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
