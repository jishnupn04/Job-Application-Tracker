import { FaUserCircle } from "react-icons/fa"; // Import the Font Awesome icon
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 px-6 py-4 shadow-md z-50 bg-white">
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Job Tracker */}
        <div className="flex items-center">
          <div>
            <div
              className="text-black font-bold"
            >
              Job Tracker
            </div>
          </div>
        </div>

        {/* Center Section - Home and Jobs */}
        <div>
          <NavigationMenu className="flex-1 flex justify-center gap-8">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger >
                    Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                <NavigationMenuLink asChild>
                    <Link to="/" className="p-5">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger >
                   Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section - User Profile */}
        <div className="flex items-center gap-2">
          <div>
            <div
              className="text-black "
            >
              Jishnu PN
            </div>
          </div>
          <FaUserCircle className="text-black text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
