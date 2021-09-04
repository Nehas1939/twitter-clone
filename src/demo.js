import React, { useState } from 'react'
import Demo1 from './demo1'

function Demo() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const[data,setData]=useState([])
    
    const handleSubmit=(e)=> {
        e.preventDefault();  // 
       const valuedata = {id:new Date().getTime().toString(),title,desc};
        console.log(valuedata)
        setData ((data)=>{
            return [...data,valuedata]
        })
        setTitle("")
        setDesc("")
    }
    
    return (
      <div>
        <form className="formdata">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="Desc">Description</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        
        
<button className="btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
        </form>
        
           {data.map((elem) => {
            const { title, desc } = elem;

            return (
              <div key={elem.id}>
              <Demo1  
                title={title}
                desc={desc}
              />
              </div>
            )
           })}
           </div> 
        
    )
}

export default Demo
