import { Switch, Route ,useRouteMatch} from "react-router-dom"
import IndexPosts from './Index.js';
import ShowPost from './Show.js';
import CreatePost from "./Create.js";


const RoutePost = () => {
    const {path}=useRouteMatch()
    return (
        <Switch>
            <Route path={path} component={IndexPosts} exact />
            {/* <Route path="/posts" component={IndexPosts} exact /> */}

            <Route path={`${path}/create`} component={CreatePost} />
            
            <Route path={`${path}/:postId`} component={ShowPost} />
            {/* <Route path="/posts/:postId" component={ShowPost} /> */}
        </Switch>
    )
}
export default RoutePost