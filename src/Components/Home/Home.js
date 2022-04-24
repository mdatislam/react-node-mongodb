import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    const handleToDelete=id=>{
        const proceed = window.confirm('Are you sure want to delete')
        if(proceed){
            console.log('delete success',id)
            const url =`http://localhost:5000/user/${id}`
            fetch(url,{
                method:'delete'
            })
            .then(res=>res.json())
            .then(data=> {
                console.log('delete',data)
                if(data.deletedCount>0){
                    const remaining = users.filter(user=> user._id !==id)
                    setUsers(remaining)
                    
                }
            })

        }
    }
    return (
        <div>
            <h4>User List of Mongodb</h4>
            <ul>
                {
                    users.map(user=> <li key={user._id}>
                        {user.name}:: {user.email}
                        {<Link to={`/Edit/${user._id}`}><button>Edit</button></Link>}
                        {<button onClick={()=>handleToDelete(user._id)}>X</button>}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;