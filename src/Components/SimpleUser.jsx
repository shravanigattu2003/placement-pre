 import React from "react"

function SimpleUser({name, role, onPromote}){

   const container={
    padding : "8px 15px",
    display: "flex",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: "20px",
    gap: "10px",
    
   } 

    
    return(
        <>
        <div style={container}>
            <p>{name}</p>
            <p>Roll:{role}</p>
            <button onClick={onPromote}>Promote</button>
        </div>
        </>
    )

}
export default SimpleUser;