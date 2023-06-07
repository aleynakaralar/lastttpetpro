
import firebase from "../auth/firebase";
import { getDatabase, onValue, push, ref, set , remove} from "firebase/database";
import { useState, useEffect } from "react";


export const AddUser = (info) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, 'ads/');
    const newUserRef = push(userRef)
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        information:info.information,
        type:info.type
    })
}

export const useFetch = () => {
    const [isLoding,setIsLoding] = useState()
    const [contactList,setContactList] = useState()

useEffect(() => {
  const db = getDatabase(firebase);
  const userRef = ref(db, 'ads/');
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    const userArray = []

    for ( let id in data){
      userArray.push({id, ...data[id]})
    }

    setContactList(userArray)
    setIsLoding(false)

    
  });

  
},[])



return {isLoding, contactList}  
}

export const DeleteUser = (id) => {
    const db = getDatabase(firebase);
    remove(ref(db, 'ads/' + id))
    
  }