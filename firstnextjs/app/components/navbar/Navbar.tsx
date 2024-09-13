import exp from "constants"
import Logo from "./logo"
import Search from "./search"
import CardCound from "./CardCound"
import User from "./User"
import HamburgerMenu from "./HamburgerMenu"


const Navbar = () => {
   return(
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-orange-600 text-state-100">
    <Logo/>
    <Search/>
    <CardCound/>
    <User/>
    <HamburgerMenu/>

    </div>
   )
}

export default Navbar