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