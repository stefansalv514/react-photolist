import React from 'react';


const PhotoBlock = () => {
    return (
        <section className="photo-section">
            <div className="container">
                <div className="photolist">
                    <div className="photolist__item">
                        <img src="https://picsum.photos/id/237/300/200" alt=""/>
                    </div>
                    <div className="photolist__item">
                        <img src="https://picsum.photos/id/238/300/200" alt=""/>
                    </div>
                    <div className="photolist__item">
                        <img src="https://picsum.photos/id/239/300/200" alt=""/>
                    </div>
                    <div className="photolist__item">
                        <img src="https://picsum.photos/id/240/300/200" alt=""/>
                    </div>
                    <div className="photolist__item">
                        <img src="https://picsum.photos/id/241/300/200" alt=""/>
                    </div>
                    <div className="photolist__item">
                        <img src="https://picsum.photos/id/242/300/200" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PhotoBlock;