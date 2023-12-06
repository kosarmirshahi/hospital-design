import phone from "./phone.jpg";
import location from "./location.png";
import email from "./email.png";

function Footer() {
  return (
    <div className="footer flex m-auto w-10/12 justify-between text-slate-500 py-8">
      <div>
        <p className="text-xl mb-2.5 text-black">Company Info</p>
        <p className="mb-2.5">About Us</p>
        <p className="mb-2.5">Carrier</p>
        <p className="mb-2.5">We are hiring</p>
        <p className="mb-2.5">Blog</p>
      </div>
      <div>
        <p className="text-xl mb-3.5 text-black">Legal</p>
        <p className="mb-2.5">About Us</p>
        <p className="mb-2.5">Carrier</p>
        <p className="mb-2.5">We are hiring</p>
        <p>Blog</p>
      </div>
      <div>
        <p className="text-xl mb-3.5 text-black">Features</p>
        <p className="mb-2.5">Business Marketing</p>
        <p className="mb-2.5">User Analytic</p>
        <p className="mb-2.5">Live Chat</p>
        <p className="mb-2.5">Unlimited Support</p>
      </div>
      <div>
        <p className="text-xl mb-3.5 text-black">Resources</p>
        <p className="mb-2.5">IOS & Android</p>
        <p className="mb-2.5">Watch a Demo</p>
        <p className="mb-2.5">Customers</p>
        <p className="mb-2.5">API</p>
      </div>
      <div>
        <p className="text-xl mb-3.5 text-black">Get In Touch</p>
        <p className="flex mb-2.5">
          <img src={phone} alt="" />
          (480) 555-0103
        </p>
        <p className="flex mb-2.5">
          <img src={location} alt="" />
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <p className="flex mb-2.5">
          <img src={email} alt="" />
          debra.holt@example.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
