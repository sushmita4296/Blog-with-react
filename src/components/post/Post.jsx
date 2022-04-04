import "./post.css"
import  pImg1 from "../../images/pImg1.jpg"

function Post(){
  return(
    <div className="post">
      <img className="postImg" src={pImg1} alt="post-image" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet cumque in?</span>
      </div>
    </div>
  )
}
export default Post;