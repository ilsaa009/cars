function Header() {
    return (
      <header className="bg-gray-200 text-black py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="contact-info text-sm flex flex-wrap gap-4">
            <p>US: +1 323-407-8523  |</p>
            <p>UAE: +971 4 876 1764 |</p>
            <p>UK: +44 20 4525 8014 |</p>
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
  