import { useNavigate } from "react-router-dom";
import logo from "./pts-yellow-crown.png";

type Args = {
    subtitle: string
}

const Header = ({subtitle}: Args) => {
    const nav = useNavigate();
    return (
        <header className="row mb-4"> 
            <div className="col-5">
                <img src={logo} alt="logo" className="logo" onClick={() => nav(`/`)}></img>
            </div>
            <div className="col-7 mt-5 subtitle">{subtitle}</div>
        </header>
    );
}

export default Header;