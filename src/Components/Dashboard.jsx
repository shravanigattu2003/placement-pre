import React, { useState } from "react";
import SimpleUser from "./SimpleUser";

function DashBoard(){
    const[users, setUsers] = useState([
        {id:1, name: "shravani", role: "junior" },
        {id:2, name: "sandhya", role: "junior"},
        {id:3, name: "sweety", role: "junior"},
    ])

    const handlePromote=(id)=>{
        const updatedUsers= users.map((user)=>
            user.id == id ? {...user, role:"Senior"} : user
        )
        setUsers(updatedUsers);

    }

    
    return(
        <>
            <div>
                <h3>Dashboard</h3>
                {users.map((user)=>(
                <SimpleUser
                    key={user.id}
                    name={user.name}
                    role={user.role}
                    onPromote={()=>handlePromote(user.id)}
                 />

                ))}
            </div>
        </>
    )
}
export default DashBoard;