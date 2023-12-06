import icon from "./icon.png";

function Doctors() {
  return (
    <div className="w-10/12 m-auto py-20">
      <div className="w-3/5">
        <h2 className="text-5xl mb-10 font-semibold">
          Our Doctors Specialize in you
        </h2>
        <p className="text-gray-400 w-3/5">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="bg-sky-200 w-10 h-10 items-center">
            <img src={icon} className="m-auto" alt="icon" />
          </div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
