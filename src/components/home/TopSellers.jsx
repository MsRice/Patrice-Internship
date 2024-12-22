import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

const TopSellers = () => {

  const [topSellers , setTopSellers] = useState()
  const [loading , setLoading] = useState(true)

  async function getTopSellers() {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers')
    setTopSellers(data)
    setLoading(false)
  }

  useEffect(() =>{
    getTopSellers() 
  },[])
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {loading ? 
              <>
                 {new Array(12).fill(0).map((_, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                  <div className="lazy nft_coll_pp--loading "  alt="" ></div>
                  </div>
                  <div className="author_list_info">
                    <h6 className="nft_coll_info--sub-loading">Nicola Newton</h6>
                    <span>---- </span>
                  </div>
                </li>
              ))}
              </>
              :
              <>

              {topSellers?.map((element) => (
                <li key={element.id}>
                  <div className="author_list_pp">
                  <Link to={`/author/${element.authorId}`}>
                    <img
                      className="lazy pp-author"
                      src={element.authorImage}
                      alt=""
                      />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to={`/author/${element.authorId}`}>{element.authorName}</Link>
                  <span>{element.price} ETH</span>
                </div>
                </li>
              ))}

              </>
              }
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
