import React from "react";
import Hoc from "./HOC";

const UserList = ({data}) =>{

    let renderUser = data.map((user)=>{
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
            <div>{renderUser}</div>
        </div>
    )
};

const SearchUsers = Hoc(UserList, "users")

export default SearchUsers;