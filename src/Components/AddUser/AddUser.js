import React from 'react';

const AddUser = () => {

    const handleSubmit=event=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email= event.target.email.value;
        const user ={ name, email}
        console.log(user)
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data update success',data)
            alert('user add successfully !!!')
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>New User Add</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' required /> <br/>
                <input type="email" name='email' placeholder='Email' required /> <br/>
                <input type="submit" value='Add User' />
            </form>
        </div>
    );
};

export default AddUser;