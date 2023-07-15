import {Dispatch} from 'react'
import { dataType } from '../constraints/type'
import {useDispatch} from "react-redux";

interface ArticleProps extends dataType{
    deleteArticle: (article: dataType)=> void 
}

const Article = ({id, title, body, deleteArticle}: ArticleProps) => {
    const dispatch : Dispatch<any> = useDispatch();
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={()=>{
        dispatch(deleteArticle({id,title,body}))
      }}>Delete</button>
    </div>
  )
}

export default Article
