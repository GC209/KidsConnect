import { useEffect, useState } from "react";
import axios from "axios";

import NewsCard from "../../customMUIElements/newsCard/NewsCard";
import { StyledLink, HorizontalSeparater } from '../../App.styles';

interface ArticleType{
  id: number;
  title: string;
  author: string;
  content: string
}

const NewsOverview = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/news/").then(res => {
      setArticles(() => res.data);
    })
    console.log(articles);
  },[])
  return (
    <div>
      <h3>Add New Article</h3>
      <HorizontalSeparater />
      <StyledLink to={`/`}>Home</StyledLink>
      <StyledLink to={`/createNews`}>Create new Article</StyledLink>
      
      <HorizontalSeparater />
      
      {
        articles && articles.map(article => <NewsCard key={article.id} article={article} />)
      }
    </div>
  )
}

export default NewsOverview;