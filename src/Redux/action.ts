import { DispatchType, dataType } from "../constraints/type";
import { ADD_ARTICLE, DELETE_ARTICLE } from "./actionTypes";


export const addArticle = (newArticle: dataType)=> (dispatch : DispatchType)=>{
    dispatch({type: ADD_ARTICLE, payload: newArticle})
}

export const deleteArticle = (article: dataType)=> (dispatch : DispatchType)=>{
    console.log(article)
    dispatch({type: DELETE_ARTICLE, payload: article})
}