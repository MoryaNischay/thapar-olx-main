import React,{useEffect,useContext} from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/MyAccBanner/Banner2';
import Footer from '../Components/Footer/Footer';
import Mypost from '../Components/MyPosts/mypost';
import { Firebase } from '../firebase/config';
import { AuthContext } from '../contextStore/AuthContext';

function MyPosts(props) {
 const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
    
 
  },[setUser])
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Mypost/>
      <Footer />
    </div>
  );
}

export default MyPosts;
 
