import React from 'react'

const Error = () => {
    const backHandler = ()=>{
        window.history.back()
    }
    return (
        <div>
           <h1>404 Not Found</h1> 
           <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default Error
