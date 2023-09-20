import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                        totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
                        id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                        totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
                        id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
                    </p>
                    <Link className="btn btn-dark" to="/users">Users</Link>
                    <Link className="btn btn-light ms-3" to="/posts">Posts</Link>
                </div>
            </div>
        </div >
    )
}
export default Home;