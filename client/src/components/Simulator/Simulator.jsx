import React, { useState, useEffect } from 'react'

import '../../utilities/my.css'

export default function Simulator() {
    const [targetStatue, setTargetStatue] = useState(false)
    const [targetPowerFailure, setTargetPwerFailure] = useState(false)
    const [moveStatue, setMovestatue] = useState(false)
    const [hitCounter, setHitCounter] = useState(0)
    // const [postionArray, setPostionarray] = useState([
    //     { id: 0, name: "postion One " },
    //     { id: 1, name: "postion Two" },
    //     { id: 2, name: " postion Three" }

    // ])
    const postionArray = [
        { id: 0, name: "postion One " },
        { id: 1, name: "postion Two" },
        { id: 2, name: " postion Three" }]
    const [currentPos, setCurrentPos] = useState("");
    const [targetGoal, setTargetGoal] = useState("");


    // change status to up
    const changeToUp = () => {

        setMovestatue(true)
        setTimeout(() => {
            console.log('This will run after 4 second!')
            setTargetStatue(true);
            setMovestatue(false)
        }, 4000);
        console.log('return hit statue!')

    };

    // change status to Down
    const changeToDown = async () => {
        try {

            setMovestatue(true)
            setTimeout(() => {
                console.log('This will run after 4 second!')
                setTargetStatue(false);
                setMovestatue(false)
                console.log("hit it");
                setHitCounter(0);
                alert("reset hit no")
            }, 4000);

        } catch (error) {
            console.log(error)
        }
    };

    // Hit function
    const hitCounterFunction = async () => {
        try {
            setMovestatue(true)
            setTimeout(() => {
                setMovestatue(false)
                if (targetGoal == currentPos) {
                    setHitCounter(hitCounter + 1);
                    console.log("hit it");
                    alert("Done")
                }
                else {
                    alert(" Wrong Targer")
                }

            }, 4000);


        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="simWrapper">
<h1 className="title">simple simulator </h1>

            {!targetStatue ? <>
                {!moveStatue ? <>
                    <label htmlFor="">Select Target Postion</label>
                    <select className="Btn" onChange={(e) => setCurrentPos(e.target.value)}>
                        {postionArray.map((item) => (
                            <option key={item.id}  >{item.name} </option>
                        ))}
                    </select>


                    <label htmlFor="">Change to up statue</label>
                    <button className="Btn" onClick={() => changeToUp()}> UP</button>

                </> : <>
                <label htmlFor="">Change to up statue</label>
                    <button  disabled> UP</button>
                    <label htmlFor="">Hit the The target </label> 
                    <button  disabled> Hit </button>


                </>}

                <h1>Target is Down  </h1>

            </> : <>
                {!moveStatue ? <>
                    <div>
                        <label htmlFor="">Select Target Postion</label>
                        <select className="Btn" onChange={(e) => setCurrentPos(e.target.value)}>
                            {postionArray.map((item) => (
                                <option key={item.id}  >{item.name} </option>
                            ))}
                        </select>
                        <label htmlFor="">Change to Down </label>
                        <button className="Btn" onClick={() => changeToDown()} > Down</button>

                    </div>

                    <div>
                        <label htmlFor="">Select goal Postion</label>
                        <select className="Btn" onChange={(e) => setTargetGoal(e.target.value)}>
                            {postionArray.map((item) => (
                                <option key={item.id}  >{item.name} </option>
                            ))}
                        </select>
                        <label htmlFor="">Hit the The target </label> 
                        <button className="Btn" onClick={() => hitCounterFunction()}  > Hitt</button>
                    </div>

                </> : <>
                   <label htmlFor="">Change to Down </label> 
                    <button  disabled> Down</button>
                    <label htmlFor="">Hit the The target </label> 
                    <button  disabled> hhit</button>
                </>}

                <div className="dataSim">

                <h1>Target is Up </h1>

<label htmlFor=""> Hit counter </label><p>{hitCounter}</p>
                </div>
               
            </>

            }

        </div>
    )
}
