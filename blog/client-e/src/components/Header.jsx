import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Navbar, TextInput, Button } from "flowbite-react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  // const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar fluid rounded className="border-b-2">
        <Navbar.Brand as={Link} to="/">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Sahand's Blog
          </span>
        </Navbar.Brand>
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
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/signIn">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              className=" hover:from-purple-600 to-blue-600"
            >
              Sign In
            </Button>
          </Link>
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
