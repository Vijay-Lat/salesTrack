import React, { FC } from 'react'

const Error: FC = () => {
    type backHandlerFunction = () => void
    const backHandler: backHandlerFunction = () => {
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
