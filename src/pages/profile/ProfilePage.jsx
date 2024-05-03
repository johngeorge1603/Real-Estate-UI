import React from 'react'
import { userData } from '../../library/dummydata'
import MyList from '../../components/myList/MyList'
import "./ProfilePage.scss"
import Chat from '../../components/chat/Chat'



function ProfilePage() {
  return (
    <div className='profilePage'>
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className="info">
              <span>
              <img src={userData.img} alt="" />
              <b>{userData.name}</b>
              </span>
              <span>
                Email: <b>john@gmail.com</b>
              </span>
            </div>
            <div className="title">
              <h1>My List</h1>
              <button>Add Post</button>
            </div>
              <MyList/>
            <div className="title">
              <h1>Saved List</h1>
            </div>
              <MyList/>
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Chat/>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage