import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import CollectionItem from "./Collection-Item";

const HotCollections = () => {

  const [collection , setCollection] = useState()


  async function getHotCollections(){
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections')
    console.log(typeof(data))

    setCollection(data)
    
    // if(data.length > 0){
    //   console.log(collection)
      
    //   const ntf_collection = data.map(ntf => ntf)
    //   console.log(ntf_collection)
    // }
    
  }
  
  console.log(collection)


 useEffect(() =>{
    getHotCollections()
  },[])
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          
    
          {collection?.map(element => 
            
            <CollectionItem key={element.id} element={element}/> 
          )}



        </div>
      </div>
    </section>
  );
};

export default HotCollections;