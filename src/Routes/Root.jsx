import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
