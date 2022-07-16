import React, { useState } from "react";
import { dbService } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

function Tweet({ tweetObj, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text)

  const NweetTextRef = doc(dbService, "tweet", `${tweetObj.id}`);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you gonna delete this Tweet?")
    if (ok) {
      await deleteDoc(NweetTextRef)
    }
  }

  const ToggleEditing = () => {
    setEditing((prev) => !prev)
  }

  const onChange = (e) =>{
    setNewTweet(e.target.value)
  }
  const onSubmit = async (e) =>{
    e.preventDefault();
    await updateDoc(NweetTextRef,{
      text: newTweet
    });
    ToggleEditing();
  }
  return (
    <div>
      {editing ? <>
        <form>
          <input onChange={(e)=>onChange(e)} type="text" placeholder="Edit your comment!" value={newTweet} required></input>
          <input type="submit" onClick={(e)=>onSubmit(e)} value="update Tweet!"></input>
        </form>
        <button onClick={ToggleEditing}>Cancal</button>
      </>
        : <>
          <h3>{tweetObj.text}</h3>
          {isOwner &&
            <>
              <button onClick={onDeleteClick}>Deleted Tweet</button>
              <button onClick={ToggleEditing} >Edit Tweet </button>
            </>}
        </>

      }

    </div>
  );
}

export default Tweet;
