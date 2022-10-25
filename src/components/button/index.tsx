import type { NextPage } from "next";
interface Props {
  text: string;
  link?: string;
  background?: string;
  handleOnClick?: () => void;
}

const Button: NextPage<Props> = ({
  text,
  link,
  background = null,
  handleOnClick,
  ...res
}) => {
  return (
    <>
      {link ? (
        <a href={link}>
          <button
            {...res}
            onClick={handleOnClick}
            className={`${
              background
                ? `${background} text-blue-800 border font-semibold border-blue-800`
                : "bg-blue-800 text-white"
            }  w-full py-1 px-1 duration-300 ease-in-out hover:brightness-125`}
          >
            {text}
          </button>
        </a>
      ) : (
        <button
          {...res}
          onClick={handleOnClick}
          className={`${
            background
              ? `${background} text-blue-800 border font-semibold border-blue-800`
              : "bg-blue-800 text-white"
          }  w-full py-1 px-1 duration-300 ease-in-out hover:brightness-125`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
