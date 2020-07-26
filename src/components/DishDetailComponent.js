import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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

  formatDate(dateString) {
    var date = new Date(dateString).toString();
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString([], options);
  }

  renderComments(dishComments) {
    if (dishComments == null) return <div></div>;
    else {
      const commentsSection = dishComments.map((comments) => {
        return (
          <div key={comments.id}>
            <ul class="list-unstyled">
              <li>{comments.comment}</li>
              <li>
                -- {comments.author}, {this.formatDate(comments.date)}
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
  render() {
    if (this.props.dish == null || this.props.dish.comments == null)
      return <div></div>;
    else {
      return (
        <div className="row">
          <div className="col-12 col-md-5 mt-5">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 mt-5">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    }
  }
}
export default DishDetail;
