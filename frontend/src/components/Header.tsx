import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 -mb-1 overflow-x-clip">
      <div className="p-5 md:container mx-auto flex justify-between">
        <span className="text-2xl md:text-3xl text-[#F9F9F8] font-bold tracking-tight mr-5 md:px-1 md:shadow-md ">
          <Link to="/" className="flex gap-0 md:gap-3 ">
            <img src="/hotel.png" alt="logo" className = "h-[80px] md:h-[60px] lg:h-[40px] object-cover"/>
            <p className="text-white hidden md:block">Apna Hotel</p>
          </Link>
        </span>
        <span className="flex md:space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-[#F9F9F8] px-3 font-bold hover:bg-[#33b249]"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-[#F9F9F8] px-3 font-bold hover:bg-[#33b249]"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-[#F9F9F8] items-center text-[#7263f3] px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
