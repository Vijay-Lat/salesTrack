import React ,{FC,createElement}from 'react'

const Track:FC = () => {
    return (
        <div style={{marginTop:"300px"}}>
             {createElement('h1',{style:{color:"red"}},'data')}
            <div>
                Track
            </div>
        </div>
    )
}

export default Track
