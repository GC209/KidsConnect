/**
 The component is news overview,  shows all the information of the news items.
 There is a button 'Create new Post'. When clicked, a user should be able to fill in a form.
*/

import { useEffect, useState } from "react";
import axios from "axios";

import NewsCard from "../../components/newsCard/NewsCard";
import { StyledLink, HorizontalSeparater } from '../../components/styledComponents/CommonStyledComponents';

interface ArticleType{
  id: number;
  title: string;
  author: string;
  content: string
}

const NewsOverview = () => {
  //state for artiles available in db
  const [articles, setArticles] = useState<ArticleType[]>([]);
  
  //logic to load artiles on initial render and set it to setArticles
  useEffect(() => {
    axios.get("http://localhost:3001/news/").then(res => {
      setArticles(() => res.data);
    })
  }, [])
  
  return (
    <div>
      <h3>Add New Article</h3>
      <HorizontalSeparater />
      <StyledLink to={`/`}>Home</StyledLink>
      <StyledLink to={`/createNews`}>Create new Post</StyledLink>
      
      <HorizontalSeparater />
      
      {
        articles && articles.map(article => <NewsCard key={article.id} article={article} />)
      }
    </div>
  )
}

export default NewsOverview;