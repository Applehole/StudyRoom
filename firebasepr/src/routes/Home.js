import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../firebase";

function Home({userObj}) {

  const [tweet, setTweet] = useState("")
  const [tweets, setTweets] = useState([])

      useEffect(()=>{
        const q = query(
          collection(dbService, "tweet"),
          orderBy("createdAt", "desc")
          );
          onSnapshot(q, (snapshot) => {
          const nweetArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          }));
          setTweets(nweetArr);
          });
      },[])

  const onSubmit = async (e) =>{
    e.preventDefault();
    await addDoc(collection(dbService,"tweet"),{ // 데이터베이스에 넣기
      text: tweet,
      createdAt: serverTimestamp(),
      creatorId : userObj.uid
    })
    setTweet("")
  }

  const onChange = (e) =>{
    setTweet(e.target.value)
  }

  return (
    <div>
        <form onSubmit={(e)=>onSubmit(e)}>
          <input type="text" placeholder="what is on your mind?" maxLength={120} value={tweet} onChange={(e)=>onChange(e)} ></input>
          <input type="submit" value="Tweet" ></input>
        </form>
        <div>
          {tweets.map((tweet)=>{
            return (
              <div key={tweet.id}>
                <h3>{tweet.text}</h3>
              </div>
            )
            
          })}
        </div>
    </div>
  );
}

export default Home;
