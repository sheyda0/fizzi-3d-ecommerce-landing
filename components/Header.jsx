import Logo from "./Logo";

const Header = () => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <Logo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
};

export default Header;
