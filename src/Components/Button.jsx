import { Link } from "react-router-dom";

export const Button = (props) => {
  const { content, size } = props;

  return (
    <Link
      to={"/crear_torneo"}
      className={
        size === "big"
          ? `text-light font-primary border-2 rounded-xl border-contrast text-2xl px-10 py-2`
          : `text-light font-primary border-2 rounded-xl border-contrast text-xl px-5 py-2`
      }
    >
      {content}
    </Link>
  );
};
