import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();



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
    setCollection(data)
    setLoading(false)
       
  }
  

 useEffect(() =>{
    getHotCollections()
  },[])

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
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
                    <div className="lazy nft_coll_pp--loading " alt=""></div>
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
                    <div className="lazy nft_coll_pp--loading " alt=""></div>
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
                    <div className="lazy nft_coll_pp--loading " alt=""></div>
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
                    <div className="lazy nft_coll_pp--loading " alt=""></div>
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
              <div className='keen-slider__slide col-lg-3 col-md-6 col-sm-6 col-xs-12' key={element.id}> 
                <div className="nft_coll">
                    <div className="nft_wrap">
                        <Link to={`/item-details/${element.nftId}`}>
                        <img src={element.nftImage} className="lazy img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className="nft_coll_pp">
                        <Link to={`/author/${element.authorId}`}>
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