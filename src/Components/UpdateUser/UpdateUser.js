import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user,setUser]= useState({})
    const {id}= useParams()
    const url=`http://localhost:5000/user/${id}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
    .then(data=> setUser(data)) 
    },[])

    const handleToEdit=event=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email= event.target.email.value;
        const upDateUser ={ name, email}
        console.log(upDateUser)
        const url=`http://localhost:5000/user/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(upDateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('update successfully',data)
            alert('update successfully')
            event.target.reset()

        })
    }
    return (
        <div>
            <h5>Name: {user.name}</h5>
            <form onSubmit={handleToEdit}>
                <input type="text" name='name' placeholder='Name' required />
                <input type="email" name='email' placeholder='Email' required />
                <input type="submit" value='Edit' />
            </form>
        </div>
    );
};

export default UpdateUser;