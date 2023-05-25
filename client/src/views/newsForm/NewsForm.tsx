/*This form on submit POST a news item, that is immediately visible in on the overview.
The form is made using react-hook-form
*/

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StyledLink, HorizontalSeparater } from '../../App.styles';
import './styles.css';

export default function NewsForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  /*Logic to post the form details to the db.json*/
  const submitData = (data) => {
    axios.post('http://localhost:3001/news/', data)
  .then(function (response) {
    console.log(response);
     navigate('/news');
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  return (
    <>
      <h3>Create news article</h3>
      <HorizontalSeparater />
      <StyledLink to={`/`}>Home</StyledLink>
      <StyledLink to={`/news`}>News Overview</StyledLink>
      <HorizontalSeparater />
      
      <div className="form-container">
        <form onSubmit={handleSubmit((data) => submitData(data))}>
          <input {...register("title")} placeholder="Title" />
          <input {...register("author")} placeholder="Author" />
          <textarea {...register("content")} placeholder="Content" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}