import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CollectionItem from "./Collection-Item";
// import "slick-carousel/slick/slick-theme.css"
// import "slick-carousel/slick/slick.css"
// import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import { Link } from "react-router-dom";
import sqare from '../../images/square-xxl.png'



const HotCollections = () => {

  const [collection , setCollection] = useState()

  const rowRef = useRef(null)

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

 



  async function getHotCollections(){
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections')
    console.log(typeof(data))

    setCollection(data)
    setLoading(false)
       
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
            {loading ? 
            <>
            
        
          <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'> 
            <div className="nft_coll">
                <div className="nft_wrap nft_wrap--loading">
                </div>
                <div className="nft_coll_pp">
                    <div className="lazy nft_coll_pp--loading " src={sqare} alt=""></div>
                    <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info--loading">
                    <h4 className="nft_coll_info--sub-loading">Load... </h4>
                    <span className="nft_coll_info--sub-loading">ERC-</span>
                </div>
                </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'> 
            <div className="nft_coll">
                <div className="nft_wrap nft_wrap--loading">
                </div>
                <div className="nft_coll_pp">
                    <div className="lazy nft_coll_pp--loading " src={sqare} alt=""></div>
                    <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info--loading">
                    <h4 className="nft_coll_info--sub-loading">Load... </h4>
                    <span className="nft_coll_info--sub-loading">ERC-</span>
                </div>
                </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'> 
            <div className="nft_coll">
                <div className="nft_wrap nft_wrap--loading">
                </div>
                <div className="nft_coll_pp">
                    <div className="lazy nft_coll_pp--loading " src={sqare} alt=""></div>
                    <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info--loading">
                    <h4 className="nft_coll_info--sub-loading">Load... </h4>
                    <span className="nft_coll_info--sub-loading">ERC-</span>
                </div>
                </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'> 
            <div className="nft_coll">
                <div className="nft_wrap nft_wrap--loading">
                </div>
                <div className="nft_coll_pp">
                    <div className="lazy nft_coll_pp--loading " src={sqare} alt=""></div>
                    <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info--loading">
                    <h4 className="nft_coll_info--sub-loading">Load... </h4>
                    <span className="nft_coll_info--sub-loading">ERC-</span>
                </div>
                </div>
          </div>
            </>
            :
            
             <div settings className="keen-slider" ref={sliderRef}> 
        
              {collection?.map(element => 
              <div className='keen-slider__slide col-lg-3 col-md-6 col-sm-6 col-xs-12'> 
                {/* <CollectionItem key={element.id} element={element} />  */}
                <div className="nft_coll">
                    <div className="nft_wrap">
                        <Link to="/item-details">
                        <img src={element.nftImage} className="lazy img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className="nft_coll_pp">
                        <Link to="/author">
                        <img className="lazy pp-coll" src={element.authorImage} alt="" />
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
              )}
            </div>
            }

           
            
        </div>
      </div>
    </section>
  );
};

export default HotCollections;