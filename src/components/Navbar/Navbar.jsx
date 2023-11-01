import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { SiPowerpages } from "react-icons/si";
const Navbar = () => {
  const user = true;
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Link to={"/"}>
            <img
              className="hover:none"
              src="https://i.ibb.co/qjBd7F4/logo.png"
              alt=""
            />
          </Link>
        </a>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}

        {user ? (
          <>
            <div className="dropdown dropdown-end z-10">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="">
                    <CgProfile></CgProfile>
                    Profile
                  </a>
                </li>
                <li>
                  <SiPowerpages></SiPowerpages>
                  <a>Pages</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Our Works</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Blogs</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="form-control">
              <Link to={`/login`}>Login</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
