import "./post.css"
import  pImg1 from "../../images/pImg1.jpg"

function Post(){
  return(
    <div className="post">
      <div className="postWrapper">
        <img className="postImg" src={pImg1} alt="post-image" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Music</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet cumque in?</span>
          <hr/>
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
        aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
        recusandae sequi numquam distinctio aliquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
        aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
        recusandae sequi numquam distinctio aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
        aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
        recusandae sequi numquam distinctio aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
        aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
        recusandae sequi numquam distinctio aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
        aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
        recusandae sequi numquam distinctio aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
        aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
        recusandae sequi numquam distinctio aliquam.
        </p>
      </div>
    </div>
  )
}
export default Post;