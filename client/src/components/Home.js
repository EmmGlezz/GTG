import React, { useEffect } from "react";
// import jwt from "jsonwebtoken";
// import { useNavigate } from "react-router-dom";

const Home = () => {
    // const history = useNavigate()

    // const populateQuote = async () => {
    //     const req = await fetch('http://localhost:5500/api/quote', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token')
    //         }
    //     })
        
    //     const data = req.json()
    //     console.log(data)
    // }

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(token){
    //         const user = jwt.decode(token)
    //         if(!user) {
    //             localStorage.removeItem('token')
    //             history('/login')
    //         }else {
    //             populateQuote()
    //         }
    //     }
    // }, [])



    return <h1>Hey there</h1>
}

export default Home;