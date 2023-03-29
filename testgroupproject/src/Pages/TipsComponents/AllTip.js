import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { useOutletContext } from "react-router-dom";

import '../Tips.css';

import Likes from './Likes';

const AllTip = (props) => 
{
    console.log("in AllTip");
    const {loggedInUser, allTipData} = props;
    console.log("atd= ", allTipData);

    useEffect(() => {
        // getAllTipData();
        // getLikes(allTipData);
        getUserData();
    }, []);
    // }, [allTipData]);

    const [userdata, setUserdata] = useState("");                       // logged in user

    const getUserData = () => {                                         // gets logged in user's data
        if(loggedInUser!=="" && userdata===""){

            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({                                                     // gets user by email from backend
                method: 'get',
                url: 'http://localhost:8080/user/findByEmail',
                params: {email: loggedInUser},
                headers: {"Authorization" : `Bearer ${jwt}`}
            }).then((response) => {
                if (response.status === 200){
                    setUserdata(response.data);                         // sets the logged in user
                    // getAllData();
                }
            }).catch(err => {
                console.log(err.response);
                setUserdata("Data failure");
            })

            ///////////////
        }
        // else//??????
        // {
        //     const jwt = sessionStorage.getItem('jwt');
        //     console.log(jwt);
        //     axios({
        //         method: 'get',
        //         url: 'http://localhost:8080/user/findByEmail',
        //         // params: {email: loggedInUser.email},
        //         params: {email: 'test@email.com'},
        //         headers: {"Authorization" : `Bearer ${jwt}`}
        //     }).then((response) => {
        //         if (response.status === 200){
        //             console.log(response.data);
        //             console.log('response.data = ', response.data);
        //             console.log(response.data.userType);
        //             setUserdata(response.data);
        //             console.log('userdata in then = ', userdata);
        //             // getAllData();
        //         }
        //     }).catch(err => {
        //         console.log(err.response);
        //         setUserdata("Data failure");
        //     })
        // }

    }

    /////////
    // Like
    // function like(tip)
    const like = (tip, index) =>                                            // creates user-tip like
    {
        if (userdata === "" || userdata === "Data failure")                 // user must be logged in to like  tip
        {
            alert("Login to Like Tips");
        }
        else
        {
            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);

            if(isLiked === false)                                           // if tip is not liked by user
            {
                axios({                                                     // posts like to backend
                    method: 'post',
                    url: 'http://localhost:8080/like',
                    data: {
                        user: {
                            id: userdata.id,
                            name: userdata.name,
                            email: userdata.email,
                            password: userdata.password,
                            dob: userdata.dob
                        },
                        tip: tip
                    },
                    headers: { "Authorization" : `Bearer ${jwt}`}
                }).then(response=>{
                    console.log(response);
                    if (response.status === 201){
                        alert("Tip like created.")
                        /*
                        figure out how to update like number when liked
                        
                        think done
                        */
                        getLikes(tip);                                      // gets tip likes number

                        ////////
                        // getAllData();
                    }
                })
                .catch(error=>{
                    console.log(error);
                })
            } else
            {
                alert("already exists");
            }
        }
    }

    const [isLiked, setIsLiked] = useState(false);                              // boolean for when user has liked tip or not

    const getIsLiked = (tip) => {                                               // get if user has liked tip or not
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        axios({                                                                 // gets all of a tip's likes
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            headers: { "Authorization" : `Bearer ${jwt}`}
        }).then(response=>{
            if (response.data.find(e => e.user.email === loggedInUser))         // checks if logged in user has liked tip
            {
                setIsLiked("true");
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const[tipLikes, setTipLikes] = useState("");                                // tip's likes number
    function getLikes(tip)                                                      // gets tip's like number
    {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        axios({                                                                 // gets all of a tip's likes
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            // headers: { "Authorization" : `Bearer ${jwt}`}            // don't need to be logged in to get likes number
        }).then(response=>{
            setTipLikes(response.data.length);                                  // set tip's likes number
        })
        .catch(error=>{
            console.log(error);
        })
    }


    //////////
    // Unlike
    const unlike = (tip, index) =>                                          // unlikes tip
    {
        deleteLike(tip);
    }
    
    const [lId, setLikeId] = useState(0);

    const getLikeId = (tip, userId) => {                                        // find likeId by userId and tipId from backend
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        axios({
            method: 'get',
            url: 'http://localhost:8080/like/findByTipIdAndUserId',
            params: {tipId: tip.id, userId: userId},
            headers: {"Authorization" : `Bearer ${jwt}`},
            success: unlike(tip)                                                // if succesful will unlike the tip
        }).then((response) => {
            if (response.status === 200){
                setLikeId(response.data);       // not response.data.id as only id is returned not like

                // getAllData();
            }
            if (response.success)
            {
                // unlike(tip);
            }
        }).then(() => {
            // deleteLike(tip);
        }).catch(err => {
            console.log(err.response);
        })
    }

    useEffect(() => {
        // action on update of movies
        unlike(allTipData);
        getIsLiked(allTipData);
        getLikes(allTipData);
    }, [lId, isLiked]);

    const deleteLike = (tip) => {                                                   // deletes user-tip like
        const jwt = sessionStorage.getItem('jwt');

        axios({                                                                     // deletes like by likeId in backend
            method: 'delete',
            url: 'http://localhost:8080/like/' + lId,
            headers: { "Authorization" : `Bearer ${jwt}`,
            "Access-Control-Allow-Origin": "http://localhost:8080"}
        }).then(response=>{
            console.log(response);
            if (response.status === 200)
            {
                alert("Tip like deleted.");
                getLikes(tip);
                setIsLiked(false);                                      // flips button back to like
            }
            // getLikes(tip);

        })
        .catch(error=>{
            console.log(error);
        })
    }

    const setInfo = (tip) => {                  // if user unlikes tip will get the likeId
        getLikeId(tip, userdata.id);
    }

    if (allTipData.author.email === loggedInUser)   // if the tip belongs to the user
    {
        getLikes(allTipData);
        return (                                                                // returns like number
            <>
                {/* <p>{tipLikes} Likes</p><br/> this*/}
                {/* can put all like stuff in Likes instead */}
                    
                <Likes tip={allTipData}/><br/>                                  {/* returns like number */}
            </>
        )
    }
    if (isLiked === false)              // tip unliked = like button
    {
        getIsLiked(allTipData);
        getLikes(allTipData);
        return (                                                                // returns like number and correct like/unlike button
            <div>
                {/* <p>{tipLikes} Likes</p><br/> this */}
                {/* can put all like stuff in Likes instead */}

                <Likes tip={allTipData}/><br/>                                  {/* returns like number */}

                <button id="likeTipButton" onClick={() => like(allTipData)}>Like</button>
            </div>
    
        )
    }
    else                                // tip liked = unlike button
    {
        getIsLiked(allTipData);
        getLikes(allTipData);
        return (                                                                // returns like number and correct like/unlike button
            <div>
                {/* <p>{tipLikes} Likes</p><br/> this*/}
                {/* can put all like stuff in Likes instead */}
                
                <Likes tip={allTipData}/><br/>                                  {/* returns like number */}

                <button id="likeTipButton" onClick={() => setInfo(allTipData)}>Unlike</button>
            </div>
    
        )
    }
};

export default AllTip;


/*  CheckList

    -   Like and Unlike buttons are meant to toggle 
        -> working now - I set isLiked to boolean

    -   make sure only have to click button once - have to click delete twice 
        -> useEffect think is working

    -   can't like if not signed in - display data if not signed in - back end security authoriation ---- be careful!!!!!!
        -> done

    -   can't like if it your tip 
        -> done - removed button if tip belongs to logged in user

    -   do likes filter
        -> done

    -   remove filter button
        -> done

    -   make sure tipString can't have banned words 
        -> done - banned words in json file

    -   put number of likes if your tips section
        -> done

    -*   update / refresh everything immediately

    -   make sure flow is as expected

    -   your tips section both createAt and updatedAt datetimes
        -> done

    -   pagination for tips if can

    -   edit tips pop up form?
        -> no pop up fix -> fixed editting

*/