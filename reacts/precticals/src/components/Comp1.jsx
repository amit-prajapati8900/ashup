import './Esk.css';
import { useState } from 'react';

export default function Comp1({ data1,title,des,feature,price,oldprice}) {
  // console.log(object);
  let [val,setval] = useState("");
 
  function handel(){
    setval(
      <div className='abc'>

      </div>
    )
}
  return (
    <>
    <div className='product1'>
        <h>{title}</h>
        <p>{des}</p>  
        <p>{feature}</p>
        <div> 
          {data1 && data1.map((el, index) => {
            return (
              <div key={index}>
                <span> name:{el.name} </span><br />
                <span>class:{el.class} </span><br />
                <span>age:{el.age}</span>
              </div>
            )
          })}
        </div>
        <p1>{price}&nbsp;{oldprice}</p1>
    </div>
    <div>
      <button onClick={handel}>clickme</button>
      <p1>this is:{val}</p1>
    </div>
    </>
  )
}
