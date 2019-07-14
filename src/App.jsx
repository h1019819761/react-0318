import React,{Component} from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Login from './pagas/login/Login'

export default class App extends Component{

  render(){
    return (
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    )
  }
}