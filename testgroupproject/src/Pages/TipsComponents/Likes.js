// import React, { useRef, useState, useEffect } from "react";
import { useEffect, useState } from "react";
import axios from "axios";


import '../Tips.css';

// export default function AllTip(loggedInUser)
// export default 
const Likes = (props) => 
// function Likes(props)
{
    console.log("in Likes: tL useState before");

    const[tipLikes, setTipLikes] = useState(0);
    // var tipLikes = "";

    console.log("in Likes: tL useState after");
    console.log("in Likes");
    // console.log("props= ", props);
    const {tip} = props; // fixes issues for Tips From You as tip props
    // const tip = props;
    console.log("tip= ", {tip});
    console.log("tip= after");
    console.log("tip= after after");

    console.log("in Likes tip.id= ", tip.id);
    const tipID = tip.id + "option";
    console.log("in Likes tipID= ", tipID);

    // console.log("in Likes: tL useState before");

    // const[tipLikes, setTipLikes] = useState("");
    // console.log("in Likes: tL useState after");

    getLikes(tip);
    
    function getLikes(tip)
    {
        console.log("in tip getLikes");

        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        // var noLikes = 0;
        console.log("likes tip=, ", tip);
        axios({
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            headers: { "Authorization" : `Bearer ${jwt}`}
        }).then(response=>{

            console.log("tl res data= ", response.data);
            console.log("tl count= ", response.data.length);
            // noLikes = response.data.length;
            setTipLikes(response.data.length);
            // settingTipLikes(response.data.length);
            console.log("tipLikes= ", tipLikes);

            // return noLikes;
        })
        .catch(error=>{
            console.log(error);
        })
        // return noLikes;
    }

    // useEffect(() =>
    // {
    //     console.log("testing tipLikes ", tipLikes);
    // }, [tipLikes]);

    // function settingTipLikes(data)
    // {
    //     setTipLikes(data);
    //     // tipLikes = data;
    //     console.log("tipLikes= ", tipLikes);
    // }

    // getIsLiked(allTipData);
    // getLikes(tip);
    console.log("before return tiplikes= ", tipLikes);
    // while(tipLikes !== "") {
    return (
        // <div>
            // {/* <p>{tipLikes} Likes</p> */}
            // <p>{tipLikes}</p>
            <option id={tipID} value={tipLikes}>{tipLikes} Likes</option>
        //  </div>

    )
// }
    // return {tipLikes}; bad very bad

    // return tipLikes;
};

export default Likes;