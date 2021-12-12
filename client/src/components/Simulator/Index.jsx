import React, { useState, useEffect } from 'react'
import axios from 'axios';

import '../../utilities/my.css'



export default function Index() {
    const [targetStatue, setTargetStatue] = useState(false)
    const [targetPowerFailure, setTargetPwerFailure] = useState(false)
    const [moveStatue, setMovestatue] = useState(false)
    const [hitCounter, setHitCounter] = useState(0)
    const [postionArray, setPostionarray] = useState([
        {id:0,name:"nameone"},
        {id:1,name:"name/Two"},
        {id:2,name:"nameThree"}
    
    ])
    const[currentPos,setCurrentPos]=useState("");
    const[targetGoal,setTargetGoal]=useState("");





    const changeToUp =  () => {
   
        
        setMovestatue(true)
    
              setTimeout(() => {
                console.log('This will run after 4 second!')
                setTargetStatue(true);
                setMovestatue(false)
              }, 4000);
              console.log('return hit statue!')
            

          
      
    
      
    };

    
    const changeToDown = async () => {
        try {
            
        
            setMovestatue(true)
            setTimeout(() => {
                console.log('This will run after 4 second!')
                setTargetStatue(false);
                setMovestatue(false)
                console.log("hit it");
                setHitCounter(0);
                alert( "reset hit no")
              }, 4000);
            
             

        
    
        } catch (error) {
            console.log(error)
        }
    };

    
    
    const moveFunction = async () => {
        try {
            
        setMovestatue(true)
            console.log('Moving')
            setTimeout(() => {
               
                // setMove(true);
                setMovestatue(false)
                console.log('Moved')
               
              }, 4000);
           
             
         
        
    
        } catch (error) {
            console.log(error)
        }
    };


    const hitCounterFunction = async () => {
        try {
            
            setMovestatue(true)
           
            setTimeout(() => {
                setMovestatue(false)
                if(targetGoal == currentPos){
                    setHitCounter(hitCounter+1);
                    console.log("hit it");
                    alert( "Done")
                }
                else {
                    alert( " Wrong Targer") 
                }
            
              }, 4000);
           
         
         
        
    
        } catch (error) {
            console.log(error)
        }
    };






    return (
        <div>
            <div>
            <h1>Simulator </h1>

            {!targetStatue ?<>
            




            {/* <button  onClick={() => changeToUp()}> UP</button>
<button onClick={() => moveFunction()  } > move</button> */}

{!moveStatue ?<> 
    <label htmlFor="">Select Target Postion</label>     
            <select  className="Btn" onChange={(e) => setCurrentPos(e.target.value)}>
{postionArray.map((item) => (
 <option  key={item.id}  >{item.name} </option>
    ))}
</select>
<button  className="Btn" onClick={() => changeToUp()}> UP</button>
<button  className="Btn"   onClick={() => setTargetPwerFailure(true)} > Down the sytem</button>

</>:<>
<button className="Btn"   disabled> UP</button>
<button  className="Btn"  disabled> hhit</button>


</> }
{/* {!moveStatue ?<> <button onClick={() => moveFunction()  } > move</button></>:<><button disabled> Mpve</button></> }
{!moveStatue ?<> <button> Hit</button></>:<><button disabled> Hit</button></> } */}




            <h1>target is false  </h1> 
            </>:<>


            {!moveStatue ?<> 
            <div>
          <label htmlFor="">Select Target Postion</label>     
            <select  className="Btn"  onChange={(e) => setCurrentPos(e.target.value)}>
{postionArray.map((item) => (
 <option  key={item.id}  >{item.name} </option>
    ))}
</select>
               
<button  className="Btn"   onClick={() => changeToDown()} > Down</button>
<button   className="Btn"  onClick={() => setTargetPwerFailure(true)} > Down the sytem</button>

</div>



<div>
<label htmlFor="">Select goal Postion</label> 
<select  className="Btn"  onChange={(e) => setTargetGoal(e.target.value)}>
{postionArray.map((item) => (
 <option key={item.id}  >{item.name} </option>
    ))}
</select>
<button   className="Btn"  onClick={() => hitCounterFunction()}  > Hitt</button>
</div>


</>:<>
<button  className="Btn"  disabled> Down</button>

<button className="Btn"  disabled> hhit</button>


</> }
            {/* <button  onClick={() => changeToDown()} > Down</button>
            <button> move</button>
            <button   onClick={() => hitCounterFunction()}  > Hitt</button> */}
            {/* {!hitStatue ?<> <button> Hit</button></>:<><button disabled> Hit</button></> } */}
            <h1>target is true</h1>
      
<p>{hitCounter}</p>
            </>

            }
            

</div>
 

         
        


</div>
    )
}
