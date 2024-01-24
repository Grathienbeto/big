import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="border-b-2 border-contrast">
      <div className="p-5 md:max-w-[1200px] md:mx-auto">
        <div className="flex justify-between items-end ">
          <div>
            <Link to={"/"} className="text-light text-3xl font-primary">
              BIG
            </Link>
          </div>
          <div>
            <Link
              to={"/contacto"}
              className="text-primaryLight text-xl font-primary"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
