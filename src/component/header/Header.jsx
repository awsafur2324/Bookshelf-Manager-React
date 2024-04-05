import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-white shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold gap-5"
          >
            <NavLink
              to="/"
              style={{ padding: "5px" }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                  : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/ListedBooks"
              style={{ padding: "5px" }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                  : ""
              }
            >
              Listed Books
            </NavLink>

            <NavLink
              to="/PagesToRead"
              style={{ padding: "5px" }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                  : ""
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/BookReview"
              style={{ padding: "5px" }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                  : ""
              }
            >
              Book Reviews
            </NavLink>

            <NavLink
              to="/topComment"
              style={{ padding: "5px" }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                  : ""
              }
            >
              Top Comments
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl sans-font font-bold">
          Book <span className="text-green-700">Vibe</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-5">
          <NavLink
            to="/"
            style={{ padding: "5px" }}
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/ListedBooks"
            style={{ padding: "5px" }}
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                : ""
            }
          >
            Listed Books
          </NavLink>

          <NavLink
            to="/PagesToRead"
            style={{ padding: "5px" }}
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                : ""
            }
          >
            Pages to Read
          </NavLink>

          <NavLink
            to="/BookReview"
            style={{ padding: "5px" }}
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                : ""
            }
          >
            Book Reviews
          </NavLink>

          <NavLink
           to="/topComment"
            style={{ padding: "5px" }}
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] rounded-lg bg-white border border-[#23BE0A]"
                : ""
            }
          >
            Top Reviews
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end rounded-none ">
        <a className="btn rounded-lg bg-[#23BE0A] mr-2 text-white font-semibold">
          Sign in
        </a>
        <a className="btn rounded-lg bg-[#59C6D2] text-white font-semibold">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;
