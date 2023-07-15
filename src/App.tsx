import './App.css';
import {useSelector} from "react-redux";
import { dataType, stateType } from './constraints/type';
import Article from './components/Article';
import { deleteArticle } from './Redux/action';
import ArticleInput from './components/ArticleInput';

function App() {
  const data = useSelector((store: stateType)=> store.data);
  
 
  console.log(data)


  return (
    <div className="App">
      <h1>My Articles</h1>
      <ArticleInput />
      <div className='article-list'>
          {
            data?.map((item)=>{
              return <Article key={item.id} {...item} deleteArticle={deleteArticle} />
            })
          }
      </div>
    </div>
  );
}

export default App;
