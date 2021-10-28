import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Sidebar from './Sidebar';

const NewsForm = ({ articleData }) => {
  console.log(articleData)
  return (
    <Card className="text-center">
      <Card.Header>{articleData.title}</Card.Header>
      <Card.Body>
        <Card.Img src={articleData.urlToImage} variant="top" />
        <Card.Title>{articleData.author}</Card.Title>
        <Card.Text>
          {articleData.description}
        </Card.Text>
        <Button variant="primary"><a href={articleData.url}>Click hereeeeeeeee</a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">{articleData.publishedAt}</Card.Footer>
    </Card>
  );
};

const MainPage = ({ data, category }) => {
  let articles = data.articles;
  return (
    <div className="container">
      <h1>Headlines of {category} category</h1>
      <div>
        {
          articles && articles.map((e, index) => <NewsForm key={index} articleData={e} />)
        }
      </div>
    </div>
  );
};


export default MainPage