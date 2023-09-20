import { Switch, Route } from "react-router-dom"
import IndexUsers from './Index.js';
import ShowUser from './Show.js';


const RouteUser = () => {
    return (
        <Switch>
            <Route path="/users" component={IndexUsers} exact />
            <Route path="/users/:userId" component={ShowUser} />
        </Switch>
    )
}
export default RouteUser