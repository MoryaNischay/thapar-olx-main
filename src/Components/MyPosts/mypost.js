import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./myposts.css";
import { Firebase } from "../../firebase/config";
import BarLoading from "../Loading/BarLoading";
import PostCards from "../PostCards/PostCards";

import { AllPostContext } from "../../contextStore/AllPostContext";

function MyPost() {
  const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts2] = useState([]); //for showing all posts in Descending order of date
  //let [posts2, setPosts2] = useState([]); //for showing all posts in Ascending order of date
  let [loading, setLoading] = useState(false);

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
  let quickMenuCards = posts.map((product, index) => {
    return(<div className="quick-menu-cards" key={index}> <PostCards product={product} index={index} /> </div>);
  });

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
            {loading ? <BarLoading /> : quickMenuCards}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPost;
