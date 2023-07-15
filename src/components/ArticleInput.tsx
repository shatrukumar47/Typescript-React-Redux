import React, {useState, Dispatch} from 'react'
import {useDispatch} from "react-redux";
import { addArticle } from '../Redux/action';

const ArticleInput = () => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const dispatch: Dispatch<any> = useDispatch();

    const handleClick = ()=>{
        if(title && body){
            let newArticle = {
                id: Math.floor(Math.random() * 9) + 3 + new Date().getTime() ,
                title,
                body
            }
            dispatch(addArticle(newArticle));
        }
    }

  return (
    <div className='article-input'>
      <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
      <input type="text" placeholder='Body' value={body} onChange={(e)=> setBody(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default ArticleInput
