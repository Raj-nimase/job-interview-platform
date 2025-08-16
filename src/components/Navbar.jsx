import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Quiz", path: "/quiz" },
    { name: "Resume", path: "/resume" },
    { name: "Login", path: "/login" },
    { name: "AI Interview", path: "/selectRole" },
  ];

  return (
    <nav className="bg-black py-4 px-6 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* ✅ Logo on the left */}
        <div className="flex items-center gap-2">
          <img
            src="/photo/Screenshot 2025-07-21 072000.png"
            alt="HireReady Logo"
            className="h-12 w-40"
          />
        </div>

        {/* 🔗 Navigation Links */}
        <ul className="flex gap-6">
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-bold transition relative ${
                    isActive ? "text-blue-600" : "text-white"
                  } hover:text-blue-500`
                }
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
