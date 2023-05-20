import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {

    const [Email, seTEmail] = useState("");
    const [pass, seTpass] = useState("");
    

    const handleSubmit=async (e)=>{
        e.preventDefault();
        let res=await axios.post('http://localhost:3000/auth/signup',{Email,pass});
        res.then((response)=>{
            console.log(response);
        })
    }

    return (
        <div>
            <form action="POST" method="post">
                <div className="email">

                    <label >Email address</label>
                    <input type="email" onChange={(e) => { seTEmail(e.target.value) }} placeholder='Email' />


                </div>
                <div className="pass">

                    <label >PassWord</label>
                    <input type="password" onChange={(e) => { seTpass(e.target.value) }} placeholder='Password' />


                </div>
            </form>

            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Signup
