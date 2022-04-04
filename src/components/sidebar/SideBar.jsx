import "./sidebar.css"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nam. Voluptate tenetur ea quam
                    aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
                    recusandae sequi numquam distinctio aliquam.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <img />
                <ul className="sidebarList">
                    <li className="sidebarItem">Life</li>
                    <li className="sidebarItem">Music</li>
                    <li className="sidebarItem">Style</li>
                    <li className="sidebarItem">Sport</li>
                    <li className="sidebarItem">Tech</li>
                    <li className="sidebarItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocialIcon">
                    <i className="topIcon fa-brands fa-facebook-square"></i>
                    <i className="topIcon fa-brands fa-instagram-square"></i>
                    <i className="topIcon fa-brands fa-pinterest-square"></i>
                    <i className="topIcon fa-brands fa-twitter-square"></i>
                </div>

            </div>
        </div>
    )
}
export default SideBar;