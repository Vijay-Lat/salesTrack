import { useState, useEffect } from "react"
import axios from "axios"
import _ from "lodash"

const CommentsList = (props: any) => {
    // const [commentsArray, setcommentsArray] = useState([])
    // const getCommentsHandler = async () => {
    //     const res: any = await axios.post("http://localhost:4002/posts/" + props?.postId + "/comments")
    //     console.log(res.data[props?.postId], "commm")
    //     setcommentsArray(_.compact(res?.data[props?.postId]))
    // }
    // useEffect(() => {
    //     getCommentsHandler()
    // }, [])
    return <div>
        {props.commentsArray?.length > 0 && _.compact(props.commentsArray).map((com: any) =>com?.content && <li>{com?.content}</li>)}
    </div>
}

export default CommentsList