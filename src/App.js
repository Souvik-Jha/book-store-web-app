import React from 'react';
import { Router,Link,Switch, Route } from "react-router-dom" 

 import HomePage from './components/HomePage';
 import TodoApp from './components/TodoApp';
import MealItem from './components/MealItem';

function App() {
 


  return(
    <>
    <Switch>
      <Route path="/HomePage" component={HomePage} />  
      <Route path="/TodoApp" component={TodoApp} />  
      <Route path="/MealItem" component={MealItem} />  
    </Switch>
    </>
   

  )
}

export default App;