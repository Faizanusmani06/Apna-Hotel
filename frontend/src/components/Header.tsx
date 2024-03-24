import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 -m-1">
      <div className="container mx-auto flex justify-between">
        <span className="flex items-center gap-3 text-3xl text-white font-bold tracking-tight px-1 shadow-md">
          <img src="hotel.png" alt="logo" className = "h-[40px]"/><Link to="/" className="">Apna Hotel</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-[#33b249]"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-[#33b249]"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-[#7263f3] px-3 font-bold hover:bg-gray-100"
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
