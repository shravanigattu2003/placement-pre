 import React from "react"

function SimpleUser({name, role, onPromote}){

   const container={
    padding : "8px 15px",
    display: "flex",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: "20px",
    gap: "5px",
    color: "oklch(82.8% 0.189 84.429)",
    fontWeight: "bold" ,
    width : "300px",
    margin: "0 auto"
    
    
    
   } 
   const btn={
    color: "oklch(12.9% 0.042 264.695)",
    backgroundColor: "oklch(72.3% 0.219 149.579)"
   }

    
    return(
        <>
        <div style={container}>
            <p>{name}</p>
            <p>Roll:{role}</p>
            <button style={btn} onClick={onPromote}>Promote</button>
        </div>
        </>
    )

}
export default SimpleUser;