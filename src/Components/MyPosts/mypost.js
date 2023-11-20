import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./myposts.css";
import { Firebase } from "../../firebase/config";
import BarLoading from "../Loading/BarLoading";
import PostCards from "../PostCards/PostCards";
import { useHistory } from "react-router";
import { AllPostContext } from "../../contextStore/AllPostContext";

function MyPost() {
  const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts2] = useState([]); //for showing all posts in Descending order of date
  let [loading, setLoading] = useState(false);
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({});

  useState(() => {
    Firebase.firestore()
      .collection("users")
      .where("id", "==", Firebase.auth().currentUser.uid)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  },[history]);
  useEffect(() => {//show only those posts which are not sold

    setLoading(true);
    
    Firebase.firestore() //retreving all posts from firebase which are not sold
      .collection("products")
      .where("userId", "==", Firebase.auth().currentUser.uid)
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let allPostsDescendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setPosts2(allPostsDescendingOder); //set to post
        setAllPost(allPostsDescendingOder);
        setLoading(false);
      });
  }, [setAllPost]);
  // quickMenuCards assign all cards of post item later it will be displayed
  if(posts.length===0){
    return (
      <div className="postParentDiv">
        {posts && (
          <div className="moreView">
            <div className="heading">
              <span>Your Posts</span>
              <Link to="./viewmore">
                {" "}
                <span>View more</span>{" "}
              </Link>
            </div>
            <div className="cards">
              {" "}
              {loading ? <BarLoading /> : <h1>No Posts</h1>}
            </div>
          </div>
        )}
      </div>
    );
  }
  let quickMenuCards = posts.map((product, index) => {
    return(<div className="quick-menu-cards" key={index}> <PostCards product={product} index={index} /> </div>);
  });

  return (
    <div className="postParentDiv">
      {userDetails && (
        <div className="userDetails">
          <div className="heading">
            <span>Your Details</span>
          </div>
          <div className="details">
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>
            
          </div>
        </div>
      )}
      {posts && (
        <div className="moreView">
          <div className="heading">
            <span>Your Posts</span>
            <Link to="./viewmore">
              {" "}
              <span>View more</span>{" "}
            </Link>
          </div>
          <div className="cards">
            {" "}
            {loading ? <BarLoading /> : quickMenuCards}
          </div>
        </div>
      )}
      {/* show the user details */}
      
    </div>
  );
}

export default MyPost;
