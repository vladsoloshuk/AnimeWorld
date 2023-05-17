import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";

const Header = () => {
  return (
    <header>
        <div>
          <Link to={RoutesNames.HOME}>AnimeLibrary</Link>
        </div>
        <div>
          <span>Toolname</span>
          <div>
            <div>Library</div>
            <Link to={RoutesNames.ANIMES}>Anime</Link>
          </div>
        </div>
        <Link to={RoutesNames.HOME}></Link>
    </header>
  )
}

export default Header;