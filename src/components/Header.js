import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" activeClassName="active">spa app</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users" activeClassName="active">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts" activeClassName="active">Posts</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;