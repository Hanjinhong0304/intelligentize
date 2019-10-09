import React from "react";
import {Switch,Route,Redirect} from "react-router-dom"

function Router({routes=[],parentpath='/'}){
    const path = (curpath)=>{  // /  /a   main
        return (parentpath === '/' ? '' : parentpath) + (curpath[0]==='/' ? curpath : '/'+ curpath);
    }
    if(!routes.length) return null;
    let routeArr=routes.filter(item=>!item.redirect)
    let redirectArr=routes.filter(item=>item.redirect)
    return <Switch>
            {
               routeArr.map((item,key)=>{
                   return <Route path={path(item.path)}  key={key} render={props=>{
                       const Com = item.component;
                    return <Com {...props} routes={item.children} />
                   }}/>
               }).concat(redirectArr.map((item,key)=>{
                return <Redirect key={key} from={path(item.path)} to={path(item.redirect)} />
            }))
            }
        </Switch>
}

export default Router;