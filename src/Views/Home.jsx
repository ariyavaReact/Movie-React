import React, { Fragment, useEffect, useState } from "react";
import InnerHeader from "../component/InnerHeader";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import main from "../style/1.jpg.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [respData, setRespData] = useState([]);
  const [page, setPage] =useState(1);
  
  const [pagination, setPagination] = useState('')
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";
  const url =   
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fd08f0fb15d8fb74d0f4e03096357f4c";
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.results, "resp");
      setRespData(response.data.results);
      setPagination(response.data)
    });
  }, []);
 console.log(pagination && pagination.total_pages ,"pagination")
  const handleView=(id)=>{
    navigate(`/data/${id}`)
  }
  return (
    <Fragment>
      <InnerHeader />

      <main className="home-wrapper">
        <div className="banner-bg">
          <img src={main} />
        </div>
        <div className="container">
          <div className="banner">
            <h6>Welcome to Our movie site</h6>
            <h1>
              Our special <span>Movies</span>{" "}
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industrioy. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown.
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>
      </main>

      <section className="py-5">
        <div className="container">
          <div className="card-wrapper">


            <div className="row">
              {respData && respData.map((m) => (
                <div className="col-lg-3  py-2 my-2">
                  <div className="movie">
                    <div className="thumb">
                      <img src={baseImgUrl + m.poster_path} />
                    </div>
                    <div className="details">
                      <div>
                        <h6>{m.original_title}</h6>
                        <div>
                          <StarRatings
                            rating={m.vote_average}
                            starDimension="26px"
                            starSpacing="1px"
                            starRatedColor="gold"
                          />
                        </div>
                      </div>
                      <div className="play-bbt">
                        <button onClick={()=>handleView(m.id)}>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 43.5L42 30L24 16.5V43.5ZM30 0C13.44 0 0 13.44 0 30C0 46.56 13.44 60 30 60C46.56 60 60 46.56 60 30C60 13.44 46.56 0 30 0ZM30 54C16.77 54 6 43.23 6 30C6 16.77 16.77 6 30 6C43.23 6 54 16.77 54 30C54 43.23 43.23 54 30 54Z"
                              fill="#1DBDBD"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            <div className="pagination">
              <button>
                {/*  */}
                Previous
              </button>
              <p className="active">1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>100</p>
              <p>101</p>
              <p>102</p>
              <p>103</p>
              <p>104</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>37501</p>
            
              <button>
                next
                {/*  */}
              </button>
            </div>
          </div>
        </div>
      </section>
     
    </Fragment>
  );
}
export default Home;
