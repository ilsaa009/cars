import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="text-center md:text-left">
            <Image
              src="/sbx-cars-sb-2024.svg"
              alt="SBX Cars Logo"
              width={300}
              height={300}
            />
        
          </div>
          <div class="flex space-x-4 text-black">
          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
              <path
                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </span>


          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>


          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </span>


          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
              <path
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </span>


          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path
                d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </span>

          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </span>
        </div>

        </div>

        <div className="text-center">
          <p className="text-sm mb-2 text-black" >Get the latest updates by subscribing to our newsletter.</p>
          <form className="flex flex-wrap justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-gray-300 text-black px-4 py-2 border border-black hover:bg-blue-700 ml-2"
            >
              Subscribe
            </button>
          </form>

        </div>
        <div className="flex space-x-16 text-black">
          <ul className="space-y-2 list-disc pl-6">
            <li><a href="/auctions" className="hover:underline">Auctions</a></li>
            <li><a href="/brands" className="hover:underline">Brands</a></li>
            <li><a href="/sell" className="hover:underline">Sell your vehicle</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
            <li><a href="/results" className="hover:underline">Auction Results</a></li>
          </ul>
          <ul className="space-y-2 list-disc pl-6">
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/team" className="hover:underline">Team</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/terms" className="hover:underline">Terms of use</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy policy</a></li>
            <li><a href="/cookies" className="hover:underline">Cookie declaration</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
