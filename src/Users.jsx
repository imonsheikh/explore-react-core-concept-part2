import { useEffect, useState } from "react"

export default function Users() {

    const [Users, setUsers] = useState([])

    useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setUsers(data))
    }, [])

    return (
        <div>
         <h3>Users: {Users.length}</h3>
        </div>
    )
}



/**
 * 1. Declare a state to hold the data
 * 2. UseEffect with call back and dependency aray
 * 3. Use fetch to load data 
 * 
 */