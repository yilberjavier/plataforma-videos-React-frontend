import React, { useEffect, useState } from 'react'
import axios from "axios";
import './home.css';
import Modal from './Modal';

 // -------data demo------


// const data = [
//     {
//         id: '1',
//         videoUrl: 'https://www.youtube.com/watch?v=1JtWHsPHaiM',
//         title: 'lorem ipsum cald',
//         description: 'Curabitur porta libero ut nisi iaculis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nisi rhoncus, bibendum neque eget, condimentum felis.'
//     },
//     {
//         id: '2',
//         videoUrl: 'https://www.youtube.com/watch?v=g0onxlWWQtA',
//         title: 'lorem ipsum usys',
//         description: 'Curabitur porta libero ut nisi iaculis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nisi rhoncus, bibendum neque eget, condimentum felis.'
//     },
//     {
//         id: '3',
//         videoUrl: 'https://www.youtube.com/watch?v=oLVYspNCBCc',
//         title: 'lorem sijdhi cald',
//         description: 'Curabitur porta libero ut nisi iaculis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nisi rhoncus, bibendum neque eget, condimentum felis.'
//     },
//     {
//         id: '4',
//         videoUrl: 'https://www.youtube.com/watch?v=aBQTH2EoTyo',
//         title: 'duueg ipsum cald',
//         description: 'Curabitur porta libero ut nisi iaculis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nisi rhoncus, bibendum neque eget, condimentum felis.'
//     },
//     {
//         id: '5',
//         videoUrl: 'https://www.youtube.com/watch?v=vehoPjKk2Vc',
//         title: 'sijefnbg ipsum siid',
//         description: 'Curabitur porta libero ut nisi iaculis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nisi rhoncus, bibendum neque eget, condimentum felis.'
//     },
//     {
//         id: '6',
//         videoUrl: 'https://www.youtube.com/watch?v=EOotUnhQqJI',
//         title: 'iuyvbs ipsum cald',
//         description: 'Curabitur porta libero ut nisi iaculis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nisi rhoncus, bibendum neque eget, condimentum felis.'
//     },
// ]



const Home = () => {

  const [videos, setVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState('');
  

  // get all videos
  useEffect(() => {
    axios.get("http://localhost:8080/api/videos")
    .then(res => setVideos(res.data))
    .catch(err => console.error(err))
    
  }, [])


  // filter video
  const dataSearch = videos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchVideos.toString().toLowerCase())
    );
  });




  return (
    <div className="container mt-4">
      <div className="mb-4 d-flex justify-content-center">
        <input type="text" className="buscador" placeholder="Search" onChange={(e) =>{setSearchVideos(e.target.value)}} />
      </div>

      <div className="row">
        {dataSearch.map((item, i) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              key={i} 
              className="card shadow p-3 mb-1 bg-body rounded " 
              data-bs-toggle="modal" 
              data-bs-target={`#id${item._id}`}
              data-bs-whatever="@mdo"
              >
              <img src={item.image} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
              </div>
            

            
               <Modal 
                id={`id${item._id}` } 
                video={item.video}
                title={item.title}
                desc={item.desc} 
                />

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home