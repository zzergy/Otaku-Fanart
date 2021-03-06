import React from "react";
import "./GalleryItem.scss";
import {useHistory} from "react-router-dom";


interface GalleryItemProps {
    id: string;
    imageUrl: string;
    imageTitle: string;
    likeCount: number;
}

function GalleryItem(props: GalleryItemProps) {


    const history = useHistory();

    function handleClick() {
        history.push(`/post/${props.id}`)
    }

    return (
        <section onClick={handleClick}>
            <img src={props.imageUrl} alt="fanArt"/>
            <div style={{height: '70px'}}>
                <div className="image-info-container">
                    <div className="title-container">{props.imageTitle}</div>
                    <div className="likes-container">
                        <img className="like-icon" src={"/icons/heart-full.png"} alt='post image'/>
                        <p>{props.likeCount}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GalleryItem