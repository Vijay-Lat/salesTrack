import { Button } from '@mui/material'
import axios from 'axios'
import React, { FC, FormEvent, FormEventHandler, useEffect, useState } from 'react'
import PostList from './PostList'
import { useNavigate } from 'react-router-dom'
const CreatePost:FC = () => {
    const [text, setText] = useState<string>('')
    const [posts, setPosts] = useState<any>({})
    const [comments, setComments] = useState<string>('')
    const [key, setKey] = useState<any>([])
    const [imgURL, setImgURL] = useState<any>('')
    const navigate = useNavigate()
    const textSubmitHandler: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:4000/post", { title: text })
        console.log(response)
        setText('')
    }
    const getPostHanlder = async () => {
        const res = await axios.get("http://localhost:4000/post", {})
        const post = await res?.data
        console.log(res, "get")
        const ey = Object.keys(post)
        console.log(Object.values(post), "obj")
        setKey(Object.values(post))
        setPosts(post)
        console.log(ey, "key")
    }
    console.log(key?.length)
    const postCommentsHandler = async (id: any) => {
        const res = await axios.post("http://localhost:4002/posts/" + id + "/comments", { content: comments })
        console.log(res)
        setComments('')
    }

    const CommentsList = (props: any) => {
        const [commentsArray, setcommentsArray] = useState([])
       const  getCommentsHandler = async() => {
            const res: any = await axios.post("http://localhost:4002/posts/" + props?.postId + "/comments")
            console.log(res.data[props?.postId],"commm")
            setcommentsArray(res?.data[props?.postId])
        }
        useEffect(() => {
            if(comments?.length>5) getCommentsHandler()
            getPostHanlder()
        }, [])
        return <div>
            {commentsArray?.length > 0 && commentsArray.map((com: any) => <li>{com?.content}</li>)}
        </div>
    }
    const uploadImageHandler = (e:any) => {
          const imageReader:any = new FileReader();
          imageReader.readAsDataURL(e.target.files[0]);
          imageReader.onload = () => {
            setImgURL(imageReader.result);
          console.log(imageReader.result,"imageReader.result")
          localStorage.setItem("img",imageReader.result)}
      };
      console.log(imgURL, "imgURL");

    return (
        <div className='container '>
            <form className='form-group ' onSubmit={textSubmitHandler}>
                <label className='h1' htmlFor="">Create a Post</label>
                <input
                    className='form-control w-50 mt-3 mb-3'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className='btn' type='submit'>Submit</button>
                {/* <Button className='ml-3 btn btn-primary' onClick={getPostHanlder}>
                    Get Post
                </Button> */}
            </form>
            <span className='h3'>Posts</span>
           <PostList/>
           <input type='file' onChange={uploadImageHandler} />
           <img src={imgURL} alt="" />
           <Button onClick={()=>navigate('/dashboard')}>
            Move
           </Button>
        </div>
    )
}

export default CreatePost
