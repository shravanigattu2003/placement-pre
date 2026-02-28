import React, { useState } from "react";

function ToggleVisibility(){

  const[showDetails, setShowDetails] = useState(false)

  const handleBtn=()=>{
    setShowDetails(!showDetails)
  }

  const btn = {
  padding: "8px 18px",
  borderRadius: "6px",
  backgroundColor: "blue",
  color: "white",
  cursor: "pointer",
  marginTop: "20px"
};

  const container={
    display: "flex",
    flexDirection: "column",   
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }

  

  return(
    <>
        <div style={container}>
            <button style={btn} onClick={handleBtn}>
                {showDetails? "Hide Details" : "Show Details"}
            </button>

            {showDetails &&(
                <p style={{color: "yellow"}}>
                    welcome to the program of 15 days placement preparation on React-js and Advanced Javascript
                </p>
            )}
        </div>
    </>
  )


}

export default ToggleVisibility;