import "./topbar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
      </div>
      

      <div className="topCenter">
        <ul className="topList ">
          <li className="topListItem link link-effect">Home</li>
          <li className="topListItem link link-effect">About</li>
          <li className="topListItem link link-effect">Contact</li>
          <li className="topListItem link link-effect">Write</li>
          <li className="topListItem link link-effect">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default TopBar;
