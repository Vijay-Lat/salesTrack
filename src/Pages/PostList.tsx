import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentsList from './CommentsList'


const PostList = () => {
    const [key, setKey] = useState<any>([])
    const [comments, setComments] = useState<string>('')
    const [commentsArray, setcommentsArray] = useState<any>([])


    useEffect(() => {
        const getPostHanlder = async () => {
            const res = await axios.get("http://localhost:4003/posts", {})
            const post = await res?.data
            console.log(res, "get")
            const ey = Object.keys(post)
            console.log(Object.values(post), "obj")
            const com:any = Object.values(post).map((com:any)=>com.comments)
            console.log(com,"commmmm")
            setcommentsArray(com)
            setKey(Object.values(post))
            console.log(ey, "key")
        }
        getPostHanlder()
    }, [])
    const postCommentsHandler = async (id: any) => {
        const res = await axios.post("http://localhost:4002/posts/" + id + "/comments", { content: comments })
        console.log(res,"res")
        setComments('')
    }
   
    return (
        <div>
            {key?.length > 0 && key.map((title: any) => <div className='card' key={title.id}>

                <div className='card-body'>{title?.title}</div>
                <h2>Add Comments</h2>
                <input value={comments} className='form-control w-auto' onChange={e => setComments(e.target.value)} />

                <button onClick={() => postCommentsHandler(title?.id)} className='btn btn-primary'>Submit</button>
                <CommentsList postId={title?.id} commentsArray={title.comments} />
            </div>)}
        </div>
    )
}

export default PostList
