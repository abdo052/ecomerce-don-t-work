import React from 'react'
import { Link } from 'react-router-dom';

// use on many component to show >>>  المزيد && التصنيفات <<<<

const SubTitle = ({title, btntitle,pathText}) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="btn-tile"> {title} </div>
      {btntitle ? (
        <Link to={`${pathText}`} style={{textDecoration: 'none'}}>
          <div className="shopping-now"> {btntitle} </div>
        </Link>
      ) : null}
    </div>
  );
}

export default SubTitle;