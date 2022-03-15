import React, { useState } from 'react'
import axios from "axios";


const AddVideo = () => {

  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  const addVideo = () => {
    axios.post("http://localhost:8080/api/video", {
      video: videoUrl,
      title: title,
      desc: desc,
      image: image
    });
    window.location.replace("/");
  }


  return (
    <div className="container mt-4">
      
      <h2 className='text-center mb-4'>Create new video</h2>

      <input className="form-control mt-2" type="text" placeholder="Video Url"  onChange={(e)=> {setVideoUrl(e.target.value)}}/>
      <input className="form-control mt-2" type="text" placeholder="Titulo" onChange={(e)=> {setTitle(e.target.value)}} />
      <textarea className="form-control mt-2" row='3' placeholder="Descripccion" onChange={(e)=> {setDesc(e.target.value)}}></textarea>
      <input className="form-control mt-2" type="text" placeholder="image Url" onChange={(e)=> {setImage(e.target.value)}}/>

      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mt-4" onClick={addVideo}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      
    </div>
    
  );
}

export default AddVideo