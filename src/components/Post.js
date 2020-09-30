import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;

      this.props.fetchPost(id);
    }   
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <button 
          onClick={this.onDeleteClick}
          className="btn btn-danger pull-xs-right"
        >Delete
        </button>
        <h3>{post.title}</h3>
        <h5>Categories: {post.categories}</h5>
        <p>{post.content}</p>
        <Link to="/" className="btn btn-secondary">Back To Index</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(Post);