import { PiApproximateEqualsFill } from "react-icons/pi";

export default function Navigation() {

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><PiApproximateEqualsFill size={26} />ShorkBytes</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>About</a></li>
                <li><a>Projects</a></li>
                <li><a href="https://aottr.dev" target="_blank">Blog</a></li>
                {/* <li>
                    <details>
                    <summary>Organisation</summary>
                    <ul className="rounded-t-none bg-base-100 !mt-0">
                        <li><a>Link 1 asdawdawd</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li> */}
                </ul>
            </div>
        </div>
    );
}