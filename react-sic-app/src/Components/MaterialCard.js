import React from 'react'

const MaterialCard = ({MID , title , description , link}) => {
    return (
        <div className="msg card text-center m-3" id={MID} style = {{minWidth : '50vw'}} >
            <div className="card-header">{MID}</div>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
          <p className="card-text">
                {description}
          </p> 
                <a href={link} className="btn btn-success"
                    >link</a>
        </div>
        <div className="card-footer text-muted">by Ahmed Ashref</div>
      </div>
    )
    
}

export default MaterialCard
