import React, { useRef, useState, useEffect, createElement } from "react";
import axios from "axios";

import { useOutletContext } from "react-router-dom";

import './Tips.css';

import lightbulb from "./TipsComponents/lightbulb.jpg";
import shower from "./TipsComponents/shower.jpg";
import kettle from "./TipsComponents/kettle.jpg";
import pencil from "./TipsComponents/pencil.jpg";
import bin from "./TipsComponents/delete bin.jpg";

import AllTip from './TipsComponents/AllTip';
import Likes from './TipsComponents/Likes';

// import badLang from './TipsComponents/badLang.json';         // imported later on

export default function Tips(){

    const [loggedInUser, setLoggedinUser] = useOutletContext();             // for logged in user
    const [userdata, setUserdata] = useState("");                       // logged in user

    const [allTipData, setAllTipData] = useState("");                   // all tips

    const [data, setData] = useState("");                               // logged in user's tips

    const catSort = useRef("");
    const [cSort, setCSort] = useState("");

    const checkLoggedIn = () => {                                       // check if a user is logged in
        if(loggedInUser!=="" && userdata==="")
        {
            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);
            axios({                                                     // gets user by email from backend
                method: 'get',
                url: 'http://localhost:8080/user/findByEmail',
                params: {email: loggedInUser},
                headers: {"Authorization" : `Bearer ${jwt}`}
            }).then((response) => {
                if (response.status === 200){
                    console.log(response.data);
                    setUserdata(response.data);                         // sets the logged in user
                    
                    // getAllData();
                }
            }).catch(err => {
                console.log(err.response);
                setUserdata("Data failure");
            })
        }
    }


    var tipCategory = useRef();
    var tipString = useRef();
    // const tipCategory2 = useRef("ahhhhh");
    // const tipString2 = useRef();

    // var [tipC, setTipC] = useState(); //moved to top
    var ro = true;                                              // boolean readonly

    const author = useRef();
    // remove author op

    // const badWords = JSON.parse(badLang);
    const badWords = require('./TipsComponents/badLang.json').words;

    const checkWords = (string) => {                                        // check if tipString contains banned language
        console.log("in checkWords ", string);
        const checker = value => !badWords.some(e => value.includes(e));

        const arr  = string.split(" ");
        var containsBad = false;

        if (arr.filter(checker).length !== arr.length)
            containsBad = true;

        return containsBad;
    }

    const validateForm = () => {                                        // validates create tip form
        let formValid = false;

        if (tipCategory.current.validity.valueMissing 
            || tipString.current.validity.valueMissing
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

    const validateForm2 = (tipID) => {                                  // validates the edit tip form
        let formValid = false;

        const newtC = document.getElementById(tipID + "select");
        //   var tC = document.getElementById(tipID + "tC");
        var tS = document.getElementById(tipID);

        if (newtC.value === "" || tS.value === ""){
            alert("Please fill in all text fields.");
        }
        else if (checkWords(tS.value))
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

        if(validateForm()){                                         // if create tip form is valid post tip to backend

            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);

            axios({
                method: 'post',
                url: 'http://localhost:8080/tip',
                data: {
                    tipCategory: tipCategory.current.value,
                    tipString: tipString.current.value,
                    author: {
                        id: userdata.id,
                        name: userdata.name,
                        email: userdata.email,
                        password: userdata.password,
                        dob: userdata.dob
                    }
                },
                headers: { "Authorization" : `Bearer ${jwt}`}       // only logged in users can create tips
            }).then(response=>{
                console.log(response);
                if (response.status === 201){
                    alert("Tip created.")

                    ////////
                    getAllData();                                   // gets all logged in user's tips
                }
            }).then(()=>{
                tipCategory.current.value="";
                tipString.current.value="";
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

    ///////////////

    const getAllTipData = () => {                                   // gets all tips from backend
        // const jwt = sessionStorage.getItem('jwt');

        axios({
            method: 'get',
            url: 'http://localhost:8080/tip',
            // headers: {"Authorization" : `Bearer ${jwt}`}
            })
            .then((response) => {
                setAllTipData(response.data);

                //////////////
            })
            .catch((error) => {
                console.log(error);
            });
    };

    function custom_sort(a, b) {                                    // newest first tip sort
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
    function custom_sort_old(a, b) {
        return new Date(a.createdAt)/*.getTime()*/ - new Date(b.createdAt)/*.getTime()*/;
      }

    function mp_sort(a, b)
    {
      console.log("in most popular sort a= ", a, " b= ", b);

      var opEla = document.getElementById(a.id + "option");
      console.log("opEla= ", opEla);
      console.log("opEla id= ", opEla.id, " val= ", opEla.value, " textC= ", opEla.textContent);

      var opElb = document.getElementById(b.id + "option");
      console.log("opElb= ", opElb);
      console.log("opElb id= ", opElb.id, " val= ", opElb.value);

      console.log("after");

      if(opEla.value === "" || opElb.value === "")
      {
        console.log("value blank");
      }
      else
      {
        console.log("not blank)");
      }

      return opElb.value - opEla.value;
    }

    function testsort(a, b)                                         // sorts most first
    {
      return b - a;
    }

    function testsortleast(a, b)
    {
      return a - b;
    }

    function isZero(i) {
      return i === "0";
    }

    const displayAllTipData = () => {                               // displays all tips
        // getAllTipData();

        var mappingAllTipData = allTipData;                         // set all tips to local variable for mapping

        if (orderSort.current.value === "Newest First" && allTipData !== "")
        {
            allTipData.sort(custom_sort);
        }
        else if (orderSort.current.value === "Most Popular" && allTipData !== "")
        {
            console.log("in most popular");

            let goodarray = [];

            let keys = [];
            let array = [];

            var obj = {};
            var a = [];

            allTipData.map((aTD, index) => {                        // adds likes numbers to array

                var opEla = document.getElementById(aTD.id + "option");
                // array = [...array, opEla.value];
                array.push(opEla.value);
                keys.push(index);
            })

            if (array.every(isZero))
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

            for (var key in obj)
            {
              if (obj.hasOwnProperty(key))
              {
                a.push(obj[key]);
              }
            }

            var start = a[0];                                           // gets start and end of array
            var end = a[a.length - 1];

            let index = [];                                             // array of tip indexes
            let sorted = [];                                            // the sorted like array

            for (var i = start; i >= end; i--)                          // loops through array and sorts it ordering from start to end
            {
              for (var j = 0; j < array.length; j++)
              {
                if (array[j] == i)
                {
                  sorted.push(array[j]);
                  index.push(j);
                }
              }
            }

            let newATD = [];

            for (var i = 0; i < index.length; i++)
            {
                allTipData.map((aTD, ix) => {
                    if (ix == index[i])
                    {
                        newATD.push(aTD);
                    }
                })
            }

            for (var i = 0; i < mappingAllTipData.length; i++)              // sets mapping all tips to sorted all tips
            {
                mappingAllTipData[i] = newATD[i];
            }

            goodarray.sort(testsort);
        }
        else if (orderSort.current.value === "Least Popular" && allTipData !== "")
        {
            console.log("in least popular");

            let goodarray = [];

            let keys = [];
            let array = [];

            var obj = {};
            var a = [];

            allTipData.map((aTD, index) => {
                var opEla = document.getElementById(aTD.id + "option");
                // array = [...array, opEla.value];
                array.push(opEla.value);
                keys.push(index);
            })

            if (array.every(isZero))
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

            for (var key in obj)
            {
              if (obj.hasOwnProperty(key))
              {
                a.push(obj[key]);
              }
            }

            var start = a[0];
            var end = a[a.length - 1];

            let index = [];
            let sorted = [];

            for (var i = start; i >= end; i--)
            {
              for (var j = 0; j < array.length; j++)
              {
                if (array[j] == i)
                {
                  sorted.push(array[j]);
                  index.push(j);
                }
              }
            }

            let newATD = [];

            for (var i = 0; i < index.length; i++)
            {
                allTipData.map((aTD, ix) => {
                    if (ix == index[i])
                    {
                        newATD.push(aTD);
                    }
                })
            }

            for (var i = 0; i < newATD.length; i++)
            {
                mappingAllTipData[i] = newATD[newATD.length - 1 - i];
            }

            goodarray.sort(testsort);
        }
        else                                        // will be original which is Oldest First
        {
            // allTipData.sort(custom_sort_old);
        }

        return allTipData ? (
            mappingAllTipData.map((allTipData, index) => {
            
            if(catSort.current.value !== "" && allTipData !== "")                       // if a category is selected
            {
                if (allTipData.tipCategory !== catSort.current.value)                   // if category is not selected category return hidden tip
                {
                    return (
                        <div className="hidden" width="0" height="0">
                            <AllTip loggedInUser={loggedInUser} allTipData={allTipData} />{/*order={order}/>         {/* returns like number and correct like/unlike button */}
                        </div>
                    );
                }
            }

            return (                                                             // returns tip
                <div className="tipBox">
                    <span className="box" key={allTipData.id}>
                        <div className="firstLine">
                            <span className="tipCategory"><p>{allTipData.tipCategory}</p></span>

                            <span className="postInfo">
                                <span className="tipAuthor">posted by: {allTipData.author.name}</span>
                                <span className="tipDateTime">
                                    {new Date(allTipData.createdAt).toLocaleDateString('en-gb', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}) }
                                </span>
                            </span>
                        </div>
                        <div className="secondLine">
                            <textarea className="userTipStringAll" readOnly>{allTipData.tipString}</textarea>
                            <span className="likes"><br/>
                                <span className="likeTip">
                                    <AllTip loggedInUser={loggedInUser} allTipData={allTipData} />{/*order={order}/>         {/* returns like number and correct like/unlike button */}
                                </span>
                            </span>
                        </div>
                    </span>
                </div>
            );
        })
        ) : (                           // if no tips
            <div><br/>
                <h3>No data yet</h3>
            </div>
        );
    }

    ///////////////
    const getAllData = () => {                                              // get all logged in user's tips
        const jwt = sessionStorage.getItem('jwt');

        axios({
            method: 'get',
            url: 'http://localhost:8080/tip/findByAuthor',
            params: {authorID: userdata.id},
            headers: {"Authorization" : `Bearer ${jwt}`}})                  // must be logged in
            .then((response) => {
                setData(response.data);

                //////////
            })
            .catch((error) => {
                console.log(error);
            });
        };

    const orderSort = useRef("Newest First");// had to put before useeffect         // default order is newest first
    useEffect(() => {
        checkLoggedIn();                    // check if user is logged in
        getAllData();                       // get logged in user's data

        ///////
        getAllTipData();                    // gets all tips

    }, [userdata, catSort]);

    const displayData = () => {                                                     // displays all logged in user's tips
        return data ? (
        data.map((data) => {
            // getLikes(data);//                                                       // gets tip's likes number
            var tC = data.id + "tC";                                                // category
            var tE = data.id + "tE";                                                // edit
            var tD = data.id + "tD";                                                // delete
            var tM = data.id + "tM";                                                // modify
            return (                                                // returns user's tip
                <div className="userTipBoxN">
                    <span className="userTipInfoN" key={data.id}>
                        <div className="firstLine">
                            <span className="tipCategory" id={tC}>{data.tipCategory}</span>
                            <span className="postInfo">
                                <span className="tipDateTime">
                                    {" "}posted - {new Date(data.createdAt).toLocaleDateString('en-gb', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}) }
                                    {" "}updated - {new Date(data.updatedAt).toLocaleDateString('en-gb', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}) }
                                </span>
                            </span>
                        </div>
                        <div className="secondLine">
                            <textarea className="userTipString" id={data.id} readOnly={ro}>{data.tipString}</textarea>
                            <span className="userLikes">
                                <span className="userTipLikes">
                                    <Likes tip={data}/>                                 {/* gets tip's number of likes */}
                                </span>
                            </span>
                            <div className="endSecondLine">
                                <div className="modifyTip" id={tM}> 
                                    <button className="editBtn" onClick={() => editTip(data.id)}>
                                        <img src={pencil} alt="editingButton" id={tE} width="25px" height="35px" /> 
                                        <span className="tooltiptext">Edit</span>
                                    </button>              
                                    <button className="editBtn" onClick={() => deleteTip(data.id)}>
                                        <img src={bin} alt="deletingButton" id={tD} width="25px" height="35px" />
                                        <span className="tooltiptext">Delete</span>
                                    </button>
                              </div>
                            </div>
                        </div>
                    </span>
                
                    <br /><p></p>

                </div>
            );
        })
        ) : (                                   // if user id not logged in
            <div>
                <br/>
                <h4>Want to post helpful tips for others? Create an account to submit your tips.</h4>
                <h4>If you already have an account Login to see your tips.</h4>
            </div>

        );
    }

    // function getLikes(tip)                                                          // gets the tip's likes from backend
    // {
    //     const jwt = sessionStorage.getItem('jwt');
    //     console.log(jwt, tip.id);

    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:8080/like/countByTipId',
    //         params: {tipId : tip.id},
    //         headers: { "Authorization" : `Bearer ${jwt}`}
    //     }).then(response=>{
    //         setLikeno(response.data.length);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }

    function editTip(tipID) {                                   // editing a tip
        const el = document.getElementById(tipID);                                          // gets tip string's element 
        ro = false;
        el.readOnly = false;// this works                                                   // allows tip's textarea to be editable

        const tC = document.getElementById(tipID + "tC");                                   // gets tip category's element

        var d = document.createElement('select');                                           // creates category select box
        d.className = 'tipFilterCategory';
        d.id = tipID + "select";
        d.innerHTML = tC.innerHTML;

        tC.parentNode.replaceChild(d, tC);                                                  // replaces tip's category with select box

        let opts = ["", "Home", "Car", "Transport"];
        for (var i = 0; i < opts.length; i++) {
            var option = document.createElement("option");
            option.value = opts[i];
            option.text = opts[i];
            d.appendChild(option);
        }
        //
        // const tE = document.getElementById(tipID + "tE");
        // const tD = document.getElementById(tipID + "tD");
        const tM = document.getElementById(tipID + "tM");                                   // gets tip's modify element

        var e = document.createElement('button');                                           // creates submit edit button
        e.textContent = "Submit";
        e.text = "Submit";
        e.className = "tipButton";
        e.id = tipID + "subBtn";
        e.onclick = () => eTip(tipID);                  // submit's edited tip

        tM.parentNode.replaceChild(e, tM);                                                  // replaces tip's modify element with submit edit button
    }

    function eTip(tipID)                                // handles edited tips
    {
      const tC = document.getElementById(tipID + "select");
      const tS = document.getElementById(tipID);

      if(validateForm2(tipID)){                                                             // if edited tip is valid put it to backend

            const jwt = sessionStorage.getItem('jwt');
            console.log(jwt);

            axios({
                method: 'put',
                url: 'http://localhost:8080/tip/' + tipID,
                data: {
                    tipCategory: tC.value,
                    tipString: tS.value,
                    author: {
                        id: userdata.id,
                        name: userdata.name,
                        email: userdata.email,
                        password: userdata.password,
                        dob: userdata.dob
                    }
                },
                headers: { "Authorization" : `Bearer ${jwt}`,
                "Access-Control-Allow-Origin": "http://localhost:8080"}
            }).then(response=>{
                console.log(response);
                if (response.status === 200){
                    alert("Tip updated.")
                    getAllData();//                                              // get all logged in user's tips
                    const spantC = document.createElement("span");                  // replaces select category with tip's category
                    spantC.id = tipID + "tC";
                    spantC.className = "tipCategory";
                    spantC.innerHTML = tC.value;
                    tC.parentNode.replaceChild(spantC, tC);

                    // tip String
                    tS.readOnly = true;                                             // makes tip's string uneditable

                    // modify tip
                    const oldtM = document.getElementById(tipID + "tM");            // puts modify tip back instead of submit button
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


                    const subBtn = document.getElementById(tipID + "subBtn");
                    subBtn.parentNode.replaceChild(tM, subBtn);

                }
            }).then(()=>{
                getAllData();// not updating the tipString for some reason
            })
            .catch(error=>{
                console.log(error);
            })
      }
    }

    function deleteTip(tipID) {                                             // deletes tip in backend
        const jwt = sessionStorage.getItem('jwt');
        console.log(jwt);

        axios.delete('http://localhost:8080/tip/' + tipID,
            {headers: { "Authorization" : `Bearer ${jwt}`,
            "Access-Control-Allow-Origin": "http://localhost:8080"},
            mode: 'cors'
        }).then(response=>{
            console.log(response);
            if (response.status === 200){
                alert("Tip deleted.")
            }
        }).then(()=>{
            tipCategory.current.value="";
            tipString.current.value="";
            author.current.value=100;

            getAllData();// not updating after
        })
        .catch(error=>{
            console.log(error);
        })
    }

    ///////////////////
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

    return (
        <section className="mainContent">
            <section>
                <h2>Energy Saving Tips</h2><br />
                <p>
                    We know not everyone can afford to switch to better renewable energy
                    yet, so here's some tips to help you out saving energy and money for
                    energy.
                </p>
            </section>

            <section>
                <div className="tabs">        {/* tabs fot tips page*/}
                    <span data-tab-value="#tab_1" onClick={tabSwitch}>Tips from Us</span>
                    <span data-tab-value="#tab_2" onClick={tabSwitch}>Tips from All</span>
                    <span data-tab-value="#tab_3" onClick={tabSwitch}>Tips from You</span>
                </div>
                <div className="tab-content">

                    {/* tab 1 */}
                    <div className="tabs_tab active" id="tab_1" data-tab-info>
                        <div className="tipLine">
                            <div className="tip">
                                <div className="beforeH">
                                    <span>
                                        <h4>Leaving the room?<br /><br /> Turn it off</h4>
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
                                        <strong>Not using it?<br /><br />Unplug it</strong>
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
                                        <strong>At 100%?<br /><br />Stop charging it</strong>
                                    </span>
                                </div>
                                <div className="afterH">
                                    Make sure you unplug when your devices reach full-charge
                                </div>
                            </div>
                            <div className="tip">
                                <div className="beforeH">
                                    <span>
                                        <strong>Use an air dryer<br /><br />Not a tumble dryer</strong>
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
                                        <strong>Shower don't Bathe<br /></strong>
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
                                        <strong>Use Kettles wisely<br /><br />Avoid overfilling</strong>
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
                        <p>Browse the helpful tips posted by your fellow users.</p><br />
                        <div className="tab2">
                            <div className="allTips">
                                <div id="aTsameLine">
                                    <span>
                                        Category:
                                        <select className="tipFilterCategory" ref={catSort} onChange={(e) => setCSort(e.target.value)}>
                                            <option value=""></option>
                                            <option id="homeOption" value="Home">Home</option>
                                            <option id="carOption" value="Car">Car</option>
                                            <option id="transportOption" value="Transport">Transport</option>
                                            {/* can add more category options */}
                                        </select>
                                    </span>
                                    <span>
                                        Order:
                                        <select id="tipFilterCategory" className="tipFilterCategory" ref={orderSort} >
                                            <option id="newest">Newest First</option>
                                            <option id="oldest">Oldest First</option>
                                            <option id="mostPop">Most Popular</option>
                                            <option id="leastPop">Least Popular</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="tipBoxes">

                                    {/* gets and displays all tips from backend database */}
                                    <div className="box">
                                        {displayAllTipData()}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* tab 3 */}
                    <div className="tabs_tab" id="tab_3" data-tab-info>
                        <span>You currently have </span><span>{data.length}</span><span> tips posted.</span>

                        {/* submit tips */}
                        <div className="submitTips">
                            <div>
                                <p>Do you have helpful tips for others?</p>
                                <div>
                                    <span>Category: </span>
                                    <select id="tipCategory" ref={tipCategory} required>
                                        <option value=""></option>
                                        <option id="homeOption" value="Home">Home</option>
                                        <option id="carOption" value="Car">Car</option>
                                        <option id="transportOption" value="Transport">Transport</option>
                                        {/* can add more category options */}
                                    </select>
                                </div>
                            </div>
                            <div id="textArea">
                                <textarea id="tA" placeholder="Enter your Tip here..." ref={tipString} required></textarea>
                            </div>
                            <div id="tipButtonDiv">
                                <button className="tipButton" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>

                        <div className="userTips"><br />
                            <p><strong>Your Tips:</strong></p>

                            {/* gets and displays all logged in user's tips from backend database */}
                            <div className="tbox">
                                <div className="lbox">
                                    {displayData()}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}