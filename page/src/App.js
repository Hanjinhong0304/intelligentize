import React from 'react';
import RouterView from "./router/index";
import {Provider} from "mobx-react";
import store from "@/store/"

function App() {
  return (
    <Provider {...store}>
        <RouterView/>
    </Provider>
    
  )
}

export default App;
