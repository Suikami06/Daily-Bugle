import React, { } from "react";

const NewsItem =(props)=> {
    
  
     let {title, description, imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
                <div className="card" >
                  <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
                    <span className=" badge rounded-pill bg-danger" >{source}</span>
                  </div>
                
                    <img src={!imageUrl?"https://images.hindustantimes.com/auto/img/2022/01/07/600x338/2020-01-11T070253Z_1_LYNXNPEG0A06E_RTROPTP_4_BELGIUM-CAR_1578977810523_1641556710596.JPG":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
           
    );
  }


export default NewsItem;
