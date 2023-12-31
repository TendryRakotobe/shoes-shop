export default function Footer() {
  return (
    <footer className="text-center flex flex-col justify-center items-center h-[10vh] text-white bg-gray-800">
      <p>
        By{" "}
        <a
          href="https://github.com/tendryrakotobe"
          target="_blank"
          className="font-bold hover:text-lime-300"
        >
          Tendry Rakotobe
        </a>
      </p>
      <p className="text-sm">
        Image Credits:{" "}
        <a
          href="https://www.nike.com/in/"
          target="_blank"
          className="text-lime-300 underline"
        >
          nike.com
        </a>
      </p>
    </footer>
  );
}
