import React,{useEffect,useState} from 'react'
import axios from  'axios'
import InnerHeader from '../component/InnerHeader';
import main from "../style/1.jpg.png";
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

function Data() {
  const {id} = useParams();
  const [respData, setRespData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  
  const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=fd08f0fb15d8fb74d0f4e03096357f4c&language=en-US`
  const videourl =   
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fd08f0fb15d8fb74d0f4e03096357f4c`;

    useEffect(() => {
      axios.get(videourl).then((response) => {
        setVideoData(response.data.results[0])
        console.log(response.data.results.length > 0, "256565");
        if(response.data.results.length > 0){
          var  embed=[];
          response.results.foreach(video => {
            let {name, key, site} = video
            if (site == 'youtube'){
              embed.push(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
              console.log(embed.join(''),"666")
            }
          })
        }
      });
      axios.get(detailsUrl).then((response)=>{
        console.log(response,"resp")
        setRespData(response.data)
      })
    }, []);

  return (
    <div>
        <InnerHeader/>
         <section className="details-wrapper py-5 container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading">
              <h1>{respData.original_title}</h1>
              <div className="mt-4 mb-3">
                <h5>Rating : {respData.vote_average} / 10</h5>
                <h5>
                  {respData.overview}
                </h5>
              </div>

              <h4>Release Date :{respData.release_date}</h4>
              <h4>Orginal Language :{respData.original_language}</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumb-video">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoData.key}`} />
            </div>
          </div>
        </div>

      </section>



    </div>
  )
}

export default Data