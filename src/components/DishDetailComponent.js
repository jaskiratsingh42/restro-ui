import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

function RenderDish(dish) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function formatDate(dateString) {
  var date = new Date(dateString).toString();
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString([], options);
}

function RenderComments(dishComments) {
  if (dishComments == null) return <div></div>;
  else {
    const commentsSection = dishComments.map((comments) => {
      return (
        <div key={comments.id}>
          <ul class="list-unstyled">
            <li>{comments.comment}</li>
            <li>
              -- {comments.author}, {formatDate(comments.date)}
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        {commentsSection}
      </div>
    );
  }
}
const DishDetail = (props) => {
  if (props.dish == null || props.dish.comments == null) return <div></div>;
  else {
    return (
      <div className="row">
        <div className="col-12 col-md-5 mt-5">{RenderDish(props.dish)}</div>
        <div className="col-12 col-md-5 mt-5">
          {RenderComments(props.dish.comments)}
        </div>
      </div>
    );
  }
};

export default DishDetail;
