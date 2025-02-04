function Header() {
  return (
    <header className="bg-gray-200 text-black py-2">
      <div className="container mx-auto flex justify-between items-center ml-4 md:ml-6 lg:ml-40">
        <div className="contact-info text-sm flex flex-wrap gap-4">
          <p className="hidden sm:block">US: +1 323-407-8523 |</p>
          <p className="hidden sm:block">UAE: +971 4 876 1764 |</p>
          <p className="hidden sm:block">UK: +44 20 4525 8014 |</p>
        
          <p className="sm:hidden">+1 323-407-8523 |</p>
          <p className="sm:hidden">+971 4 876 1764 |</p>
          <p>
            <a href="mailto:sales@sbxcars.com" className="underline">
              sales@sbxcars.com
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
