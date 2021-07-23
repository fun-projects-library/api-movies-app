// Snippet=> rccp
import React, { Component } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";
import InlineError from "../InlineError";
import { connect } from "react-redux";
import { onNewMovieSubmit } from '../../actions/newMovieActions';
import { Redirect } from 'react-router-dom'

class newMoviePage extends Component {
  state = {
    title: "",
    cover: "",
    errors: {}
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
    if(Object.keys(errors).length === 0){
      this.props.onNewMovieSubmit(this.state)
      this.setState({redirect: true})
    }
  };

  validate = () => {
    const errMessage = {};
    if (!this.state.title) errMessage.title = "The title cannot be blank!";
    if (!this.state.cover) errMessage.cover = "The cover cannot be blank!";
    return errMessage;
  };
  render() {
    const { errors } = this.state;
    const errorField = (<Message negative>
      <Message.Header>
        We're sorry we can't apply that discount
      </Message.Header>
      <p>There is an error!</p>
      {/* <p>Details:{this.props.newMovieReducer.error.response.data}</p>
      <p>Status:{this.props.newMovieReducer.error.response.status}</p> */}
    </Message>)
    const movieForm = (
      <Form
      onSubmit={this.onSubmit}
      loading={this.props.newMovieReducer.fetching}
    >
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
      {
        this.props.newMovieReducer.error.response && errorField
      }
    </Form>
    )
    
    console.log(this.props.newMovieReducer)
    return (
      <div>
        <h2>New Movie Form</h2>
        {this.props.newMovieReducer.fetched && this.state.redirect ? <Redirect to="/movies"/>: movieForm}
      </div>
    );
  }
}

const mapStateToProps =({newMovieReducer})=>{
  console.log("newMovieReducer=> ", newMovieReducer)
  return {newMovieReducer}
}
//   const mapStateToProps =(state)=>{
//     console.log(state)
//   }
const mapDispatchToProps ={
  onNewMovieSubmit
}
export default connect(mapStateToProps, mapDispatchToProps)(newMoviePage);