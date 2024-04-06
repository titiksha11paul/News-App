import React from 'react'

const Newsitem=(props)=>{//export class Newsitem extends Component {
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source}  </span>
          <img src={imageurl ? imageurl : "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} traget="_blank" className="btn btn-sm btn-dark">Read in details</a>
          </div>
        </div>
      </div>
    )
  }


export default Newsitem
