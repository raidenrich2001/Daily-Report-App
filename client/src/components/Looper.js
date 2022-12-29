import React from "react"
export default function Looper(props){
    let looperarray = []
    let minuss = 12 - props.i
      for(let j=1;j< minuss;j++)
      {
        looperarray.push(j)
      }
      return(
        looperarray.map((ind)=>
        <tr>
         { console.log(ind)}
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
        </tr>
        )
      )
    
    }