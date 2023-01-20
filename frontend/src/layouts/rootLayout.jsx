import { Outlet } from "react-router-dom";
import FooterMobile from "../components/footer/footerMobile";
import FooterDesktop from "../components/footer/footerDesktop";
import DesktopHeader from "../components/header/desktopHeader";

const RootLayout = ({ logedIn }) => {
  return (
    <div className="root-layout flex flex-col min-h-screen bg-greenish text-lightcream">
      <header className="lg:mb-10">
        <DesktopHeader logedIn={logedIn} />
      </header>
      <main className="container mx-auto my-auto">
        < Outlet />
      </main>
      <footer >
        < FooterMobile />
        < FooterDesktop />
      </footer>
    </div>
  );
}

export default RootLayout;