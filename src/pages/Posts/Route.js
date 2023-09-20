import { Switch, Route } from "react-router-dom"
import IndexPosts from './Index.js';
import ShowPost from './Show.js';


const RoutePost = () => {
    return (
        <Switch>
            <Route path="/posts" component={IndexPosts} exact />
            <Route path="/posts/:postId" component={ShowPost} />
        </Switch>
    )
}
export default RoutePost