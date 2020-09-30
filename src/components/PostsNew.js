import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends React.Component {
  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'is-invalid' : '' }`;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input 
          type="text" 
          className={className} 
          { ...field.input }
        />
        <div className="invalid-feedback">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderTextAreaField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'is-invalid' : '' }`;

    return(
      <div className="form-group">
        <label>{field.label}</label>
        <textarea className={className} {...field.input}>        
        </textarea>
        <div className="invalid-feedback">
          {touched ? error : ''} 
        </div>      
      </div>
    );
  }

  onSubmit = (values) => {  
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title"
          name="title"
          component={this.renderTextField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderTextField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderTextAreaField}
        />
        <button className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }
  
  return errors;
}

export default reduxForm({ 
  form: 'PostsNewForm', 
  validate 
})(connect(null, { createPost })(PostsNew));