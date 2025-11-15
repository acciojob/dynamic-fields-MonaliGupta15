
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[arr, setArr]= useState([
    {
      name : "",
      age : ""
    }
  ])
  console.log(arr)
  return (
    <div>
        <div>
          {arr.map((item, index) => {
            return(
              <div>
                <input value={item.name} onChange={(e) => {
                  let copy = [...arr]
                  copy[index].name = e.target.value
                  setArr(copy)
                }} placeholder="Name" name = "name"/>



                <input value={item.age} onChange={(e) => {
                  let copy = [...arr]
                  copy[index].age = e.target.value
                  setArr(copy)
                }} placeholder="Age" age="age"/>

                <button onClick={()=>{
                  let newArr = arr.filter((item,idx) => {
                    return idx != index
                  })
                  setArr(newArr)
                }}>Remove</button>
              </div>
            )
          })}
        </div>

        <button onClick={() =>{
          setArr([...arr, {name:"", age: ""}])
        }}>Add More..</button>
        <button onClick={() => {
          console.log(arr)
        }}>Submit</button>
    </div>
  )
}

export default App
