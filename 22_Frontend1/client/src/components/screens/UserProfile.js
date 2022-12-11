// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../App"
// import { useParams } from "react-router-dom";
// const Profile = () => {

//     const [UserProfile, setprofile] = useState(null)
//     const { state, dispatch } = useContext(UserContext)
//     const {userid}=useParams();
//     console.log(userid)
//     useEffect(() => {
//         fetch(`/user/${userid}`, {
//             headers: {
//                 "Authorization": "Bearer " + localStorage.getItem('jwt'),
//             }
//         }).then(res => res.json())
//             .then(result => {
//                 console.log(result)
//             setprofile(result)
//             })
//     }, [])

//     return (
//         <>
//         {
//           UserProfile?

//           <div style={{ maxWidth: "550px", margin: "0px auto" }}>
//             <div style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 margin: "18px 0px",
//                 borderBottom: "1px solid grey"
//             }}>
//                 <div >
//                     <img style={{ width: "150px", height: "160px", borderRadius: "80px" }}
//                         src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
//                     />

//                 </div>

//                 <div>
//                     <h4>{UserProfile.user.name}</h4>
//                     <h4>{UserProfile.user.id}</h4>


//                     <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
//                         <h6>{UserProfile.post.length}</h6>
//                         <h6>401 followers</h6>
//                         <h6>140 following</h6>
//                     </div>
//                 </div>

//             </div>
//             <div className='gallery'>
//                 {
//                     UserProfile.post.map(item => {
//                         return (
//                             <img key={item._id} className='item' src={item.photo} alt={item.title} />

//                         )
//                     })
//                 }
//             </div>
//         </div>
//         :<h2>Loading....</h2>
//             }
//         </>
        
//     )

// }

// export default Profile




/////////////////////////////////////////////////
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'
const Profile=() =>{
    const [userProfile,setprofile]=useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid}=useParams();
    console.log(userid)
    useEffect(()=>{
      fetch(`/user/${userid}`,{
        headers:{
          "Authorization":"Bearer " +localStorage.getItem("jwt"),
        }
      }).then(res=>res.json())
      .then(result=>{
      console.log(result)
      setprofile(result)
    })
    },[])

    const followUser=()=>{
      fetch('/follow',{
        method:"put",
        headers:{
          "Content-Type": "application/json",
          "Authorization":"Bearer " +localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          followId:userid
        })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
        localStorage.setItem("user",JSON.stringify(data))
        
      })
    }

    const unfollowUser=()=>{
      fetch('/unfollow',{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          unfollowId:userid
        })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }
    
      return (
        <>
            {
                userProfile?
                <div style={{maxWidth:"550px",margin:"0px auto"}}>
          <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
          }}>
            <div>
              <img style={{width:"140px",height:"150px",borderRadius:"120px"}}
               src="https://media.istockphoto.com/id/1334702614/photo/young-man-with-laptop-and-coffee-working-indoors-home-office-concept.jpg?b=1&s=170667a&w=0&k=20&c=D7Ux09foobFMvTvM0z4t0SbsJ6H7M0z4UbKa84CVLLw="
              alt="img1"/>
             
            <h4>{userProfile.user.name}</h4>
            <h4>{userProfile.user.email}</h4>
            <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
              <h6>{userProfile.posts.length} Post</h6>
              <h6>40 followers</h6>
              <h6>80 following</h6>
              <button class="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
      onClick={()=>followUser()}>
      Follow</button>
      <button class="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
      onClick={()=>unfollowUser()}>
      UnFollow</button>
            </div>
          </div>
        </div>
        <div className="gallery">
        {
            userProfile.posts.map(item=>{
            return(
              <img key={item._id} className='item' src={item.photo} alt={item.title}/>
            )
          })
        }
              </div>
        </div>
        :<h2>Loading.....</h2>
            }
        </>
       
      )
    
}

export default Profile