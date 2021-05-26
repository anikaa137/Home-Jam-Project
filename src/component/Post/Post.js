import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className='container mt-5'>
            <div className="row mt-4">
                <div className="col-lg-7 mt-5">
                 <div className="post-container text-light py-5 mt-5 text-justify ">
                    <h1>Chari Chari</h1>
                    <p> Live from their sofa to yours . Get closer to your favorite <br />
                    artist ,and never miss out.
                    </p>
                 </div>
                </div>
                <div className="col-lg-5"></div>
            </div>
            
        </div>
    );
};

export default Post;