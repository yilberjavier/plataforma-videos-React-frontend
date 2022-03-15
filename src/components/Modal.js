import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { ReactYouTubeLite } from "react-youtube-lite";


const Modal = ({id, title, desc, video}) => {


    const deleteUser = (id) => {
      axios.delete("http://localhost:8080/api/video/" + id);
      window.location.reload();
    };

   

  return (
    <div className="modal fade " id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-sm-down modal-fullscreen-md-down modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <ReactYouTubeLite className="card-img-top" url={video} />
                </form>
                <div className="card-body">
                    <p className="card-text">{desc}</p>
                    <div className="d-flex justify-content-between">
                    <Link to={`/editvideo/${id}`} className="btn btn-outline-success" title="Edit">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button onClick={()=>deleteUser(id)} className="btn btn-outline-danger" title="Delete">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal