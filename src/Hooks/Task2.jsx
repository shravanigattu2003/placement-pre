import { useEffect, useState } from "react";

   

function Users(){
    const[users,setUsers] = useState([]);
    const[isLoading, setIsLoading ] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        const fetchUsers = async()=>{
            try {
                setIsLoading(true);
                setError(null)

                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok){
                    throw new Error("fail to fetch data");
                }

                const data = await response.json();
                setUsers(data)
            } catch (error) {
                setError(error.message)
                
            }finally{
                setIsLoading(false);
            }
        };
        fetchUsers();

        return()=>{
            console.log("component Unmounted")
        };
    },[]);

    if(isLoading){
        return <h2>Loading...</h2>
    } 
    if(error){
        return <h2>error..{error}</h2>
    }

    const div={
    alignItems: "center",
    gap: "5px",
    color: "green",
    fontWeight: "400" ,
    width : "300px",
    margin: "0 auto"
    
    }

     return (
    <div style={div}>
      <h2 style={{color:"yellow"}}>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Users;