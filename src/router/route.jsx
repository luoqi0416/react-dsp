import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

export default (props)=>{

        return <Switch>
            {
                props.routes.map((item,index)=>{
                    return <Route
                    key={index}
                    path={item.path}
                    render={(loaction)=>{
                        if(item.children){
                            return <item.component {...location} routes={item.children}/>
                        }else{
                            return <item.component {...loaction}/>
                        }
                    }}
                    ></Route>
                })
            }
            <Redirect from='/index' to='/index/AdvCreative'></Redirect>
            <Redirect exact from='/' to='/index'></Redirect>
        </Switch>
    
}