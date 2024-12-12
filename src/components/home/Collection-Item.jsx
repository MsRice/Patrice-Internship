import React from 'react';
import AuthorImage from "../../images/author_thumbnail.jpg";
import { Link } from "react-router-dom";

import nftImage from "../../images/nftImage.jpg";

const CollectionItem = ({element}) => {
    console.log(element)
    return (
       
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={element.id}>
            <div className="nft_coll">
            <div className="nft_wrap">
                <Link to="/item-details">
                <img src={element.nftImage} className="lazy img-fluid" alt="" />
                </Link>
            </div>
            <div className="nft_coll_pp">
                <Link to="/author">
                <img className="lazy pp-coll" src={element.AuthorImage} alt="" />
                </Link>
                <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
                <Link to="/explore">
                <h4>{element.title} </h4>
                </Link>
                <span>ERC-{element.code}</span>
            </div>
            </div>
      </div>
    ); 
}

export default CollectionItem;
