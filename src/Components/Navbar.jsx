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
            <div className="flex gap-5">
              <Link
                to={"/contacto"}
                className="text-primaryLight text-lg font-primary"
              >
                Contacto
              </Link>
              <Link
                to={"/ayuda"}
                className="text-primaryLight text-lg font-primary"
              >
                Ayuda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
