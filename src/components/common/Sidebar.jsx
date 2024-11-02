import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoPersonAddOutline } from "react-icons/io5";
import { GrSearchAdvanced } from "react-icons/gr";
import { SiAirbyte } from "react-icons/si";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center gap-2 px-2">
        <SiAirbyte size={25} color="#5148E5"/>
        <h2 className="font-bold text-xl">Byte Circle</h2>
      </div>
      <ul className="mt-12 flex flex-col gap-2 text-sm font-semibold">
        <li>
          <NavLink
            to={"/"}
            className="py-[5px] px-2 rounded flex items-center gap-2 hover:bg-gray-100"
          >
            {({ isActive }) => (
              <>
                <IoHomeOutline
                  size={20}
                  color={isActive ? "#5148E5" : "gray"}
                />
                <span
                  className={`${isActive ? "text-black" : "text-gray-600"}`}
                >
                  Home
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/my-friends"}
            className="py-[5px] px-2 rounded flex items-center gap-2 hover:bg-gray-100"
          >
            {({ isActive }) => (
              <>
                <LiaUserFriendsSolid
                  size={20}
                  color={isActive ? "#5148E5" : "gray"}
                />
                <span
                  className={`${isActive ? "text-black" : "text-gray-600"}`}
                >
                  My Friends
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/friend-requests"}
            className="py-[5px] px-2 rounded flex items-center gap-2 hover:bg-gray-100"
          >
            {({ isActive }) => (
              <>
                <IoPersonAddOutline
                  size={18}
                  color={isActive ? "#5148E5" : "gray"}
                />
                <span
                  className={`${isActive ? "text-black" : "text-gray-600"}`}
                >
                  Friends Requests
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/find-friends"}
            className="py-[5px] px-2 rounded flex items-center gap-2 hover:bg-gray-100"
          >
            {({ isActive }) => (
              <>
                <GrSearchAdvanced
                  size={18}
                  color={isActive ? "#5148E5" : "gray"}
                />
                <span
                  className={`${isActive ? "text-black" : "text-gray-600"}`}
                >
                  Find Friends
                </span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
