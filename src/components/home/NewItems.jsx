import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Expiration from "./Expiration";
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
 


const NewItems = () => {


  const [newItems ,setNewItems] = useState()
  
  async function getNewItems(){
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems')
    setNewItems(data)

    setLoading(false)


  }

 useEffect(() =>{
    getNewItems()
    
  },[])

    const [currentSlide, setCurrentSlide] = useState(0)
  
    const [loading, setLoading] = useState(true)
    const [sliderRef ,instanceRef] = useKeenSlider(
      {
        loop: true,
        mode: 'free',
        initial: 0,
        slides: {
          perView:'auto',
        },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel)
        },
      }
      
    )
  
 

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading ? 
          
            <>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
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
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
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
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
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
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
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
             
            
            </>
          :
          
          <div settings className="keen-slider" ref={sliderRef}> 

          {newItems?.map((element) => (
            <div className="keen-slider__slide col-lg-3 col-md-6 col-sm-6 col-xs-12" key={element.id}>
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${element.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Creator: Monica Lucas"
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
                  <img
                    src={element.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
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

          ))}
          </div>
          }
        </div>
      </div>
    </section>
  );
};

export default NewItems;
