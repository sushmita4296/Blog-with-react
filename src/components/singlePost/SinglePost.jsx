import "./singlePost.css"
import  pImg1 from "../../images/pImg1.jpg"

function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img className="singlePostImg" src={pImg1} alt="post-image" />
            
            <h1 className="singlePostTitle">
                Loream Ipsum doler sit 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sushmita</b> </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis adipisci esse consectetur beatae illo veritatis dolore vitae, laboriosam libero pariatur magnam repellendus nihil quidem blanditiis vel laudantium soluta eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis adipisci esse consectetur beatae illo veritatis dolore vitae, laboriosam libero pariatur magnam repellendus nihil quidem blanditiis vel laudantium soluta eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis adipisci esse consectetur beatae illo veritatis dolore vitae, laboriosam libero pariatur magnam repellendus nihil quidem blanditiis vel laudantium soluta eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis adipisci esse consectetur beatae illo veritatis dolore vitae, laboriosam libero pariatur magnam repellendus nihil quidem blanditiis vel laudantium soluta eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis adipisci esse consectetur beatae illo veritatis dolore vitae, laboriosam libero pariatur magnam repellendus nihil quidem blanditiis vel laudantium soluta eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis adipisci esse consectetur beatae illo veritatis dolore vitae, laboriosam libero pariatur magnam repellendus nihil quidem blanditiis vel laudantium soluta eveniet.</p>

            </div>
        </div>
    );
}
export default SinglePost;