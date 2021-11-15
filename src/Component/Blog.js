import React from 'react'
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import Apple from "./blog_pages/Apple";
import Banana from "./blog_pages/Banana";
import Mango from "./blog_pages/Mango";

function Blog() {
    const { path, url } = useRouteMatch();
    console.log('path', path);
    console.log('url', url)
    return (
        <div>
            <ul>
                <li><Link to={`${url}/apple`}>Apple</Link></li>
                <li><Link to={`${url}/banana`}>Banana</Link></li>
                <li><Link to={`${url}/mango`}>Mango</Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/apple`}>
                    <Apple />
                </Route>
                <Route path={`${path}/banana`}>
                    <Banana />
                </Route>
                <Route path={`${path}/mango`}>
                    <Mango />
                </Route>
            </Switch>
        </div>
    )
}

export default Blog
