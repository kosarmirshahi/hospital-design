import hospitalImage from "./hospital.jpg";
function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-white to-[#D2DADC]">
      <nav className="w-10/12 m-auto flex justify-between items-center pt-5 pb-16">
        <div className="flex items-center">
          <p className="mr-11 text-3xl">Brand</p>
          <a href="#" className="mr-3 text-gray-400">
            Home
          </a>
          <a href="#" className="mr-3 text-gray-400">
            Products
          </a>
          <a href="#" className="mr-3 text-gray-400">
            Pricing
          </a>
          <a href="#" className="mr-3 text-gray-400">
            Contact
          </a>
        </div>
        <div>
          <a className="mr-5 text-orange-btn">Login</a>
          <button className="w-24 h-9 bg-orange-btn rounded text-white">
            Join us ->
          </button>
        </div>
      </nav>
      <div className="w-10/12 m-auto flex items-center justify-between">
        <div>
          <h2 className="text-5xl mb-10">Meet the best hospital</h2>
          <p className="text-gray-400 mb-10">
            Get your best looking smile now!
          </p>
          <button className="w-24 h-9 bg-orange-btn rounded text-white">
            join us
          </button>
        </div>
        <div>
          <img src={hospitalImage} alt="hospital" className="w-350 h-350" />
        </div>
      </div>
    </div>
  );
}

export default Header;
