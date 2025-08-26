import React,{useState} from 'react'

export default function ModeDark() {
    const [myStyle,setStyle]= useState({
        color:'black',
        backgroundColor:'white'
    })

    const toggleStyle=()=>{
        if (myStyle.color==='white') {
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
            
        }
        else{
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
        }
    }
  return (
    <>
    <div className="container" style={myStyle}>
        <p>Hello</p>
    </div>
    <div className='container'>
        <button onClick={toggleStyle} className='btn btn-primary'>Enable Dark Mode</button>
    </div>
    
    </>
  )
}
