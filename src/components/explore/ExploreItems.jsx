import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Expiration from "../home/Expiration";


const ExploreItems = () => {

  const [exploreItems , setExploreItems] = useState()
  const [loadint , setLoadInt] =useState(8)
  const [loading, setLoading] = useState(true)
  

  async function getExploreItems() {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/explore')
    setExploreItems(data)
    setLoading(false)
  }

  function updateLoadInt(){
    const temp = loadint + 4
    setLoadInt(temp)
  }

  async function filterExploreItems(){
    var selectElement = document.getElementById("filter-items");
    var selectedValue = selectElement.value;

    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${selectedValue}`)
    setExploreItems(data)
  }
  useEffect(() => {
    getExploreItems()
  }, []);


  return (
    <>
      <div>
        <select id="filter-items" onChange={filterExploreItems}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? 
      <>
        {new Array(8).fill(0).map((_, index) => (

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          <div className="nft__item ">
            <div className="author_list_pp">
              <div className="lazy nft_coll_pp--loading "  alt="" ></div>
              
            </div>
            <div className='de_countdown de_countdown--loading'>
              --:--:--
            </div>


            <div className="nft__item_wrap nft_wrap--loading">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

                <img
                  
                  className="lazy nft__item_preview"
                  alt=""
                />
            </div>
            <div className="nft__item_info">
                <h4 className="nft_coll_info--sub-loading">Polin</h4>
              <div className="nft_coll_info--sub-loading">5.09 ETH</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>--</span>
              </div>
            </div>
          </div>
          </div>
        ))} 
      
      </> : 
      
      <>
        {exploreItems?.map((element) => (
          <div
            key={element.id}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${element.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={element.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              {element.expiryDate &&
                <div className={`de_countdown countdown__${element.id}`}>
                  <Expiration element={element}/>
                </div>
                

              }

              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <Link to={`/item-details/${element.nftId}`}>
                  <img src={element.nftImage} className="lazy nft__item_preview" alt="" />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${element.nftId}`}>
                  <h4>{element.title}</h4>
                </Link>
                <div className="nft__item_price">{element.price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{element.likes}</span>
                </div>
              </div>
            </div>
          </div>
        )).slice(0 , loadint)}
      </>}
      {exploreItems?.length > loadint &&
      <div className="col-md-12 text-center">
        <Link to="" onClick={updateLoadInt} id="loadmore" className="btn-main lead">
          Load More
        </Link>
      </div>
      
      }
    </>
  );
};

export default ExploreItems;
