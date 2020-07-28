import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
  if (comments == null) return <div></div>;
  else {
    const commentsSection = comments.map((comments) => {
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
  if (props.dish == null) return <div></div>;
  else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            {/* {props.comments} */}
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  }
};
export default DishDetail;
