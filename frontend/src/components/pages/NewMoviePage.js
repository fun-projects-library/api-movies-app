// Snippet=> rccp
import React, { Component } from "react";
import { Button, Form, Image } from "semantic-ui-react";
import InlineError from "../InlineError";
import { connect } from "react-redux";

class newMoviePage extends Component {
  state = {
    title: "",
    cover: "",
    errors: {},
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log("State=>",this.state)
  };

  onSubmit = () => {
    //console.log("You have submitted the form...")
    const errors = this.validate();
    this.setState({ errors });
    console.log(errors);
  };

  validate = () => {
    const errMessage = {};
    if (!this.state.title) errMessage.title = "The title cannot be blank!";
    if (!this.state.cover) errMessage.cover = "The cover cannot be blank!";
    return errMessage;
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <h2>New Movie Form</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.title}>
            <label>Title</label>
            <input
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title..."
            />
          </Form.Field>
          {errors.title && <InlineError message={errors.title} />}
          <Form.Field error={!!errors.cover}>
            <label>Cover Image URL</label>
            <input
              id="cover"
              name="cover"
              value={this.state.cover}
              onChange={this.handleChange}
              placeholder="Cover Image URL.."
            />
          </Form.Field>
          {errors.cover && <InlineError message={errors.cover} />}
          <Form.Field>
            <Image src={this.state.cover} size="small" />
          </Form.Field>
          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps =({newMovieReducer})=>{
    console.log(newMovieReducer)
  }
//   const mapStateToProps =(state)=>{
//     console.log(state)
//   }
const mapDispatchToProps ={}
export default connect(mapStateToProps, mapDispatchToProps)(newMoviePage);