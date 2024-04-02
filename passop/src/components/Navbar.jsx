const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center px-4 h-10">
      <ul>
        <li className="flex gap-4">
          <a href="/" className="hover:font-bold">
            Home
          </a>
          <a href="/" className="hover:font-bold">
            About
          </a>
          <a href="/" className="hover:font-bold">
            Contact
          </a>
          <a href="/" className="hover:font-bold">
            Locations
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
