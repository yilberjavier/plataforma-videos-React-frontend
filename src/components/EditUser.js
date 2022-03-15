import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const EditUser = () => {

    const { id } = useParams()

     const [videoUrl, setVideoUrl] = useState("");
     const [title, setTitle] = useState("");
     const [desc, setDesc] = useState("");
     const [image, setImage] = useState("");

     const editVideo = (id) => {
       axios.put("http://localhost:8080/api/video/" + id, {
         video: videoUrl,
         title: title,
         desc: desc,
         image: image,
       });
       window.location.replace("/");
     };

  return (
    <div className="container mt-4">
      
      <h2 className='text-center mb-4'>Edit video</h2>

      {
        id
      }

      <input className="form-control mt-2" type="text" placeholder="Video Url"  onChange={(e)=> {setVideoUrl(e.target.value)}}/>
      <input className="form-control mt-2" type="text" placeholder="Titulo" onChange={(e)=> {setTitle(e.target.value)}} />
      <textarea className="form-control mt-2" row='3' placeholder="Descripccion" onChange={(e)=> {setDesc(e.target.value)}}></textarea>
      <input className="form-control mt-2" type="text" placeholder="image Url" onChange={(e)=> {setImage(e.target.value)}}/>

      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mt-4" onClick={() => editVideo(id)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      
    </div>
  )
}

export default EditUser