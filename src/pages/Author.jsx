import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";

const Author = () => {
  const { id } = useParams()  
  const [authorOutline , setAuthorOutline] = useState()
  const [followers , setFollowers] = useState(0)
  const [isDisabled , setDisable] = useState(false)
  const [loading ,setLoading] = useState(true)

  if(!isDisabled){
    document.body.classList.remove('unfollow-btn')
  }
  
  async function getAuthorOutline(){
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`)
    setAuthorOutline(data)
    console.log(authorOutline)
    setFollowers(data.followers)
    console.log(followers)
    console.log(loading)
    setLoading(false)
  }

  function follow(){
    const temp = followers + 1
    const followButton = document.querySelector('.follow-btn')
    followButton.innerHTML = 'Unfollow'
    setFollowers(temp)
    document.body.classList += " unfollow-btn"
    setDisable(true)
  }

  useEffect(() => {
    getAuthorOutline()
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        {loading ? 
        <>

        <section
          id="profile_banner"
          aria-label="section"
          className="loading--banner"
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar--loading">
                      <div className="profile__circle--loading"  alt="">C"mw"B</div>
                      <div className="profile_name--loading">
                        
                          <span className="profile-info--loading">
                            PenelopeBridgeton
                            </span>
                          <span className="profile-info--loading">@lady_whistleD</span>
                          <span className="profile-info--loading">
                            bdhlewufpnjbfejw;bfuewbjdbbcvjkw
                          </span>
                      
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">--- followers</div>
                      <div to="#"   className="follow-btn--loading">
                        Follow
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <div className="de_tab_content">
                    <div className="tab-1">
                      <div className="row">
                        {new Array(8).fill(0).map((_, index) => (
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                            <div className="nft__item">
                              <div className="author_list_pp">
                                <div className="lazy nft_coll_pp--loading "  alt="" ></div>
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
                                      
                                    />
                                  
                                </div>
                                <div className="nft__item_info">
                                  <h4 className="nft_coll_info--sub-loading">Polin</h4>
                                <div className="nft_coll_info--sub-loading">3.02 ETH</div>
                                <div className="nft__item_like">
                                  <i className="fa fa-heart"></i>
                                  <span>--</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        </>
        :
        <>
        
        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${authorOutline?.nftCollection[0].nftImage}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorOutline?.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorOutline?.authorName}
                          <span className="profile_username">@{authorOutline?.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {authorOutline?.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{followers} followers</div>
                      <Link to="#" onClick={!isDisabled && follow}   className="follow-btn">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems author={authorOutline} nftCollection={authorOutline?.nftCollection}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
        }
      </div>
    </div>
  );
};

export default Author;
