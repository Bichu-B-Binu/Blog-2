import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className=" border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Bichu
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <div>
                <p className=" text-gray-400 text:sm font-bold">ABOUT</p>
                <a
                  href="https://www.100jsprojects.com"
                  className="text-gray-400"
                >
                  100 JS Projects
                </a>
              </div>
              <div>
                <a href="/about" className="text-gray-400">
                  Bichu Blog
                </a>
              </div>
            </div>

            <div>
              <div>
                <p className=" text-gray-400 text:sm font-bold">FOLLOW US</p>
                <a
                  href="https://www.github.com/Bichu-B-Binu"
                  className="text-gray-400"
                >
                  Github
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400">
                  Discord
                </a>
              </div>
            </div>

            <div>
              <div>
                <p className=" text-gray-400 text:sm font-bold">LEGAL</p>
                <a href="#" className="text-gray-400">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400">
                  Terms &amp; Condition
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Bichu's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/Bichu-B-Binu"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
