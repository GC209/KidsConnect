/*
Card to show the news information of the news item.
MUI component is used for the cards here
As a props it receives an object(article) containing title, author and content of the article
*/

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function NewsCard({article}) {
  return (
    <>
      <Card sx={{ maxWidth: 900 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Author : {article.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br />
    </>  
  );
}