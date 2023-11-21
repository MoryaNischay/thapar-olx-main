import React, { useContext} from "react";
import { useHistory } from "react-router";
import "./Header.css";
// import OlxLogo from "../../assets/OlxLogo";
import OlxLogo from "../../assets/ThaparOlxlogo.png";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextStore/AuthContext";
import { Firebase } from "../../firebase/config";
import Search from "../Search/Search";
function Header() {
  //const { allPost } = useContext(AllPostContext);
  // const{setPostContent}=useContext(PostContext)
  const history = useHistory();
  // const [filteredData, setFilteredData] = useState([]);
  
  
  const { user } = useContext(AuthContext);

  const logoutHandler = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        history.push("/login");
      });
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to="/">
            <img src={OlxLogo} alt="Logo" />
          </Link>
          
        </div>
        <div className="productSearch">
          <Search />
        </div>

        
        <div className="loginPage">
          {user ? (
            <Link to="/myposts">{user.displayName}</Link>
          ) : (
            <Link to="/login">
              <span>Login</span>
            </Link>
          )}
          <hr />
        </div>
        {user && (
          <span onClick={logoutHandler} className="logout-span">
            Logout
          </span>
        )}

        <Link to="/create">
          {" "}
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
