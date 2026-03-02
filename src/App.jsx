import React from "react";

import Productlayout from "./Components/Productlayout";
import ToggleVisibility from "./Components/ToggleVisibility";
import DashBoard from "./Components/Dashboard";
import Counter from "./Hooks/Counter";
import Users from "./Hooks/Task2";
import SearchFilter from "./Hooks/Task3.jsx";
import { ThemeProvider } from "./Hooks/ThemeContext.jsx";
import Home from "./Hooks/Home.jsx";


function App() {
  return(
    <>
        {/* <Productlayout/> */}
       {/* <ToggleVisibility/>
       <DashBoard/>  */}
       {/* <Counter/>  */}
       {/* <Users/>  */}
       {/* <SearchFilter/> */}
       <ThemeProvider>
          <Home/>
       </ThemeProvider>
       </>
    )


 
}

  
export default App
