import { Switch, Route, useRouteMatch } from "react-router-dom"
import IndexPosts from './Index.js';
import ShowPost from './Show.js';
import CreatePost from "./Create.js";
import EditPost from "./Edit.js";


const RoutePost = () => {
    const { path } = useRouteMatch()
    return (
        <div className="container mt-6">
            <div className="row g-3">
                <Switch>
                    <Route path={path} component={IndexPosts} exact />
                    {/* <Route path="/posts" component={IndexPosts} exact /> */}

                    <Route path={`${path}/create`} component={CreatePost} />

                    <Route path={`${path}/edit/:postId`} component={EditPost}/>

                    <Route path={`${path}/:postId`} component={ShowPost} />
                    {/* <Route path="/posts/:postId" component={ShowPost} /> */}
                </Switch>
            </div>
        </div>
    )
}
export default RoutePost