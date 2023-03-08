import React, { useRef, useState, useEffect } from "react";
import axios from "axios";


import '../Tips.css';

// export default function AllTip(loggedInUser)
// export default 
const Likes = (props) => 
{
    const {tip} = props;
    console.log("tip= ", tip);

    const[tipLikes, setTipLikes] = useState("");
    function getLikes(tip)
    {
        console.log("in tip getLikes");

        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        var noLikes = 0;

        axios({
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            headers: { "Authorization" : `Bearer ${jwt}`}
        }).then(response=>{

            console.log("tl res data= ", response.data);
            console.log("tl count= ", response.data.length);
            noLikes = response.data.length;
            setTipLikes(response.data.length);

            return noLikes;
        })
        .catch(error=>{
            console.log(error);
        })
        return noLikes;
    }

    // getIsLiked(allTipData);
    getLikes(tip);
    // return (
    //     <div>
    //         {/* <p>{tipLikes} Likes</p> */}
    //         <p>{tipLikes}</p>
    //      </div>

    // )
    // return {tipLikes};

    return tipLikes;
};

export default Likes;