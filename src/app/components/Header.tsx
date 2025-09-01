import DcNav from "./DcNav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <div className="z-50 relative">
            {/* desctop Nav */}
            <div>
                <DcNav />
            </div>

            {/* mobile Nav */}
            <div>
                <MobileNav />
            </div>
        </div>
    );
};

export default Header;
