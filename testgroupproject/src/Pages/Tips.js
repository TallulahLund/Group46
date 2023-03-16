// import React from "react";
// import "./Tips.css";

// import lightbulb from "./TipsComponents/lightbulb.jpg";
// import shower from "./TipsComponents/shower.jpg";
// import kettle from "./TipsComponents/kettle.jpg";
// import pencil from "./TipsComponents/pencil.jpg";
// import bin from "./TipsComponents/delete bin.jpg";

// export default function Tips() {
//   const tabSwitch = () => {
//     const tabs = document.querySelectorAll("[data-tab-value]");
//     const tabInfos = document.querySelectorAll("[data-tab-info]");

//     tabs.forEach((tab) => {
//       tab.addEventListener("click", () => {
//         const target = document.querySelector(tab.dataset.tabValue);

//         tabInfos.forEach((tabInfo) => {
//           tabInfo.classList.remove("active");
//         });
//         target.classList.add("active");
//       });
//     });
//   };

//   // function increment()
//   // {
//   // var value = parseInt(document.getElementById('number').value, 10);
//   // value = isNaN(value) ? 0 : value;
//   // value++;
//   // document.getElementById('number').value = value;

//   //     const number = document.getElementById('number')
//   //     //counter variables
//   //     let counter1 = 0
//   // function increment(){
//   //         counter1 = counter1 + 1
//   //         number.innerHTML = counter1
//   //         // document.getElementById('number').value = counter1;
//   //   }
//   // }
//   // var counterVal = 0;

//   // function increment() {
//   //     updateDisplay(++counterVal);
//   // }

//   // function updateDisplay(val) {
//   //     document.getElementById("number").innerHTML = val;
//   // }

//   return (
//     // <div><p>This is tips</p></div>

//     <section className="mainContent">
//       <section>
//         <h3>Energy Saving Tips</h3>
//         <br />
//         <p>
//           We know not everyone can afford to switch to better renewable energy
//           yet, so here's some tips to help you out saving energy and money for
//           energy.
//         </p>
//       </section>

//       <section>
//         <div className="tabs">
//           {/* need to figure out tab switching + put the css in*/}
//           <span data-tab-value="#tab_1" onClick={tabSwitch}>
//             Tips from Us
//           </span>
//           <span data-tab-value="#tab_2" onClick={tabSwitch}>
//             Tips from All
//           </span>
//           <span data-tab-value="#tab_3" onClick={tabSwitch}>
//             Tips from You
//           </span>
//         </div>
//         <div className="tab-content">
//           {/* tab 1 */}
//           <div className="tabs_tab active" id="tab_1" data-tab-info>
//             {/* <!-- group em together properly now --> */}

//             <div className="tipLine">
//               <div className="tip">
//                 <div className="beforeH">
//                   <span>
//                     <h4>
//                       Leaving the room?
//                       <br />
//                       <br />
//                       Turn it off
//                     </h4>
//                   </span>
//                   <img src={lightbulb} alt="lightbulb" id="lightbulb" />
//                 </div>
//                 <div className="afterH">
//                   Turning lights off when you leave the room or are simply not
//                   using them could save you £25 per year on energy bills
//                 </div>
//               </div>
//               <div className="tip">
//                 <div className="beforeH">
//                   <span>
//                     <strong>
//                       Not using it?
//                       <br />
//                       <br />
//                       Unplug it
//                     </strong>
//                   </span>
//                 </div>
//                 <div className="afterH">
//                   If you're not using your electrical devices, make sure you
//                   unplug them
//                 </div>
//               </div>
//             </div>

//             <div className="tipLine">
//               <div className="tip">
//                 <div className="beforeH">
//                   <span>
//                     <strong>
//                       At 100%?
//                       <br />
//                       <br />
//                       Stop charging it
//                     </strong>
//                   </span>
//                 </div>
//                 <div className="afterH">
//                   Make sure you unplug when your devices reach full-charge
//                 </div>
//               </div>
//               <div className="tip">
//                 <div className="beforeH">
//                   <span>
//                     <strong>
//                       Use an air dryer
//                       <br />
//                       <br />
//                       Not a tumble dryer
//                     </strong>
//                   </span>
//                 </div>
//                 <div className="afterH">
//                   Don't use the tumble dryer when it's not necessary, hanging
//                   clothes on drying racks could save £70 a year
//                 </div>
//               </div>
//             </div>

//             <div className="tipLine">
//               <div className="tip">
//                 <div className="beforeH">
//                   <span>
//                     <strong>
//                       Shower don't Bathe
//                       <br />
//                     </strong>
//                   </span>
//                   <img src={shower} alt="shower" id="shower" />
//                 </div>
//                 <div className="afterH">
//                   Swapping just one bath for a short shower a week could save
//                   £20 a year
//                 </div>
//               </div>
//               <div className="tip">
//                 <div className="beforeH">
//                   <span>
//                     <strong>
//                       Use Kettles wisely
//                       <br />
//                       <br />
//                       Avoid overfilling
//                     </strong>
//                   </span>
//                   <img src={kettle} alt="kettle" id="kettle" />
//                 </div>
//                 <div className="afterH">
//                   Using just the right amount of water when boiling your kettle
//                   could save £13 a year
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* tab 2 */}
//           <div className="tabs_tab" id="tab_2" data-tab-info>
//             <p>Browse the helpful tips posted by your fellow users.</p>
//             <br />
//             <div className="allTips">
//               {/* <p>box</p>
//                             <p>gonna have a filter</p>
//                             <p>then display tips underneath</p>
//                             <br/> */}
//               <div id="aTsameLine">
//                 <span>
//                   Category:
//                   <select id="tipFilterCategory">
//                     <option></option>
//                     <option id="homeOption">Home</option>
//                     <option is="carOption">Car</option>
//                   </select>
//                 </span>
//                 <span>
//                   Order:
//                   <select id="tipFilterCategory">
//                     <option id="newest">Newest First</option>
//                     <option id="oldest">Oldest First</option>
//                     <option id="mostPop">Most Popular</option>
//                     <option id="leastPop">Least Popular</option>
//                   </select>
//                 </span>
//                 {/* <!-- proper name -> organise similar elements for css --> */}
//                 <span>
//                   <button id="tipFilterButton">Filter</button>
//                 </span>
//               </div>
//               <div className="tipBoxes">
//                 {/* will get tips from database */}
//                 {/* <div className="tipBox">
//                                     <span className="tipString">
//                                         <p>This is a Tip.</p>
//                                     </span>
//                                     <span className="likes">
//                                         <p>0 Likes</p>
//                                     </span>
//                                 </div>
//                                 <div className="tipBox">
//                                     <span className="tipString">
//                                         <p>This is another Tip.</p>
//                                     </span>
//                                     <span className="likes">
//                                         <p>-1 Likes</p>
//                                     </span>
//                                 </div>
//                                 <div className="tipBox">
//                                     <span className="tipString">
//                                         <p>This is the best Tip!</p>
//                                     </span>
//                                     <span className="likes">
//                                         <p>999 Likes</p>
//                                     </span>
//                                 </div> */}

//                 <div className="tipBox">
//                   <div className="firstLine">
//                     <span className="tipCategory">
//                       <p>Home</p>
//                     </span>
//                     <span className="postInfo">
//                       <span className="tipAuthor">posted by: smithy</span>
//                       <span className="tipDateTime">- 05/01/2023 15:25</span>
//                     </span>
//                   </div>
//                   <div className="secondLine">
//                     <span className="tipString">
//                       <p>
//                         Remember to keep all windows and doors close to stop
//                         heat escaping.
//                       </p>
//                     </span>
//                     <span className="likes">
//                       <span className="tipLikes">
//                         {/* <div id="number" value="0">0</div> */}
//                         <p>1 Likes</p>
//                       </span>
//                       <span className="likeTip">
//                         <button
//                           id="likeTipButton"
//                           // onClick={
//                           //     document.getElementById("number").innerHTML++
//                           // }
//                         >
//                           Like
//                         </button>
//                       </span>
//                     </span>
//                   </div>
//                 </div>

//                 <div className="tipBox">
//                   <div className="firstLine">
//                     <span className="tipCategory">
//                       <p>Car</p>
//                     </span>
//                     <span className="postInfo">
//                       <span className="tipAuthor">posted by: jane doe</span>
//                       <span className="tipDateTime">- 05/01/2023 15:25</span>
//                     </span>
//                   </div>
//                   <div className="secondLine">
//                     <span className="tipString">
//                       <p>
//                         Never leave the engine running. Even if it is for only a
//                         couple minutes, it's better to turn it off.
//                       </p>
//                     </span>
//                     <span className="likes">
//                       <span className="tipLikes">
//                         <p>44 Likes</p>
//                       </span>
//                       <span className="likeTip">
//                         <button id="likeTipButton">Like</button>
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* tab 3 */}
//           <div className="tabs_tab" id="tab_3" data-tab-info>
//             <span>You currently have </span>
//             <span>2</span>
//             <span> tips posted.</span>

//             {/* submit tips */}
//             <div className="submitTips">
//               <div>
//                 <p>Do you have helpful tips for others?</p>
//                 <span>Category: </span>
//                 <select id="tipCategory">
//                   <option></option>
//                   <option id="homeOption">Home</option>
//                   <option is="carOption">Car</option>
//                 </select>
//               </div>
//               <div id="textArea">
//                 <textarea
//                   id="tA"
//                   placeholder="Enter your Tip here..."
//                 ></textarea>
//               </div>
//               <div id="tipButtonDiv">
//                 <button id="tipButton">Submit</button>
//               </div>
//             </div>

//             <div className="userTips">
//               <br />
//               <p>
//                 <strong>Your Tips:</strong>
//               </p>
//               {/* <br/> */}

//               {/* <div className="userTipBoxes">
//                                 <div className="userTipBox">
//                                     <span className="userTipInfo">
//                                         <div className="firstLine">
//                                             <span className="tipCategory"><p>Car</p></span>
//                                             <span className="postInfo">
//                                                 <span className="tipDateTime"> posted - 05/01/2023 15:25</span>
//                                             </span>
//                                         </div>
//                                         <div className="secondLine">
//                                             <span className="userTipString">
//                                                 <p>Never leave the engine running. Even if it is for only a couple minutes, it's better to turn it off.</p>
//                                             </span>
//                                             <span className="userLikes">
//                                                 <span className="userTipLikes">
//                                                     <p>44 Likes</p>
//                                                 </span>    
//                                             </span>
//                                         </div>
//                                     </span>
//                                     <span className="modifyTip">
//                                         <img src={pencil} alt="editingButton" id="edit" width="25px" height="35px"/>
//                                         <img src={bin} alt="deletingButton" id="delete" width="25px" height="35px"/>
//                                     </span>

//                                     {/* need editing, deleting stuff 
//                                 </div>
//                             </div> */}

//               <div className="submitTipsN">
//                 {/* <div className="userTipBoxN"> */}
//                 <div>
//                   {/* <p>Do you have helpful tips for others?</p> */}
//                   {/* <span>Category: </span> */}
//                   {/* <select id="tipCategoryN">
//                                             <option></option>
//                                             <option id="homeOption">Home</option>
//                                             <option is="carOption">Car</option>
//                                         </select> */}
//                   {/* <span className="userTipInfo">
//                                             <div className="firstLine">
//                                                 <span className="tipCategory"><p>Car</p></span>
//                                                 <span className="postInfo">
//                                                     <span className="tipDateTime"> posted - 05/01/2023 15:25</span>
//                                                 </span>
//                                             </div>
//                                             <div className="secondLine">
//                                                 <span className="userTipString">
//                                                     <p>Never leave the engine running. Even if it is for only a couple minutes, it's better to turn it off.</p>
//                                                 </span>
//                                                 <span className="userLikes">
//                                                     <span className="userTipLikes">
//                                                         <p>44 Likes</p>
//                                                     </span>    
//                                                 </span>
//                                             </div>
//                                         </span>
//                                         <span className="modifyTip">
//                                             <img src={pencil} alt="editingButton" id="edit" width="25px" height="35px"/>
//                                             <img src={bin} alt="deletingButton" id="delete" width="25px" height="35px"/>
//                                         </span> */}

//                   {/* <span className="info">
//                                             {/* <p>testing</p> 
//                                             <div className="fLine">
//                                                 {/* <p>t2</p> 
//                                                 <span className="tCategory">Car</span>
//                                                 <span className="tDateTime">posted - 05/01/2023 15:25</span>
//                                             </div>
//                                              <span><p>t3</p></span> */}
//                   {/* <div className="sLine">
//                                                 <span className="tString">
//                                                     <p>tip</p>
//                                                 </span>
//                                                 <span className="tLikes">
//                                                     <p>4 Likes</p>
//                                                 </span>
//                                             </div> 
//                                         </span>
//                                         <span className="modify">
//                                             <img src={pencil} alt="editingButton" id="edit" width="25px" height="35px"/>
//                                             <img src={bin} alt="deletingButton" id="delete" width="25px" height="35px"/>
//                                         </span> */}

//                   <div className="userTipBoxN">
//                     <span className="userTipInfoN">
//                       <div className="firstLine">
//                         <span className="tipCategory">
//                           <p>Car</p>
//                         </span>
//                         <span className="postInfo">
//                           <span className="tipDateTime">
//                             {" "}
//                             posted - 05/01/2023 15:25
//                           </span>
//                         </span>
//                       </div>
//                       <div className="secondLine">
//                         <span className="userTipString">
//                           <p>
//                             Never leave the engine running. Even if it is for
//                             only a couple minutes, it's better to turn it off.
//                           </p>
//                         </span>
//                         <span className="userLikes">
//                           <span className="userTipLikes">
//                             <p>44 Likes</p>
//                           </span>
//                         </span>
//                       </div>
//                     </span>
//                     <span className="modifyTip">
//                       <img
//                         src={pencil}
//                         alt="editingButton"
//                         id="edit"
//                         width="25px"
//                         height="35px"
//                       />
//                       <img
//                         src={bin}
//                         alt="deletingButton"
//                         id="delete"
//                         width="25px"
//                         height="35px"
//                       />
//                     </span>

//                     {/* need editing, deleting stuff */}
//                     {/* </div> */}
//                   </div>
//                   {/* <div className="info"></div>
//                                     <div id="textAreaN">
//                                         <textarea id="tAN" placeholder="Enter your Tip here..." ></textarea>
//                                     </div>
//                                     <div id="tipButtonDivN">
//                                         <button id="tipButtonN">Submit</button>
//                                     </div> */}
//                 </div>

//                 {/* must fix css */}
//                 <div>
//                   <div className="userTipBoxN">
//                     <span className="userTipInfoN">
//                       <div className="firstLine">
//                         <span className="tipCategory">
//                           <p>Home</p>
//                         </span>
//                         <span className="postInfo">
//                           <span className="tipDateTime">
//                             {" "}
//                             posted - 06/01/2023 15:28
//                           </span>
//                         </span>
//                       </div>
//                       <div className="secondLine">
//                         <span className="userTipString">
//                           <p>
//                             Only turn the heating on when it's necessary, layer
//                             up clothing instead.
//                           </p>
//                         </span>
//                         <span className="userLikes">
//                           <span className="userTipLikes">
//                             <p>207 Likes</p>
//                           </span>
//                         </span>
//                       </div>
//                     </span>
//                     <span className="modifyTip">
//                       <img
//                         src={pencil}
//                         alt="editingButton"
//                         id="edit"
//                         width="25px"
//                         height="35px"
//                       />
//                       <img
//                         src={bin}
//                         alt="deletingButton"
//                         id="delete"
//                         width="25px"
//                         height="35px"
//                       />
//                     </span>

//                     {/* need editing, deleting stuff */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <script type="text/javascript">
//                     const tabs = document.querySelectorAll('[data-tab-value]')
//                     const tabInfos = document.querySelectorAll('[data-tab-info]')

//                     tabs.forEach( tab => {
//                         tab.addEventListener('click', () => {
//                             const target = document.querySelector(tab.dataset.tabValue);

//                             tabInfos.forEach(tabInfo => {
//                                 tabInfo.classList.remove('active')
//                             })
//                             target.classList.add('active');
//                         })
//                     })
//                 </script> */}
//       </section>
//     </section>
//   );
// }








import React, { useRef, useState, useEffect, createElement } from "react";
import axios from "axios";

import { useOutletContext } from "react-router-dom";

import './Tips.css';

import lightbulb from "./TipsComponents/lightbulb.jpg";
import shower from "./TipsComponents/shower.jpg";
import kettle from "./TipsComponents/kettle.jpg";
import pencil from "./TipsComponents/pencil.jpg";
import bin from "./TipsComponents/delete bin.jpg";

// import { UserTip } from './UserTip';
import AllTip from './TipsComponents/AllTip';
import Likes from './TipsComponents/Likes';

import badLang from './TipsComponents/badLang.json';

export default function Tips(){

    const [loggedInUser, setLoggedinUser] = useOutletContext();
    const [userdata, setUserdata] = useState("");

    var [tipC, setTipC] = useState();

    const [allTipData, setAllTipData] = useState("");

    const [likeno, setLikeno] = useState("");
    const [likearr, setLikearr] = useState([]);

    const [data, setData] = useState("");
    const [dataCat, setDataCat] = useState("");
    const [dataStr, setDataStr] = useState("");

    const [oSort, setOSort] = useState("Newest First");

    const catSort = useRef("");
    const [cSort, setCSort] = useState("");


    // useEffect(()=>{
    //     if(loggedInUser!=="" && userdata===""){

    //         // console.log(loggedInUser);      loggedInUser is just email not user

    //         const jwt = sessionStorage.getItem('jwt');
    //         console.log(jwt);
    //         axios({
    //             method: 'get',
    //             url: 'http://localhost:8080/user/findByEmail',
    //             // params: {email: loggedInUser.email},
    //             params: {email: loggedInUser},
    //             headers: {"Authorization" : `Bearer ${jwt}`}
    //         }).then((response) => {
    //             if (response.status === 200){
    //                 console.log(response.data);
    //                 console.log('response.data = ', response.data);
    //                 console.log(response.data.userType);
    //                 setUserdata(response.data);
    //                 console.log('userdata = ', userdata);
    //             }
    //         }).catch(err => {
    //             console.log(err.response);
    //             setUserdata("Data failure");
    //         })

    //         ///////////////
    //         console.log('userdata = ', userdata);

    //         // const jwt = sessionStorage.getItem('jwt');
    //         console.log(jwt);


    //         // axios({
    //         //     method: 'get',
    //         //     url: 'http://localhost:8080/tip/findByAuthor',
    //         //     // params: {authorId: loggedInUser.id},
    //         //     // params: {
    //         //     //     author: { id: userdata}
    //         //     // },
    //         //     params: {author: userdata},
    //         //     headers: {"Authorization" : `Bearer ${jwt}`}
    //         // }).then((response) => {
    //         //     if (response.status === 200){
    //         //         console.log(response.data);
    //         //         console.log(response.data.tipString);
    //         //         setTipdata(response.data);
    //         //     }
    //         // }).catch(err => {
    //         //     console.log(err.response);
    //         //     setTipdata("Tip Data failure");
    //         // })
    //     }
    // },[userdata, loggedInUser]);


    const checkLoggedIn = () => {
        if(loggedInUser!=="" && userdata===""){

            // console.log(loggedInUser);      loggedInUser is just email not user
            console.log("liu in T=", loggedInUser);

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
    }


    var tipCategory = useRef();
    var tipString = useRef();
    const tipCategory2 = useRef("ahhhhh");
    const tipString2 = useRef();

    // var [tipC, setTipC] = useState(); //moved to top
    var ro = true;

    const author = useRef();
    // remove author op

    const bannedWords = ["ban", "word"];
    // const badWords = JSON.parse(badLang);
    const badWords = require('./TipsComponents/badLang.json').words;

    const checkWords = (string) => {
        console.log("in checkWords ", string);
        // const checker = value => !bannedWords.some(e => value.includes(e));
        const checker = value => !badWords.some(e => value.includes(e));


        console.log("checker ", checker);
        // console.log("value ", value);

        const arr  = string.split(" ");

        console.log("af ", arr.filter(checker), "l= ", arr.filter(checker).length);
        console.log("a ", arr, "l= ", arr.length);

        // if (checker === true)
        //     return true;
        // else
        //     return false;

        var containsBad = false;
        // if (arr.filter(checker).every((val, index) => val !== arr[index]))
        // if (arr.filter(checker) != arr)
        if (arr.filter(checker).length !== arr.length)
            containsBad = true;

        console.log("containsBad ", containsBad);
        // return checker;
        return containsBad;
    }

    const validateForm = () => {
        let formValid = false;

        if (tipCategory.current.validity.valueMissing 
            || tipString.current.validity.valueMissing 
            // || author.current.validity.valueMissing)
            )
        {
            alert("Please fill in all text fields.");
        }
        else if (checkWords(tipString.current.value))
        {
            alert("This tip contains banned language. \nPlease enter again.");
        }
        else
        {
            formValid = true;
        }
        return formValid;
    }
    const validateForm2 = (tipID) => {
      let formValid = false;

      const newtC = document.getElementById(tipID + "select");
      console.log("vF2 tC= ", newtC);

      var tC = document.getElementById(tipID + "tC");
      var tS = document.getElementById(tipID);
      console.log("in VF2, tC= ", tC);
      console.log("tS= ", tS.textContent);// old
      console.log("tS= ", tS.value);// new

      console.log("tc2= ", tipCategory2, "ts2= ", tipString2);

      if (newtC.value === "" || tS.value === ""){
        // tipCategory2.current.validity.valueMissing 
        //   || tipString2.current.validity.valueMissing 
          // || author.current.validity.valueMissing)
          // )
      // {
          alert("Please fill in all text fields.");
      }
      else if (checkWords(tS.value))//tipString2.current.value))
      {
          alert("This tip contains banned language. \nPlease enter again.");
      }
      else
      {
          formValid = true;
      }
      return formValid;
  }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm()){

            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);

            // axios.post('https://reqres.in/api/users',{
            // axios.post('http://localhost:8080/tip',{
            axios({
                method: 'post',
                url: 'http://localhost:8080/tip',
                data: {
                    tipCategory: tipCategory.current.value,
                    tipString: tipString.current.value,
                    // author: userdata,
                    author: {
                        id: userdata.id,
                        name: userdata.name,
                        email: userdata.email,
                        password: userdata.password,
                        buyer_seller: userdata.buyer_seller,
                    }
                },
                headers: { "Authorization" : `Bearer ${jwt}`}
            }).then(response=>{
                console.log(response);
                if (response.status === 201){
                    alert("Tip created.")

                    ////////
                    getAllData();
                }
            }).then(()=>{
                tipCategory.current.value="";
                tipString.current.value="";
                // author.current.value=0;
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

    ///////////////
    // const [allTipData, setAllTipData] = useState(""); //moved to top

    const getAllTipData = () => {
        const jwt = sessionStorage.getItem('jwt');
        console.log('userdata.id = ', userdata.id);
        console.log('userdata = ', userdata);

        axios({
            method: 'get',
            url: 'http://localhost:8080/tip',
            headers: {"Authorization" : `Bearer ${jwt}`}})
            .then((response) => {
                console.log(response.data);
                console.log("rd = ", response.data);
                setAllTipData(response.data);

                ////////////// date
                console.log("date = ", response.date);
                // backend - get createAt and updatedAt dates

            })
            .catch((error) => {
                console.log(error);
            });
    };

    function custom_sort(a, b) {
        console.log("in cust_sort funct a=", a.updatedAt, ", b=", b, ".");
        console.log("in cust_sort funct ", allTipData, ".");
        console.log("in cust_sort funct i=", allTipData.index, ".");
        // console.log("a test=", new Date(a.updatedAt));
        console.log("a test=", new Date(a.createdAt));

        // return new Date(b.updatedAt)/*.getTime()*/ - new Date(a.updatedAt)/*.getTime()*/;
        return new Date(b.createdAt)/*.getTime()*/ - new Date(a.createdAt)/*.getTime()*/;
      }

    // const [likeno, setLikeno] = useState(""); //moved to top
    // const [likearr, setLikearr] = useState([]);

    function mp_sort(a, b)
    {
      console.log("in most popular sort a= ", a, " b= ", b);
      // console.log("a + Likes + ", Likes(a));
      // console.log("b + Likes + ", Likes(b));
      // console.log("a= ", a, "gla= ", getLikes(a), "ln= ", likeno);
      // console.log("b= ", b, "glb= ", getLikes(b), "ln= ", likeno);
      // // return (getLikes(a) - getLikes(b));
      // console.log("a.id= ", a.id, " likes= ", <Likes props={a} />);
      // console.log("a.id= ", a.id, " likes el= ", <Likes props={a} />);

      // console.log("b.id= ", b.id, " likes= ", <Likes props={b} />);

      // // var fl = String(<Likes props={a}/>);
      // // var sl = String(<Likes props={b} />);
      // console.log("before");
      // var likeElement = <Likes props={a} >tipLikes</Likes>;
      // var likes = likeElement.value;
      // console.log("likes = tipLikes= ", likes);

      // console.log("Likes(a)= ", Likes(a));

      var opEla = document.getElementById(a.id + "option");
      console.log("opEla= ", opEla);
      console.log("opEla id= ", opEla.id, " val= ", opEla.value, " textC= ", opEla.textContent);

      var opElb = document.getElementById(b.id + "option");
      console.log("opElb= ", opElb);
      console.log("opElb id= ", opElb.id, " val= ", opElb.value);

      console.log("after");

      // var f = Likes(a);
      // console.log("f= ", f);

      // console.log("fl= ", fl, "sl= ", sl);

      // return(<Likes props={a} /> - <Likes props={b}/>);
      // return (fl - sl);
      // return b - a;

      if(opEla.value === "" || opElb.value === "")
      {
        console.log("value blank");
      }
      else
      {
        console.log("not blank)");
      }

      return opElb.value - opEla.value;
      // return opEla.value - opElb.value;
      // return (opElb.value - opEla.value);
    }

    function testsort(a, b)
    {
      return b - a;
    }

    function isZero(i) {
      return i === "0";
    }

    function testsortobj(a, b, key)
    {
      // return b - a;
      return a[key] - b[key];
    }

    const displayAllTipData = () => {

        // if (catSort.current.value === "Home" && allTipData !== "") // all cat sort been put into 1
        // {
        //     // allTipData.filter(function (el) {
        //     //     console.log("el tc= ", el.tipCategory);
        //     //     return el.tipCategory === "Home";
        //     //   });
        //     const fil = allTipData.filter((e) => e.tipCategory === 'Home');
        //     // allTipData = allTipData.filter((e) => e.tipCategory === 'Home')
        //     // console.log("fil= ", fil);
        //     console.log("inner os= ", orderSort.current.value, " cs= ", catSort.current.value, " atd= ", allTipData);

        //     //
        //     // if (orderSort.current.value === "Newest First")
        //     // {
        //     //         // allTipData.updatedAt.sort(function(a, b){return a - b});
        //     //     console.log("in catsort ordersort check nf ", fil.updatedAt, ".");
        //     //         fil.sort(custom_sort);

        //     //         // var t1 = allTipData.substring(0,23);
        //     //         // var t2 = allTipData.substring(26);
        //     //         // var t3 = t1 + t2;
        //     //         // print(t3);
        //     //         // var  ms = Date.parse(t3);
        //     //         // print(ms);

        //     //         console.log("os= ", orderSort.current.value, " fil= ", fil);
        //     // }
        //     // else // will be original which is Oldest First
        //     // {
        //     //     console.log("in catsort ordersort check else ", oSort);
        //     // }

        //     console.log("atd.tc= ", allTipData.tipCategory);
        //     console.log("atd= ", allTipData);
        //     // console.log(allTipData.forEach((e) => e.tipCategory === "Home"));
        //     for (let i = 0; i < allTipData.length; i++)
        //         {console.log("for atd= ", allTipData.indexOf(i));}
        //     allTipData.map((allTipData, index) => {
        //         console.log("in if atd.map");
        //     // })
        //     if (allTipData.tipCategory !== "Home")
        //     {
        //         console.log("in if atd.tc != home");
        //         return (<></>);
        //     }
        // })
        // }
        console.log("os= ", orderSort.current.value, " cs= ", catSort.current.value, " atd= ", allTipData);


        if (orderSort.current.value === "Newest First" && allTipData !== "")// && catSort === "")
        {
                // allTipData.updatedAt.sort(function(a, b){return a - b});
            console.log("in ordersort check nf ", allTipData.updatedAt, ".");
                allTipData.sort(custom_sort);

                // var t1 = allTipData.substring(0,23);
                // var t2 = allTipData.substring(26);
                // var t3 = t1 + t2;
                // print(t3);
                // var  ms = Date.parse(t3);
                // print(ms);

                console.log("os= ", orderSort.current.value, " atd= ", allTipData);
        }
        else if (orderSort.current.value === "Most Popular" && allTipData !== "")
        {
            console.log("in most popular");

            let goodarray = [];

            let keys = [];
            let array = [];

            var obj = {};
            var a = [];

            allTipData.map((aTD, index) => {

              // console.log("before atd");
              // console.log("Likes(atd)= ", Likes(allTipData));
              // console.log("after atd");

                // getLikes(allTipData);

                // <Likes tip={allTipData} />
                // <Likes tip={aTD} />

                var opEla = document.getElementById(aTD.id + "option");
                console.log("opEla= ", opEla);
                console.log("opEla id= ", opEla.id, " val= ", opEla.value, " textC= ", opEla.textContent);

                array.push(opEla.value);
                keys.push(index);
                console.log("index= ", index, "array= ", array);

            })

            // array.sort(testsort);
            // console.log("sort array= ", array);

            if (array.every(isZero))//() => a === "0"))
            {
              console.log("bad array, ", array);
            }
            else
            {
              console.log("good array");
              goodarray = array;
              console.log("good array= ", goodarray, "key array= ", keys);
            }

            for (var  i = 0; i < keys.length; i++)
            {
              obj[keys[i]] = array[i];
            }

            // sortArrayOfObjects = (arr, key) => {return arr.sort((a, b) => a[key] - b[key]);};

            // sortArrayOfObjects(array, )
            console.log("obj array= ", obj);
            for (var key in obj)
            {
              if (obj.hasOwnProperty(key))
              {
                a.push(obj[key]);
              }
            }
            console.log("obj array a= ", a);
            console.log("obj array a sort= ", a.sort(testsort));

            for (var key in obj)
            {
              if(a[key] === obj[key])
              {
                console.log("array a[k] == obj[k] ", a[key], obj[key]);
              }
              else
              {
                console.log("array else");
              }
            }

            var start = a[0];
            console.log("array a start= ", a[0]);
            var end = a[a.length - 1];
            // console.log("array a end= ", a.slice(-1));
            console.log("array a end= ", a[a.length - 1]);

            let index = [];
            let sorted = [];

            for (var i = start; start >= end; i--)
            {
              console.log("array in 1st for");
              for (var j = 0; j < array.length; j++)
              {
                console.log("array in 2nd for");

                if (array[j] === i)
                {
                  console.log("array in if");

                  sorted.push(array[j]);
                  index.push(j);
                }
              }
            }
            // console.log("array index= ", index);
            console.log("array sorted= ", sorted);


            goodarray.sort(testsort);
            console.log("sorted good array= ", goodarray);

            // obj.sort(testsortobj);
            console.log("sorted obj good array= ", obj);


            // allTipData.sort(mp_sort);
            // allTipData.sort(mp_sort);

            // allTipData.map((allTipData, index) => {

            //   // console.log("before atd");
            //   // console.log("Likes(atd)= ", Likes(allTipData));
            //   // console.log("after atd");

            //     getLikes(allTipData)
            // })


            //test sort
            let arr = ["5", "4", "4", "0","0","0","2", "1", "0", "1", "0", "0"];
            console.log("arr= ", arr);
            arr.sort(testsort);
            console.log("arr= ", arr);



        }
        else // will be original which is Oldest First
        {
            console.log("in ordersort check else ", oSort);
        }

        return allTipData ? (
        allTipData.map((allTipData, index) => {

            // if (orderSort.current.value === "Newest First")
            // {
            //     // allTipData.updatedAt.sort(function(a, b){return a - b});

            //     allTipData.sort(custom_sort);
            // }

            // if (catSort.current.value === "Home" && allTipData !== "")
            // {
            //     // console.log("testing");
            //     // const fil = allTipData.filter((e) => e.tipCategory === 'Home');
            //     // allTipData = allTipData.filter((e) => e.tipCategory === 'Home')
            //     // console.log("fil= ", fil);
            //     console.log("inner if os= ", orderSort.current.value, " cs= ", catSort.current.value, " atd= ", allTipData);

            //     if (allTipData.tipCategory !== "Home")
            //     {
            //         return (<></>);
            //     }
            // }
            // if (catSort.current.value === "Car" && allTipData !== "")
            // {
            //     // console.log("testing");
            //     // const fil = allTipData.filter((e) => e.tipCategory === 'Home');
            //     // allTipData = allTipData.filter((e) => e.tipCategory === 'Home')
            //     // console.log("fil= ", fil);
            //     console.log("inner if os= ", orderSort.current.value, " cs= ", catSort.current.value, " atd= ", allTipData);

            //     if (allTipData.tipCategory !== "Car")
            //     {
            //         return (<></>);
            //     }
            // }
            // if (catSort.current.value === "Transport" && allTipData !== "")
            // {
            //     if (allTipData.tipCategory !== "Transport")
            //     {
            //         return (<></>);
            //     }
            // }

            // all cat in 1 if
            if(catSort.current.value !== "" && allTipData !== "")
            {
                if (allTipData.tipCategory !== catSort.current.value)
                {
                    return (<></>);
                }
            }

            console.log("in displayalldata");
            return (
                <div className=/*"userTipBoxN"*/"tipBox">
                    <span className=/*"userTipInfoN"*/"box" key={allTipData.id}>
                        <div className="firstLine">
                            <span className="tipCategory">
                            <p>{allTipData.tipCategory}</p>
                            </span>

                            {/* <span>{allTipData.indexOf(current)}</span> */}
                            <span>={index}=</span>

                            <span className="postInfo">
                                <span className="tipAuthor">posted by: {/*smithy*/}{allTipData.author.name}</span>
                                <span className="tipDateTime">
                                    {/*{" "}{/*posted*/} - {/*06/01/2023 15:28*/}{/*--/--/---- --:--*/}{new Date(allTipData.createdAt).toLocaleDateString('en-gb', { /*weekday:"short",*/ year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}) }
                                </span>
                            </span>
                        </div>
                        <div className="secondLine">
                            {/* <span className="userTipString"> */}
                            <textarea className="userTipStringAll" /*"ta*/readOnly>{allTipData.tipString}</textarea>
                            {/* </span> */}
                            {/* <span className="userLikes">
                                <span className="userTipLikes">
                                    <p>{/*207*}- Likes</p>
                                </span>
                                <span className="likeTip">
                                    <button id="likeTipButton">Like</button>
                                </span>
                            </span> */}
                            <span className="likes">
                                {/* <span className="tipLikes">
                                    {/* <p>-{() =>getLikes(allTipData.id)}-{tipLikes} Likes</p> */}
                                    {/* <p>{getLikes(allTipData.id)}= Likes</p> */}
                                    {/* <p>Likes</p> */}
                                    {/* {() => getLikes(allTipData.id)} */}
                                    {/* <p>{result[index]}-testing</p> *}
                                    {console.log("rindex=", result[index])}
                                </span> */}
                                <br/>
                                <span className="likeTip">
                                    {/* <button id="likeTipButton" onClick={() => like(allTipData, index)}>Like</button>
                                </span>
                                <span> */}
                                    {/* <p>//{loggedInUser}//</p> */}
                                    <AllTip loggedInUser={loggedInUser} allTipData={allTipData} order={order}/>{/*<p>Likes</p>*/}
                                </span>
                            </span>
                            {/* <div className="modifyTip">  */}
                            {/* </div> */}
                        </div>
                    </span>
                
                    {/* <br /><p> </p> */}

                </div>

                // <UserTip key={data.id} data={data} />

                // now need to format what looks like

            );
        })
        ) : (
            // <div>
            //     <h3>Want to post helpful tips for others? Create an account to submit your tips.</h3>
            //     <h3>If you already have an account Login to see your tips.</h3>
            // </div>

            <div>
              <br/>
              <h3>No data yet</h3>
            </div>
        );
    }

    ///////////////

    // const [data, setData] = useState(""); //moved to top
    // const [dataCat, setDataCat] = useState("");
    // const [dataStr, setDataStr] = useState("");
    const getAllData = () => {
        const jwt = sessionStorage.getItem('jwt');

        console.log('userdata.id = ', userdata.id);
        console.log('userdata = ', userdata);

        // axios
        //     .get("tip/findByAuthor", {
        axios({
            method: 'get',
            url: 'http://localhost:8080/tip/findByAuthor',
            params: {authorID: userdata.id},
            // params: {authorID: userdata},
            // params: {
            //     id: userdata.id,
            //     name: userdata.name,
            //     password: userdata.password,
            //     userType: userdata.userType
            // },
            headers: {"Authorization" : `Bearer ${jwt}`}})
            .then((response) => {
                console.log(response.data);
                console.log("rd = ", response.data);
                setData(response.data);
                setDataCat(response.data.tipCategory);
                setDataStr(response.data.tipString);

                //////////
                // const posts = [];
                // for (let key in response.data) {
                //     posts.push({...response.data[key], id: key});
                // }

                // this.useState({
                //     posts: posts,
                // });


                ////////////// date
                console.log("date = ", response.date);
                // backend - get createAt and updatedAt dates

            })
            .catch((error) => {
                console.log(error);
            });
        };

    const orderSort = useRef("Newest First");// had to put before useeffect
    // const [oSort, setOSort] = useState("Newest First"); //moved top top

    // const catSort = useRef("");
    // const [cSort, setCSort] = useState("");

    useEffect(() => {
        checkLoggedIn();
        getAllData();
        console.log('uE userdata = ', userdata);

        ///////
        getAllTipData();


        /////
        // updateTip();

    }, [userdata, orderSort, oSort, cSort, tipCategory2, tipC]);//, checkLoggedIn, getAllData]);

    const displayData = () => {
      // do something bout id user doesn't have any tips
        return data ? (
        data.map((data) => {

            console.log("d = ", data);
            getLikes(data);//
            var tC = data.id + "tC";
            var tE = data.id + "tE";
            var tD = data.id + "tD";
            var tM = data.id + "tM";
            return (
                // <div className="data" key={data.id}>
                //     <div className="tipFL">
                //         <h3>{data.tipCategory}</h3>
                //         <p>date</p>
                //     </div>
                //     <div className="tipSL">
                //         <textarea className="ta" readOnly>{data.tipString}</textarea>
                    
                //  {/* // <p>{data.author}</p> */}

                //         <div className="manageBox"> 
                //         {/* button don't go to just 1 tip but all tips -> fix =>fixed*/}
                //             <button className="editBtn" onClick={() => editTip(data.id)}>Edit</button>              
                //             <button className="deleteBtn" onClick={() => deleteTip(data.id)}>Delete</button>
                //             {/* fix ACAO error */}
                //         </div>
                //     </div>
                
                // </div>

                <div className="userTipBoxN">
                    <span className="userTipInfoN" key={data.id}>
                        <div className="firstLine">
                            {/* <h3>{data.tipCategory}</h3>
                            <p>date</p> */}
                            <span className="tipCategory" id={tC}>
                            {/* <p>{data.tipCategory}</p> */}
                            {data.tipCategory}
                            </span>
                            <span className="postInfo">
                                <span className="tipDateTime">
                                    {" "}posted - {new Date(data.createdAt).toLocaleDateString('en-gb', { /*weekday:"short",*/ year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}) }
                                    {" "}updated - {new Date(data.updatedAt).toLocaleDateString('en-gb', { /*weekday:"short",*/ year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}) }
                                </span>
                            </span>
                        </div>
                        <div className="secondLine">
                            {/* <span className="userTipString"> */}
                            <textarea className="userTipString" id={data.id}/*"ta*/readOnly={ro}>{data.tipString}</textarea>
                            {/* </span> */}
                            <span className="userLikes">
                                <span className="userTipLikes">
                                <Likes tip={data}/>{/* <p>Likes</p> */}
                                    {/* <p>{/*207*}{/*tipLikes*}- Likes</p> */}
                                </span>
                            </span>
                            <div className="endSecondLine">
                              <div className="modifyTip" id={tM}> 
                              {/* button don't go to just 1 tip but all tips -> fix =>fixed*/}
                                  <button className="editBtn" onClick={() => editTip(data.id)}>{/*Edit*/}
                                  {/* <span className="tooltiptext">Edit</span> */}
                                    <img
                                      src={pencil}
                                      alt="editingButton"
                                      // id="edit"
                                      id={tE}
                                      width="25px"
                                      height="35px"
                                    /> 
                                    <span className="tooltiptext">Edit</span>

                                  </button>              
                                  <button className=/*"deleteBtn"*/"editBtn" onClick={() => deleteTip(data.id)}>{/*Delete*/}
                                  {/* <span className="tooltiptext">Delete</span> */}
                                    <img
                                      src={bin}
                                      alt="deletingButton"
                                      // id="delete"
                                      id={tD}
                                      width="25px"
                                      height="35px"
                                    />
                                    <span className="tooltiptext">Delete</span>
                                  </button>
                                  {/* fix ACAO error */}
                              </div>
                            </div>
                        </div>
                    </span>
                
                    <br /><p> </p>

                </div>

                // <UserTip key={data.id} data={data} />

                // now need to format what looks like

            );
        })
        ) : (
        // <h3>No data yet</h3>

          <div>
            <br/>
            <h4>Want to post helpful tips for others? Create an account to submit your tips.</h4>
            <h4>If you already have an account Login to see your tips.</h4>
          </div>

        );
    }

    //Get Likes
    // const[tipLikes, setTipLikes] = useState("");
    // function getLikes(tip)
    // {
    //     console.log("in tip getLikes");

    //     const jwt = sessionStorage.getItem('jwt');
    //     console.log(jwt);

    //     var noLikes = 0;

    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:8080/like/findByTipId',
    //         params: {tipId : tip.id},
    //         headers: { "Authorization" : `Bearer ${jwt}`}
    //     }).then(response=>{

    //         console.log("tl res data= ", response.data);
    //         console.log("tl count= ", response.data.length);
    //         noLikes = response.data.length;
    //         setTipLikes(response.data.length);

    //         return noLikes;
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    //     return noLikes;
    // }


    function getLikes(tip)
    {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt, tip.id);

        axios({
            method: 'get',
            url: 'http://localhost:8080/like/countByTipId',
            params: {tipId : tip.id},
            headers: { "Authorization" : `Bearer ${jwt}`}
        }).then(response=>{

            console.log("tl2 res data= ", response.data);
            console.log("tl2 count= ", response.data.length);
            // noLikes = response.data.length;
            // setTipLikes(response.data.length);

            setLikeno(response.data.length);

            // return noLikes;
        })
        .catch(error=>{
            console.log(error);
        })
        // return noLikes;
    }


    function editTip(tipID) {
        // event.preventDefault();

      console.log("edit tipId= ", tipID);
      console.log("ti= ", document.getElementById(tipID));
      // document.getElementById(tipID).style.backgroundColor = "red";
      const el = document.getElementById(tipID);
      // el.style.readOnly = false;
      ro = false;
      el.readOnly = false;// this works
      console.log("el.readOnly= ", el.readOnly, "esro= ", el.style.readOnly);
      // el.value = "editing";

      const tC = document.getElementById(tipID + "tC");
      console.log("tC= ", tC);
      console.log("tC value= ", tC.value);
      console.log("tC textContent= ", tC.textContent);
      // tC.color = "red";
      // tC.value = "T";
      // console.log("tC value after= ", tC.value);

      // tC.textContent = "T";

      var d = document.createElement('select');
      d.className = 'tipFilterCategory';
      d.id = tipID + "select";

      // d.ref={tipCategory2};
      // d.ref.current = {tipCategory};
      // console.log("d ref= ", d.ref, "d ref c= ", d.ref.current);

      d.innerHTML = tC.innerHTML;

      tC.parentNode.replaceChild(d, tC);
      // d.className = "tipFilterCatagory";

      let opts = ["", "Home", "Car", "Transport"];
      for (var i = 0; i < opts.length; i++) {
        var option = document.createElement("option");
        option.value = opts[i];
        option.text = opts[i];
        d.appendChild(option);
    }

    d.ref={tipCategory2};
    console.log("d ref= ", d.ref, "d ref c= ", d.ref.current);

    // var selectedValue = d.options[d.selectedIndex].value;
    // if (selectedValue !== "")
    // {
    //   // alert("Please select a card type");
    //   setTipC(selectedValue);
    //   console.log("sv= ", selectedValue, "state tipC= ", tipC);
    // }

    // tC.ref

    // d.ref = {tipCategory};
    console.log("d ref= ", d.ref, " tC2= ", tipCategory2, " tC2v= ", tipCategory2.current);


    //
    const tE = document.getElementById(tipID + "tE");
    const tD = document.getElementById(tipID + "tD");
    const tM = document.getElementById(tipID + "tM");

    var e = document.createElement('button');
    // e.className = "";
    // e.innerHTML = 

    // e.value = "Submit";
    e.textContent = "Submit";
    e.text = "Submit";
    e.className = "tipButton";
    e.id = tipID + "subBtn";
    // e.onClick = () => eTip(tipID);
    e.onclick = () => eTip(tipID);

    tM.parentNode.replaceChild(e, tM);

    // e.onClick = eTip(tipID);


    }

    // function updateTip()
    // {
    //   const d = getElementById
    // }

    function eTip(tipID)
    {
      console.log("eTip tipC= ", tipC, "tipCat2= ", tipCategory2);
      const tC = document.getElementById(tipID + "select");
      console.log("eTip tC= ", tC, "textc= ", tC.textContent, "tc val= ", tC.value);
      const tS = document.getElementById(tipID);

      // const spantC = document.getElementById(tipID + "tC");
      // const spantC = document.createElement("span");
      // spantC.className = "tipCategory";
      // spantC.innerHTML = tC.value;
      // console.log("spantC= ", spantC);

      // tC.parentNode.replaceChild(spantC, tC);



      // var tS = document.getElementById(tipID);
      // tS.readOnly = true;

      if(validateForm2(tipID)){

          const jwt = sessionStorage.getItem('jwt');
          console.log(jwt);

          axios({
              method: 'put',
              url: 'http://localhost:8080/tip/' + tipID,
              // params: {id: tipID},
              data: {
                  tipCategory: tC.value,
                  //tipCategory2.current.value,
                  // tipCategory: tipC,
                  tipString: tS.value,
                  //tipString2.current.value,
                  // author: userdata,
                  author: {
                      id: userdata.id,
                      name: userdata.name,
                      email: userdata.email,
                      password: userdata.password,
                      buyer_seller: userdata.buyer_seller,
                  }
              },
              headers: { "Authorization" : `Bearer ${jwt}`,
              "Access-Control-Allow-Origin": "http://localhost:8080"}
          }).then(response=>{
              console.log(response);
              if (response.status === 200){
                alert("Tip updated.")
                getAllData();//

                // make select options text span again
                // leave category on current instaed of going blank

                // tip Category
                const spantC = document.createElement("span");
                spantC.id = tipID + "tC";
                spantC.className = "tipCategory";
                spantC.innerHTML = tC.value;
                console.log("spantC= ", spantC);
                tC.parentNode.replaceChild(spantC, tC);

                // tip String
                tS.readOnly = true;

                // modify tip
                const oldtM = document.getElementById(tipID + "tM");
                console.log("oldtM= ", oldtM);
                const tM = document.createElement("div");
                tM.id = tipID + "tM";

                // edit
                const eB = document.createElement("button");
                eB.className = "editBtn";
                eB.onclick = () => editTip(tipID);
                const eBimg = document.createElement("img");
                eBimg.id = tipID + "tE";
                eBimg.alt="editingButton";
                eBimg.src= pencil;
                eBimg.style.width="25px";
                eBimg.style.height="35px";
                const eBimgttt = document.createElement("span");
                eBimgttt.className = "tooltiptext";
                eBimgttt.innerHTML = "Edit";

                eBimg.appendChild(eBimgttt);
                eB.appendChild(eBimg);

                tM.appendChild(eB);

                // delete
                const dB = document.createElement("button");
                dB.className = "editBtn";
                dB.onclick = () => deleteTip(tipID);
                const dBimg = document.createElement("img");
                dBimg.id = tipID + "tE";
                dBimg.alt="editingButton";
                dBimg.src= bin;
                dBimg.style.width="25px";
                dBimg.style.height="35px";
                const dBimgttt = document.createElement("span");
                dBimgttt.className = "tooltiptext";
                dBimgttt.innerHTML = "Delete";

                dBimg.appendChild(dBimgttt);
                dB.appendChild(dBimg);

                tM.appendChild(dB);

                // eB.innerHTML = 
                // <button className="editBtn" onClick={() => editTip(data.id)}>
                //   <img
                //     src={pencil}
                //     alt="editingButton"
                //     // id="edit"
                //     id={tE}
                //     width="25px"
                //     height="35px"
                //   /> 
                //   <span className="tooltiptext">Edit</span>

                // </button>              
                // <button className=/*"deleteBtn"*/"editBtn" onClick={() => deleteTip(data.id)}>{/*Delete*/}
                // {/* <span className="tooltiptext">Delete</span> */}
                //   <img
                //     src={bin}
                //     alt="deletingButton"
                //     // id="delete"
                //     id={tD}
                //     width="25px"
                //     height="35px"
                //   />
                //   <span className="tooltiptext">Delete</span>
                // </button>

                console.log("tM= ", tM);

                const subBtn = document.getElementById(tipID + "subBtn");

                subBtn.parentNode.replaceChild(tM, subBtn);

              }
          }).then(()=>{
              // tipCategory.current.value="empty";
              // tipString.current.value="empty";
              // author.current.value=0;


              getAllData();// not updating the tipString for some reason
          })
          .catch(error=>{
              console.log(error);
          })
      }
    }

    function deleteTip(tipID) {
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        axios.delete('http://localhost:8080/tip/' + tipID,
            // params: {id: tipID},
            {headers: { "Authorization" : `Bearer ${jwt}`,
            "Access-Control-Allow-Origin": "http://localhost:8080"},
            mode: 'cors'
        }).then(response=>{
            console.log(response);
            if (response.status === 201){
                alert("Tip deleted.")
            }
        }).then(()=>{
            tipCategory.current.value="emptyD";
            tipString.current.value="emptyD";
            author.current.value=100;

            getAllData();// not updating after
        })
        .catch(error=>{
            console.log(error);
        })
    }

    ///////////////////
    // tips.js
    const tabSwitch = () => {
        const tabs = document.querySelectorAll("[data-tab-value]");
        const tabInfos = document.querySelectorAll("[data-tab-info]");
    
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.tabValue);
    
            tabInfos.forEach((tabInfo) => {
              tabInfo.classList.remove("active");
            });
            target.classList.add("active");
          });
        });
      };


    ////////
    // sort

    // const orderSort = useRef("Newest First");

    const order = (/*data*/) => {
        // data.sort((a, b) => {

        
        //     if (orderSort.current.value === "Newest First")
        //     {
        //         // date value
        //     }
        //     if (orderSort.current.value === "Oldest First")
        //     {
        //         // date value
        //     }
        //     if (orderSort.current.value === "Most Popular")
        //     {
        //         // likes value
        //         data.sort(function(a, b){return a - b});
        //     }
        //     if (orderSort.current.value === "Least Popular")
        //     {
        //         // likes value
        //         data.sort(function(a, b){return b - a});
        //     }
        // })

        if (orderSort.current.value === "Newest First")
        {
            setOSort("Newest First");
        }
        if (orderSort.current.value === "Oldest First")
        {
            setOSort("Oldest First");
        }
    }

    /////////
    // Like
    // const like = (event) =>
    // function like(tip)
    // const like = (tip, index) =>
    // {
    //     // event.preventDefault();
    //     const jwt = sessionStorage.getItem('jwt');
    //     console.log(jwt);

    //     if (result[index].some(e => e.user.email !== loggedInUser))
    //     {
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8080/like',
    //         data: {
    //             user: {
    //                 id: userdata.id,
    //                 name: userdata.name,
    //                 email: userdata.email,
    //                 password: userdata.password,
    //                 buyer_seller: userdata.buyer_seller,
    //             },
    //             tip: tip
    //         },
    //         headers: { "Authorization" : `Bearer ${jwt}`}
    //     }).then(response=>{
    //         console.log(response);
    //         if (response.status === 201){
    //             alert("Tip like created.")

    //             ////////
    //             getAllData();
    //             // getLikes(tip.id);
    //         }
    //     // }).then(()=>{
    //     //     tipCategory.current.value="";
    //     //     tipString.current.value="";
    //     //     // author.current.value=0;
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    //     } else
    //     {
    //         alert("already exists");
    //     }

    // }

    // const[tipLikes, setTipLikes] = useState("");
    // const [result, setResult] = useState([]);
    // // const getLikes = (tip) =>
    // function getLikes(tip)
    // {
    //     console.log("in getLikes");
    //     // setTipLikes(0);

    //     const jwt = sessionStorage.getItem('jwt');
    //     console.log(jwt);

    //     var noLikes = 0;

    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:8080/like/findByTipId',
    //         params: {tipId : tip},
    //         headers: { "Authorization" : `Bearer ${jwt}`}
    //     }).then(response=>{
    //         // console.log("tipId= ", tip, " nolikes= ", response.data.user.length);
    //         // if (response.status === 201){
    //         //     alert("Tip like created.")
    //         //     ////////
    //         //     getAllData();
    //         // }

    //         // var obj = JSON.parse(response.data);
    //         // // var count = Object.keys(response.data.user[0]).length;
    //         // // var count = response.data;
    //         // var count = Object.keys(obj).length;
    //         // // console.log("count = ", _.keys(count[0]).length);
    //         // console.log("count= ", count);

    //         console.log("res data= ", response.data);
    //         console.log("count= ", response.data.length);
    //         noLikes = response.data.length;
    //         // setTipLikes(response.data.length);


    //         setResult(result => [...result, response]);


    //         return noLikes;

    //     // }).then(()=>{
    //     //     tipCategory.current.value="";
    //     //     tipString.current.value="";
    //     //     // author.current.value=0;
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    //     return noLikes;
    //     // return response.data.length;
    // }

    return (
        // <div>
        //     <form className="tipinput" noValidate onSubmit={handleSubmit}>
        //         <label className="labelText">tipCategory: </label>
        //         <input type="text" ref={tipCategory} required/><br/><br/>

        //         <label className="labelText">tipString:</label>
        //         <input type="text" ref={tipString} name="tipString" required/><br/><br/>

        //         <label className="labelText">author:</label>
        //         <input type="text" ref={author} name="author" required/><br/><br/>

        //         <input type="submit" value="Submit"/>
        //     </form>

        //     {/* <p></p> */}
        //     <p>tips below</p>
        //     {/* <button onClick={checkuserdata}>click me</button> */}
        //     {/* <p>{tipdata.tipCategory}</p>
        //     <p>{tipdata.tipString}</p> */}
        //     <div className="box">
        //         {/* {data} */}
        //         <p>---</p>
                // {displayData()}
        //         {/* {displayDataCat()} */}
        //         {dataCat}
        //     </div>

        //     {/* <button onClick={checkuserdata}>click me</button> */}

        //     {/* must update displayed data after posting / putting (editing) tip */}
        // </div>


        <section className="mainContent">
            <section>
                <h3>Energy Saving Tips</h3>
                <br />
                <p>
                    We know not everyone can afford to switch to better renewable energy
                    yet, so here's some tips to help you out saving energy and money for
                    energy.
                </p>
            </section>

            <section>
                <div className="tabs">
                    {/* need to figure out tab switching + put the css in*/}
                    <span data-tab-value="#tab_1" onClick={tabSwitch}>
                    Tips from Us
                    </span>
                    <span data-tab-value="#tab_2" onClick={tabSwitch}>
                    Tips from All
                    </span>
                    <span data-tab-value="#tab_3" onClick={tabSwitch}>
                    Tips from You
                    </span>
                </div>
                <div className="tab-content">

                    {/* tab 1 */}
                    <div className="tabs_tab active" id="tab_1" data-tab-info>
                    {/* <!-- group em together properly now --> */}

                        <div className="tipLine">
                            <div className="tip">
                                <div className="beforeH">
                                    <span>
                                    <h4>
                                        Leaving the room?
                                        <br />
                                        <br />
                                        Turn it off
                                    </h4>
                                    </span>
                                    <img src={lightbulb} alt="lightbulb" id="lightbulb" />
                                </div>
                                <div className="afterH">
                                    Turning lights off when you leave the room or are simply not
                                    using them could save you £25 per year on energy bills
                                </div>
                            </div>
                            <div className="tip">
                                <div className="beforeH">
                                    <span>
                                    <strong>
                                        Not using it?
                                        <br />
                                        <br />
                                        Unplug it
                                    </strong>
                                    </span>
                                </div>
                                <div className="afterH">
                                    If you're not using your electrical devices, make sure you
                                    unplug them
                                </div>
                            </div>
                        </div>

                    <div className="tipLine">
                        <div className="tip">
                            <div className="beforeH">
                                <span>
                                <strong>
                                    At 100%?
                                    <br />
                                    <br />
                                    Stop charging it
                                </strong>
                                </span>
                            </div>
                            <div className="afterH">
                                Make sure you unplug when your devices reach full-charge
                            </div>
                        </div>
                        <div className="tip">
                            <div className="beforeH">
                                <span>
                                <strong>
                                    Use an air dryer
                                    <br />
                                    <br />
                                    Not a tumble dryer
                                </strong>
                                </span>
                            </div>
                            <div className="afterH">
                                Don't use the tumble dryer when it's not necessary, hanging
                                clothes on drying racks could save £70 a year
                            </div>
                        </div>
                    </div>

                    <div className="tipLine">
                        <div className="tip">
                            <div className="beforeH">
                                <span>
                                <strong>
                                    Shower don't Bathe
                                    <br />
                                </strong>
                                </span>
                                <img src={shower} alt="shower" id="shower" />
                            </div>
                            <div className="afterH">
                                Swapping just one bath for a short shower a week could save
                                £20 a year
                            </div>
                        </div>
                        <div className="tip">
                            <div className="beforeH">
                                <span>
                                <strong>
                                    Use Kettles wisely
                                    <br />
                                    <br />
                                    Avoid overfilling
                                </strong>
                                </span>
                                <img src={kettle} alt="kettle" id="kettle" />
                            </div>
                            <div className="afterH">
                                Using just the right amount of water when boiling your kettle
                                could save £13 a year
                            </div>
                        </div>
                    </div>
                </div>

                {/* tab 2 */}
                <div className="tabs_tab" id="tab_2" data-tab-info>
                    <p>Browse the helpful tips posted by your fellow users.</p>
                    <br />
                    <div className="tab2">
                    <div className="allTips">
                        {/* <p>box</p>
                                    <p>gonna have a filter</p>
                                    <p>then display tips underneath</p>
                                    <br/> */}
                        <div id="aTsameLine">
                            <span>
                                Category:
                                <select /*id=*/className="tipFilterCategory" ref={catSort} onChange={(e) => setCSort(e.target.value)}>
                                    <option value=""></option>
                                    <option id="homeOption" value="Home">Home</option>
                                    <option id="carOption" vlaue="Car">Car</option>
                                    <option value="Transport">Transport</option>
                                </select>
                            </span>
                            <span>
                                Order:
                                <select id="tipFilterCategory" className="tipFilterCategory" ref={orderSort} onChange={(e) => setOSort(e.target.value)}>
                                    <option id="newest">Newest First</option>
                                    <option id="oldest">Oldest First</option>
                                    {/* need to implement */}
                                    <option id="mostPop">Most Popular</option>
                                    <option id="leastPop">Least Popular</option>
                                </select>
                            </span>
                            {/* <!-- proper name -> organise similar elements for css --> */}
                            {/* <span>
                                <button id="tipFilterButton" onClick={() => order}>Filter</button>
                            </span> */}
                        </div>
                        <div className="tipBoxes">

                            {/*  */}
                            <div className="box">
                                {displayAllTipData()}
                            </div>


                            {/* <div className="tipBox">
                                <div className="firstLine">
                                    <span className="tipCategory">
                                        <p>Home</p>
                                    </span>
                                    <span className="postInfo">
                                        <span className="tipAuthor">posted by: smithy</span>
                                        <span className="tipDateTime">- 05/01/2023 15:25</span>
                                    </span>
                                </div>
                                <div className="secondLine">
                                    <span className="tipString">
                                        <p>
                                        Remember to keep all windows and doors close to stop
                                        heat escaping.
                                        </p>
                                    </span>
                                    <span className="likes">
                                        <span className="tipLikes">
                                        {/* <div id="number" value="0">0</div> *}
                                        <p>1 Likes</p>
                                        </span>
                                        <span className="likeTip">
                                        <button
                                            id="likeTipButton"
                                            // onClick={
                                            //     document.getElementById("number").innerHTML++
                                            // }
                                        >
                                            Like
                                        </button>
                                        </span>
                                    </span>
                                </div>
                            </div> */}

                            {/* <div className="tipBox">
                                <div className="firstLine">
                                    <span className="tipCategory">
                                        <p>Car</p>
                                    </span>
                                    <span className="postInfo">
                                        <span className="tipAuthor">posted by: jane doe</span>
                                        <span className="tipDateTime">- 05/01/2023 15:25</span>
                                    </span>
                                </div>
                                <div className="secondLine">
                                    <span className="tipString">
                                        <p>
                                        Never leave the engine running. Even if it is for only a
                                        couple minutes, it's better to turn it off.
                                        </p>
                                    </span>
                                    <span className="likes">
                                        <span className="tipLikes">
                                        <p>44 Likes</p>
                                        </span>
                                        <span className="likeTip">
                                        <button id="likeTipButton">Like</button>
                                        </span>
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    </div>
                </div>

                {/* tab 3 */}
                <div className="tabs_tab" id="tab_3" data-tab-info>
                    {/* <div className="tab3"> */}
                    <span>You currently have </span>
                    {/* <span>2</span> */}
                    <span>{data.length}</span>
                    <span> tips posted.</span>
                    {/* <p>{data.length}</p> */}

                    {/* submit tips */}
                    <div className="submitTips">
                        <div>
                            <p>Do you have helpful tips for others?</p>
                            <span>Category: </span>
                            <select id="tipCategory" ref={tipCategory} required>
                                <option value=""></option>
                                <option id="homeOption" value="Home">Home</option>
                                <option id="carOption" value="Car">Car</option>
                                <option value="Transport">Transport</option>
                            </select>
                        </div>
                        <div id="textArea">
                            <textarea
                                id="tA"
                                placeholder="Enter your Tip here..."
                                ref={tipString} required
                            ></textarea>
                        </div>
                        <div id="tipButtonDiv">
                            <button /*id*/className="tipButton" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>

                    {/* <div className="tab3"> */}
                    <div className="userTips">
                        <br />
                        <p>
                        <strong>Your Tips:</strong>
                        </p>
                        {/* <br/> */}

                        <div className="tbox">
                            <div className="lbox">
                                {displayData()}
                            </div>
                        </div>

                        {/* <div className="submitTipsN">

                            <div className="userTipBoxN">
                                <span className="userTipInfoN">
                                    <div className="firstLine">
                                        <span className="tipCategory">
                                            <p>Car</p>
                                        </span>
                                        <span className="postInfo">
                                            <span className="tipDateTime">
                                            {" "}
                                            posted - 05/01/2023 15:25
                                            </span>
                                        </span>
                                    </div>
                                    <div className="secondLine">
                                        <span className="userTipString">
                                            <p>
                                            Never leave the engine running. Even if it is for
                                            only a couple minutes, it's better to turn it off.
                                            </p>
                                        </span>
                                        <span className="userLikes">
                                            <span className="userTipLikes">
                                                <p>44 Likes</p>
                                            </span>
                                        </span>
                                    </div>
                                </span>
                                <span className="modifyTip">
                                    <img
                                    src={pencil}
                                    alt="editingButton"
                                    id="edit"
                                    width="25px"
                                    height="35px"
                                    />
                                    <img
                                    src={bin}
                                    alt="deletingButton"
                                    id="delete"
                                    width="25px"
                                    height="35px"
                                    />
                                </span>

                        {/* need editing, deleting stuff */}
                        {/* </div> */}
                            </div>
                        {/* <div className="info"></div>
                                        <div id="textAreaN">
                                            <textarea id="tAN" placeholder="Enter your Tip here..." ></textarea>
                                        </div>
                                        <div id="tipButtonDivN">
                                            <button id="tipButtonN">Submit</button>
                                        </div> *}
                        </div> */}

                    {/* must fix css */}
                        {/* <div>
                            <div className="userTipBoxN">
                                <span className="userTipInfoN">
                                    <div className="firstLine">
                                        <span className="tipCategory">
                                            <p>Home</p>
                                        </span>
                                        <span className="postInfo">
                                            <span className="tipDateTime">
                                            {" "}
                                            posted - 06/01/2023 15:28
                                            </span>
                                        </span>
                                    </div>
                                    <div className="secondLine">
                                        <span className="userTipString">
                                            <p>
                                            Only turn the heating on when it's necessary, layer
                                            up clothing instead.
                                            </p>
                                        </span>
                                        <span className="userLikes">
                                            <span className="userTipLikes">
                                            <p>207 Likes</p>
                                            </span>
                                        </span>
                                    </div>
                                </span>
                                <span className="modifyTip">
                                    <img
                                    src={pencil}
                                    alt="editingButton"
                                    id="edit"
                                    width="25px"
                                    height="35px"
                                    />
                                    <img
                                    src={bin}
                                    alt="deletingButton"
                                    id="delete"
                                    width="25px"
                                    height="35px"
                                    />
                                </span>

                        {/* need editing, deleting stuff *}
                            </div>
                        </div>
                    </div> */}
                    </div>
                {/* </div> */}
            </div>
        </section>
    </section>
    )
}