import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { useOutletContext } from "react-router-dom";

import '../Tips.css';

import Likes from './Likes';

// export default function AllTip(loggedInUser)
// export default 
const AllTip = (props) => 
{
    console.log("in AllTip");
    const {loggedInUser, allTipData, order} = props;
    console.log("atd= ", allTipData);

    // const [loggedInUser, setLoggedinUser] = useOutletContext();
    // const [userdata, setUserdata] = useState("");

    // const [allTipData, setAllTipData] = useState("");

    // const getAllTipData = () => {
    //     const jwt = sessionStorage.getItem('jwt');
    //     console.log('userdata.id = ', userdata.id);
    //     console.log('userdata = ', userdata);

    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:8080/tip',
    //         headers: {"Authorization" : `Bearer ${jwt}`}})
    //         .then((response) => {
    //             console.log(response.data);
    //             console.log("rd = ", response.data);
    //             setAllTipData(response.data);

    //             ////////////// date
    //             console.log("date = ", response.date);
    //             // backend - get createAt and updatedAt dates

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const displayAllTipData = () => {
    //     return allTipData ? (
    //     allTipData.map((allTipData, index) => {
    //         return (
    //             <div className=/*"userTipBoxN"*/"tipBox">
    //                 <span className=/*"userTipInfoN"*/"box" key={allTipData.id}>
    //                     <div className="firstLine">
    //                         <span className="tipCategory">
    //                         <p>{allTipData.tipCategory}</p>
    //                         </span>

    //                         {/* <span>{allTipData.indexOf(current)}</span> */}
    //                         <span>={index}=</span>

    //                         <span className="postInfo">
    //                             <span className="tipAuthor">posted by: {/*smithy*/}{allTipData.author.name}</span>
    //                             <span className="tipDateTime">
    //                                 {/*{" "}{/*posted*/} - {/*06/01/2023 15:28*/}--/--/---- --:--
    //                             </span>
    //                         </span>
    //                     </div>
    //                     <div className="secondLine">
    //                         {/* <span className="userTipString"> */}
    //                         <textarea className="userTipStringAll" /*"ta*/readOnly>{allTipData.tipString}</textarea>
    //                         {/* </span> */}
    //                         {/* <span className="userLikes">
    //                             <span className="userTipLikes">
    //                                 <p>{/*207*}- Likes</p>
    //                             </span>
    //                             <span className="likeTip">
    //                                 <button id="likeTipButton">Like</button>
    //                             </span>
    //                         </span> */}
    //                         <span className="likes">
    //                             <span className="tipLikes">
    //                                 {/* <p>-{() =>getLikes(allTipData.id)}-{tipLikes} Likes</p> */}
    //                                 {/* <p>{getLikes(allTipData.id)}= Likes</p> */}
    //                                 {/* <p>Likes</p> */}
    //                                 {() => getLikes(allTipData.id)}
    //                                 <p>{result[index]}-testing</p>
    //                                 {console.log("rindex=", result[index])}
    //                             </span>
    //                             <span className="likeTip">
    //                                 <button id="likeTipButton" onClick={() => like(allTipData, index)}>Like</button>
    //                             </span>
    //                         </span>
    //                         {/* <div className="modifyTip">  */}
    //                         {/* </div> */}
    //                     </div>
    //                 </span>
                
    //                 {/* <br /><p> </p> */}

    //             </div>

    //             // <UserTip key={data.id} data={data} />

    //             // now need to format what looks like

    //         );
    //     })
    //     ) : (
    //     <h3>No data yet</h3>
    //     );
    // }

    useEffect(() => {
        // getAllTipData();
        // getLikes(allTipData);
        getUserData();
    }, []);
    // , [allTipData]);

    const [userdata, setUserdata] = useState("");

    const getUserData = () => {
        console.log("gud liu=", loggedInUser);
        if(loggedInUser!=="" && userdata===""){
            console.log("in if");

            console.log("liu=", loggedInUser);      //loggedInUser is just email not user

            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({
                method: 'get',
                url: 'http://localhost:8080/user/findByEmail',
                // params: {email: loggedInUser.email},
                params: {email: loggedInUser},
                headers: {"Authorization" : `Bearer ${jwt}`}
            }).then((response) => {
                if (response.status === 200){
                    console.log(response.data);
                    console.log('response.data = ', response.data);
                    console.log(response.data.userType);
                    setUserdata(response.data);
                    console.log('userdata in then = ', userdata);
                    // getAllData();
                }
            }).catch(err => {
                console.log(err.response);
                setUserdata("Data failure");
            })

            ///////////////
            console.log('userdata in check logged in = ', userdata);

            // const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
        }
        else
        {
            console.log("else");
            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({
                method: 'get',
                url: 'http://localhost:8080/user/findByEmail',
                // params: {email: loggedInUser.email},
                params: {email: 'test@email.com'},
                headers: {"Authorization" : `Bearer ${jwt}`}
            }).then((response) => {
                if (response.status === 200){
                    console.log(response.data);
                    console.log('response.data = ', response.data);
                    console.log(response.data.userType);
                    setUserdata(response.data);
                    console.log('userdata in then = ', userdata);
                    // getAllData();
                }
            }).catch(err => {
                console.log(err.response);
                setUserdata("Data failure");
            })
        }

    }

    /////////
    // Like
    // const like = (event) =>
    // function like(tip)
    const like = (tip, index) =>
    {
        // event.preventDefault();
        console.log("in like - ud = ", userdata);

        if (userdata === "" || userdata === "Data failure")
        {
            alert("Login to Like Tips");
        }
        else
        {


        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        // if (result[index].some(e => e.user.email !== loggedInUser))
        if(isLiked === false)//(isLiked === "")
        {
        axios({
            method: 'post',
            url: 'http://localhost:8080/like',
            data: {
                user: {
                    id: userdata.id,
                    name: userdata.name,
                    email: userdata.email,
                    password: userdata.password,
                    buyer_seller: userdata.buyer_seller,
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
                getLikes(tip);

                ////////
                // getAllData();
                // getLikes(tip.id);
            }
        // }).then(()=>{
        //     tipCategory.current.value="";
        //     tipString.current.value="";
        //     // author.current.value=0;
        })
        .catch(error=>{
            console.log(error);
        })
        } else
        {
            // console.log()
            alert("already exists");
        }
        }
    }

    const [isLiked, setIsLiked] = useState(false);//useState("");

    const getIsLiked = (tip) => {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        console.log("alltip gil tip=, ", tip);
        axios({
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            headers: { "Authorization" : `Bearer ${jwt}`}
        }).then(response=>{
            console.log("res data= ", response.data);
            console.log("count= ", response.data.length);
            // noLikes = response.data.length;
            // setTipLikes(response.data.length);

            if (response.data.find(e => e.user.email === loggedInUser))
            {
                setIsLiked("true");
            }

            // setResult(result => [...result, response]);
            // setRes(response.data);

        // }).then(()=>{
        //     tipCategory.current.value="";
        //     tipString.current.value="";
        //     // author.current.value=0;
        })
        .catch(error=>{
            console.log(error);
        })
        // return "output";
    }

    const[tipLikes, setTipLikes] = useState("");
    // const [result, setResult] = useState([]);
    // const [res, setRes] = useState("");
    // const getLikes = (tip) =>
    function getLikes(tip)
    {
        console.log("in getLikes");
        // setTipLikes(0);

        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        var noLikes = 0;

        console.log("alltip gL tip=, ", tip);
        axios({
            method: 'get',
            url: 'http://localhost:8080/like/findByTipId',
            params: {tipId : tip.id},
            // headers: { "Authorization" : `Bearer ${jwt}`}
        }).then(response=>{
            // console.log("tipId= ", tip, " nolikes= ", response.data.user.length);
            // if (response.status === 201){
            //     alert("Tip like created.")
            //     ////////
            //     getAllData();
            // }

            console.log("res data= ", response.data);
            console.log("count= ", response.data.length);
            noLikes = response.data.length;
            setTipLikes(response.data.length);


            // setResult(result => [...result, response]);
            // setRes(response.data);

            // return noLikes;

        // }).then(()=>{
        //     tipCategory.current.value="";
        //     tipString.current.value="";
        //     // author.current.value=0;
        })
        .catch(error=>{
            console.log(error);
        })
        // return noLikes;
        // return response.data.length;
    }


    //////////
    // Unlike
    const unlike = (tip, index) =>
    {
        // getUserId();
        // getLikeId(tip, uId);

        // // getUserId(getLikeId(tip, uId, deleteLike(tip)));

        console.log("ul lId= ", lId);
        deleteLike(tip);
        // // getLikeId(tip, uId);
        // // getUserId();
        // // var dl = await deleteLike(tip);
        // // getLikeId(tip, uId);
        // // getUserId();


        // // event.preventDefault();
        // const jwt = sessionStorage.getItem('jwt');
        // console.log(jwt);

        // console.log("in unlike ", tip);

        // // const userId = getUserId();
        // console.log("uI= ", uId);
        // // const likeId = getLikeId(tip, uId);//userId);
        // console.log("lI= ", lId);

        // if (lId !== "")
        // {
        //     deleteLike(tip);
        // }

        // do
        // {
        //     getUserId();
        //     getLikeId(tip, uId);
        // }
        // while (lId === undefined)

        // if (lId !== undefined)
        // {
        //     console.log("in if");
        //     deleteLike(tip);
        // }

        // setTimeout(() => deleteLike(tip), 40000);

    }

    const [uId, setUserId] = useState();

    const getUserId = () => {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        axios({
            method: 'get',
            url: 'http://localhost:8080/user/findByEmail',
            // params: {email: loggedInUser.email},
            params: {email: loggedInUser},
            headers: {"Authorization" : `Bearer ${jwt}`}
        }).then((response) => {
            if (response.status === 200){
                console.log(response.data);
                console.log('response.data = ', response.data);
                console.log(response.data.userType);
                // setUserdata(response.data);
                console.log(response.data.id);
                // return response.data.id;
                setUserId(response.data.id);
                // console.log('userdata in then = ', userdata);
                // getAllData();
            }
        }).catch(err => {
            console.log(err.response);
            // setUserdata("Data failure");
            // return 0;
            setUserId(0);
        })
    }
    
    const [lId, setLikeId] = useState(0);

    const getLikeId = (tip, userId) => {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        console.log("userId= ", userId);
        console.log("tipId= ", tip.id);
        axios({
            method: 'get',
            url: 'http://localhost:8080/like/findByTipIdAndUserId',
            // params: {email: loggedInUser.email},
            // params: {email: loggedInUser},
            params: {tipId: tip.id, userId: userId},
            headers: {"Authorization" : `Bearer ${jwt}`},
            success: unlike(tip)
        }).then((response) => {
            if (response.status === 200){
                console.log(response.data);
                console.log('response.data tu = ', response.data);
                // return response.data.id;
                setLikeId(response.data);       // not response.data.id as only id is returned not like

                console.log("gLI lId=", lId);
                // getAllData();

                // deleteLike(tip);
                // setTimeout(() => deleteLike(tip), 4000);
                // deleteLike(tip, response.data.id);
                // setTimeout(() => deleteLike(tip, response.data.id), 4000);

                // var dl = await deleteLike(tip);
                // deleteLike(tip);
            }
            if (response.success)
            {
                // unlike(tip);
            }
        }).then(() => {
            // deleteLike(tip);
        }).catch(err => {
            console.log(err.response);
            // setUserdata("Data failure");
            // return "";
            // setLikeId("");
        })
    }

    useEffect(() => {
        // action on update of movies
        unlike(allTipData);
        getIsLiked(allTipData);
        getLikes(allTipData);
    }, [lId, isLiked]);

    const deleteLike = (tip) => {//, likeId) => {
        console.log("dL lId=", lId);
        // console.log("dl likeId= ", likeId);
        const jwt = sessionStorage.getItem('jwt');

        // return new Promise(function(resolve, reject) {
        axios({
            method: 'delete',
            url: 'http://localhost:8080/like/' + lId,//likeId,//lId,
            headers: { "Authorization" : `Bearer ${jwt}`,
            "Access-Control-Allow-Origin": "http://localhost:8080"}
        }).then(response=>{
            console.log(response);
            if (response.status === 200)
            {
                alert("Tip like deleted.");
                getLikes(tip);
                setIsLiked(false);                                      // need to flip button back to like
                // resolve(alert("success"));
            }
            // getLikes(tip);

        })
        .catch(error=>{
            console.log(error);
            // reject(error);
        })
    // });
        // } else {
        //     reject(error);
        // })
    }

    // return (
    //     <div>
    //         {/* {displayAllTipData()} */}
    //         {/* {getUserData()} */}
    //         <p>//{loggedInUser}//</p>
    //         {/* <p>{res}</p> */}
    //         <p>.{getIsLiked(allTipData)}.{isLiked}.</p>
    //         <p>+{getLikes(allTipData)}, {tipLikes} - Likes</p>
    //         <button id="likeTipButton" onClick={() => like(allTipData/*, index*/)}>Like</button>
    //     </div>

    // )

    const setInfo = (tip) => {
        // getUserId();
        getLikeId(tip, userdata.id);//uId);

        // unlike(tip);
        // var c = confirm("Are you sure you want to unlike tip?");
        // // if(confirm("Are you sure you want to unlike tip?") === true)
        // if (c === true)
        // {
        //     unlike(tip);
        // }

        console.log("sI lId=", lId);

    }

    console.log("atdae= ", allTipData.author.email, "liu = ", loggedInUser, "iL = ", isLiked);

    if (allTipData.author.email === loggedInUser)   // if the tip belongs to the user
    {
        console.log("first if");
        getLikes(allTipData);
        return (<><p>{tipLikes} Likes</p><br/></>)
    }
    if (isLiked === false)//(isLiked === "")
    {
        console.log("isliked = false");
        getIsLiked(allTipData);
        getLikes(allTipData);
        console.log("isliked = false still");
        return (
            <div>
                {/* <p>..{allTipData.id}..</p> */}
            {/* {displayAllTipData()} */}
                {/* {getUserData()} */}
            {/* <p>//{loggedInUser}//</p> */}
            {/* <p>{res}</p> */}
                {/* <p>.{getIsLiked(allTipData)}.{isLiked}.</p> */}
                {/* <p>+{getLikes(allTipData)}, {tipLikes} - Likes</p> */}

                {/* <p>{getLikes(allTipData)}</p> */}
                <p>{tipLikes} Likes</p><br/>

                {/* can put all like stuff in Likes instead */}
                {/* <Likes tip={allTipData}/> */}


                <button id="likeTipButton" onClick={() => like(allTipData/*, index*/)}>Like</button>
            </div>
    
        )
    }
    else
    {
        console.log("else");
        getIsLiked(allTipData);
        getLikes(allTipData);
        return (
            <div>
            {/* {displayAllTipData()} */}
            {/* {getUserData()} */}
                {/* <p>//{loggedInUser}//</p> */}
            {/* <p>{res}</p> */}
                {/* <p>.{() => getIsLiked(allTipData)}.{isLiked}.</p> */}
                {/* <p>+{getLikes(allTipData)}, {tipLikes} - Likes</p> */}

                {/* {() => getLikes(allTipData)} */}
                <p>{tipLikes} Likes</p><br/>
                <button id="likeTipButton" onClick={() => setInfo(allTipData/*unlike(allTipData/*, index*/)}>Unlike</button>
                {/* <button id="likeTipButton" onClick={() => unlike(allTipData/*unlike(allTipData/*, index*)}>Unlike2</button> */}
            </div>
    
        )
    }
};

export default AllTip;


/*
    -   Like and Unlike buttons are meant to toggle 
        -> working now - I set isLiked to boolean

    -   make sure only have to click button once - have to click delete twice 
        -> useEffect think is working

    -   can't like if not signed in - display data if not signed in - back end security authoriation ---- be careful!!!!!!
        -> done

    -   can't like if it your tip 
        -> done - removed button if tip belongs to logged in user

    -*   do likes filter

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