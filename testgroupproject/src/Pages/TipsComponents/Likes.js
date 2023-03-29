// import React, { useRef, useState, useEffect } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import '../Tips.css';

const Likes = (props) =>
{
    const[tipLikes, setTipLikes] = useState(0);                                  // tip's likes number

    const {tip} = props; // fixes issues for Tips From You as tip props
    
    const tipID = tip.id + "option";

    getLikes(tip);                                                              // gets a tip's likes number
    
    function getLikes(tip)
    {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        axios({                                                                 // gets all of a tip's likes
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            // headers: { "Authorization" : `Bearer ${jwt}`}                    // don't need to be logged in to get likes number
        }).then(response=>{
            setTipLikes(response.data.length);                                  // set tip's likes number
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (                                                                    // returns tip's likes number
            <option id={tipID} value={tipLikes}>{tipLikes} Likes</option>       // id = tipId and value = likes number
    )
};

export default Likes;