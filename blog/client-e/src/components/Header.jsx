import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { Navbar, TextInput, Button, Dropdown, Avatar } from "flowbite-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";

const Header = () => {
  // const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar fluid rounded className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Bichu
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="hidden md:flex gap-4">
          <Link
            to="/"
            className={`${
              active === 0 ? "text-purple-400" : "text-purple-200"
            } w-full text-center p-2`}
            onClick={() => setActive(0)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              active === 1 ? "text-purple-400" : "text-purple-200"
            } w-full text-center p-2`}
            onClick={() => setActive(1)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${
              active === 2 ? "text-purple-400" : "text-purple-200"
            } w-full text-center p-2`}
            onClick={() => setActive(2)}
          >
            Projects
          </Link>
        </div>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className=" block text-sm">@{currentUser.username}</span>
                <span className=" block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider>
                <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
              </Dropdown.Divider>
            </Dropdown>
          ) : (
            <Link to="/signIn">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}

          <div onClick={handleToggle} className="md:hidden">
            <RxHamburgerMenu className="h-10 w-12 text-gray-300" />
          </div>
        </div>
        <div
          className={`flex gap-3 flex-col absolute top-16 bg-white w-full items-center md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            className={`${
              active === 0
                ? " border  border-purple-400 rounded-md "
                : "border border-purple-200 rounded-md"
            } w-full  p-2`}
            onClick={() => setActive(0)}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${
              active === 1
                ? " border  border-purple-400 rounded-md "
                : "border border-purple-200 rounded-md"
            } w-full  p-2`}
            onClick={() => setActive(1)}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`${
              active === 2
                ? " border  border-purple-400 rounded-md "
                : "border border-purple-200 rounded-md"
            } w-full  p-2`}
            onClick={() => setActive(2)}
            to="/projects"
          >
            Projects
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
