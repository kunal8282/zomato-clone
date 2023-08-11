import SearchComponent from "./SearchComponent";

const Header = () => {
  return (
    <header className="flex gap-5 h-[11vh] items-center">
      {/**
       * Logo
       * SearchBar
       *  - Location
       *  - Seacrh Bar
       *  - Login
       *  - Sign Up
       */}
      <div className="w-32">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Zomato_Logo"
          className="w-full"
        />
      </div>

      <nav>
        <ul className="flex w-[calc(100%+8rem)] justify-between items-center">
          <li>
            <SearchComponent />
          </li>
          <li className="text-lg font-light">Log in</li>
          <li className="text-lg font-light">Sign up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
