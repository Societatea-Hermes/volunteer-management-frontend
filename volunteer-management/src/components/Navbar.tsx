import logo from "../assets/icons/logo.svg";

function Navbar() {
  return (
    <>
      <div className="bg-white navbar">
        <div className="flex-1">
          <div className="-m-3 w-36">
            <img src={logo} />
          </div>
          <a className="text-[28px] text-black font-bold btn btn-ghost">
            Volunteer Management
          </a>
        </div>
        <div className="flex-none">
          <ul className="px-1 menu menu-horizontal">
            <li className="text-xl text-black">
              <a>O functionalitate</a>
            </li>
            <li>
              <details>
                <summary className="text-xl text-black">Alta</summary>
                <ul className="z-10 p-2 rounded-t-none bg-base-500">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
