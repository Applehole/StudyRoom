import React, { useEffect, useState } from "react";

const UserList = () =>{
    const [users, setUsers] = useState([])
    const [term, setTerm] = useState("")
    useEffect(()=>{
        const fetchUser = async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await res.json()
            setUsers(json)
        }
        fetchUser()
    },[])
    console.log(users)

    let filteredUser = users.filter(({name})=>{
        return name.indexOf(term) >= 0
    }).map((user)=>{
        return(
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })

    return(
        <div>
            <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} />
            <div>{filteredUser}</div>
        </div>
    )
};

export default UserList;