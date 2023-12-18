function Header() {
  return (
    <div className="flex justify-between h-[60px] bg-gray-900 text-white items-center px-6">
      <h1 className="font-extrabold text-2xl">Micro</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
