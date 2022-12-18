import React, { FC } from 'react'

const ReRender:FC<any> = ({render}) => {
    console.log(render)
    return (
        <div>
            {render}
        </div>
    )
}

export default ReRender
