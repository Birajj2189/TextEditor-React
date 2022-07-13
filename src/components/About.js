import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="container my-5" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <div className="card " style={{backgroundColor : props.mode==='dark'?'grey':'white',width: '18rem',padding:'1rem'}}>
          <img src="../build/dp.jpg" className="card-img-top" alt=""/>
          <div className="card-body">
               <h5 className="card-title">Biraj Mahanta</h5>
               <p className="card-text">B.tech (CSE) 2nd year <br/>Intermediate web developer</p>
          </div>
     </div>
    </div>
    </>
  )
}
