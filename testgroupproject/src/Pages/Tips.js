import React from "react";
import "./Tips.css";

import lightbulb from "./TipsComponents/lightbulb.jpg";
import shower from "./TipsComponents/shower.jpg";
import kettle from "./TipsComponents/kettle.jpg";
import pencil from "./TipsComponents/pencil.jpg";
import bin from "./TipsComponents/delete bin.jpg";

export default function Tips() {
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

  // function increment()
  // {
  // var value = parseInt(document.getElementById('number').value, 10);
  // value = isNaN(value) ? 0 : value;
  // value++;
  // document.getElementById('number').value = value;

  //     const number = document.getElementById('number')
  //     //counter variables
  //     let counter1 = 0
  // function increment(){
  //         counter1 = counter1 + 1
  //         number.innerHTML = counter1
  //         // document.getElementById('number').value = counter1;
  //   }
  // }
  // var counterVal = 0;

  // function increment() {
  //     updateDisplay(++counterVal);
  // }

  // function updateDisplay(val) {
  //     document.getElementById("number").innerHTML = val;
  // }

  return (
    // <div><p>This is tips</p></div>

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
            <div className="allTips">
              {/* <p>box</p>
                            <p>gonna have a filter</p>
                            <p>then display tips underneath</p>
                            <br/> */}
              <div id="aTsameLine">
                <span>
                  Category:
                  <select id="tipFilterCategory">
                    <option></option>
                    <option id="homeOption">Home</option>
                    <option is="carOption">Car</option>
                  </select>
                </span>
                <span>
                  Order:
                  <select id="tipFilterCategory">
                    <option id="newest">Newest First</option>
                    <option id="oldest">Oldest First</option>
                    <option id="mostPop">Most Popular</option>
                    <option id="leastPop">Least Popular</option>
                  </select>
                </span>
                {/* <!-- proper name -> organise similar elements for css --> */}
                <span>
                  <button id="tipFilterButton">Filter</button>
                </span>
              </div>
              <div className="tipBoxes">
                {/* will get tips from database */}
                {/* <div className="tipBox">
                                    <span className="tipString">
                                        <p>This is a Tip.</p>
                                    </span>
                                    <span className="likes">
                                        <p>0 Likes</p>
                                    </span>
                                </div>
                                <div className="tipBox">
                                    <span className="tipString">
                                        <p>This is another Tip.</p>
                                    </span>
                                    <span className="likes">
                                        <p>-1 Likes</p>
                                    </span>
                                </div>
                                <div className="tipBox">
                                    <span className="tipString">
                                        <p>This is the best Tip!</p>
                                    </span>
                                    <span className="likes">
                                        <p>999 Likes</p>
                                    </span>
                                </div> */}

                <div className="tipBox">
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
                        {/* <div id="number" value="0">0</div> */}
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
                </div>

                <div className="tipBox">
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
                </div>
              </div>
            </div>
          </div>

          {/* tab 3 */}
          <div className="tabs_tab" id="tab_3" data-tab-info>
            <span>You currently have </span>
            <span>2</span>
            <span> tips posted.</span>

            {/* submit tips */}
            <div className="submitTips">
              <div>
                <p>Do you have helpful tips for others?</p>
                <span>Category: </span>
                <select id="tipCategory">
                  <option></option>
                  <option id="homeOption">Home</option>
                  <option is="carOption">Car</option>
                </select>
              </div>
              <div id="textArea">
                <textarea
                  id="tA"
                  placeholder="Enter your Tip here..."
                ></textarea>
              </div>
              <div id="tipButtonDiv">
                <button id="tipButton">Submit</button>
              </div>
            </div>

            <div className="userTips">
              <br />
              <p>
                <strong>Your Tips:</strong>
              </p>
              {/* <br/> */}

              {/* <div className="userTipBoxes">
                                <div className="userTipBox">
                                    <span className="userTipInfo">
                                        <div className="firstLine">
                                            <span className="tipCategory"><p>Car</p></span>
                                            <span className="postInfo">
                                                <span className="tipDateTime"> posted - 05/01/2023 15:25</span>
                                            </span>
                                        </div>
                                        <div className="secondLine">
                                            <span className="userTipString">
                                                <p>Never leave the engine running. Even if it is for only a couple minutes, it's better to turn it off.</p>
                                            </span>
                                            <span className="userLikes">
                                                <span className="userTipLikes">
                                                    <p>44 Likes</p>
                                                </span>    
                                            </span>
                                        </div>
                                    </span>
                                    <span className="modifyTip">
                                        <img src={pencil} alt="editingButton" id="edit" width="25px" height="35px"/>
                                        <img src={bin} alt="deletingButton" id="delete" width="25px" height="35px"/>
                                    </span>

                                    {/* need editing, deleting stuff 
                                </div>
                            </div> */}

              <div className="submitTipsN">
                {/* <div className="userTipBoxN"> */}
                <div>
                  {/* <p>Do you have helpful tips for others?</p> */}
                  {/* <span>Category: </span> */}
                  {/* <select id="tipCategoryN">
                                            <option></option>
                                            <option id="homeOption">Home</option>
                                            <option is="carOption">Car</option>
                                        </select> */}
                  {/* <span className="userTipInfo">
                                            <div className="firstLine">
                                                <span className="tipCategory"><p>Car</p></span>
                                                <span className="postInfo">
                                                    <span className="tipDateTime"> posted - 05/01/2023 15:25</span>
                                                </span>
                                            </div>
                                            <div className="secondLine">
                                                <span className="userTipString">
                                                    <p>Never leave the engine running. Even if it is for only a couple minutes, it's better to turn it off.</p>
                                                </span>
                                                <span className="userLikes">
                                                    <span className="userTipLikes">
                                                        <p>44 Likes</p>
                                                    </span>    
                                                </span>
                                            </div>
                                        </span>
                                        <span className="modifyTip">
                                            <img src={pencil} alt="editingButton" id="edit" width="25px" height="35px"/>
                                            <img src={bin} alt="deletingButton" id="delete" width="25px" height="35px"/>
                                        </span> */}

                  {/* <span className="info">
                                            {/* <p>testing</p> 
                                            <div className="fLine">
                                                {/* <p>t2</p> 
                                                <span className="tCategory">Car</span>
                                                <span className="tDateTime">posted - 05/01/2023 15:25</span>
                                            </div>
                                             <span><p>t3</p></span> */}
                  {/* <div className="sLine">
                                                <span className="tString">
                                                    <p>tip</p>
                                                </span>
                                                <span className="tLikes">
                                                    <p>4 Likes</p>
                                                </span>
                                            </div> 
                                        </span>
                                        <span className="modify">
                                            <img src={pencil} alt="editingButton" id="edit" width="25px" height="35px"/>
                                            <img src={bin} alt="deletingButton" id="delete" width="25px" height="35px"/>
                                        </span> */}

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
                                    </div> */}
                </div>

                {/* must fix css */}
                <div>
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

                    {/* need editing, deleting stuff */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <script type="text/javascript">
                    const tabs = document.querySelectorAll('[data-tab-value]')
                    const tabInfos = document.querySelectorAll('[data-tab-info]')

                    tabs.forEach( tab => {
                        tab.addEventListener('click', () => {
                            const target = document.querySelector(tab.dataset.tabValue);

                            tabInfos.forEach(tabInfo => {
                                tabInfo.classList.remove('active')
                            })
                            target.classList.add('active');
                        })
                    })
                </script> */}
      </section>
    </section>
  );
}
