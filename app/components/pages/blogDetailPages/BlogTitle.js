import React from "react";

const BlogTitle = (props) => {
  return (
    <div className='blog-title'>
      <ul className='post-detail'>
        <li>{props.title}</li>

        <li>Posted By : {props.postedBy}</li>
        <li>
          <i className='fa fa-heart me-2'></i>{props.likes} Hits
        </li>
        <li>
          <i className='fa fa-comments me-2'></i>20 Comment(s)
        </li>
      </ul>
      <h3>{ props.title }</h3>
    </div>
  );
};

export default BlogTitle;
