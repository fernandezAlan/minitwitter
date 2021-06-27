

const users =[
    {
    id:4,
    name:"alan",
    profilePhoto:"https://pbs.twimg.com/profile_images/1281573151747592193/LMHYUNzF_400x400.jpg",
    nickName:"alan_dario10",
    verified:true
},
{
    id:1,
    name:"belen",
    profilePhoto:"https://lh3.googleusercontent.com/proxy/pPZyB1TqK7hNZ2X849OZTS32e30GvcrvSLYLGyjReKue_6VlVSGyELSDEbsifRl37u8u1mWnwrEr_-1hFxz6qQPTu0Agx456TGtzGS8CraQZ5ztb7tQcjyaYepBMUtbdJJv-X0cRIZIZJPkfl01vX1Hs",
    nickName:"cure_bel",
    verified:true
},
{
    id:2,
    name:"jazmin",
    profilePhoto:"https://i.pinimg.com/originals/50/26/3b/50263b883b0b9726dd950af71e3a2f27.jpg",
    nickName:"wachurro_el_furro",
    verified:true
},
{
    id:3,
    name:"ricardo fort",
    profilePhoto:"https://static.ellitoral.com/um/fotos/228579_fort.jpg",
    nickName:"el_ricky_fort",
    verified:true
}
]
const tweets =[
    {
        id:1,
        userId:4,
        content:"este mini twitter es una verga",
        likes:0,
        coments:0,
        retweets:0
    },
    {
        id:2,
        userId:3,
        content:"saca la mano de ahi carajo!",
        likes:0,
        coments:0,
        retweets:0
    },
    {
        id:3,
        userId:1,
        content:"mi net se volvio a apagar :c ",
        likes:0,
        coments:0,
        retweets:0
    },
    {
        id:3,
        userId:4,
        content:"hoy arrranque el gym, me duele todo",
        likes:0,
        coments:0,
        retweets:0
    },
    {
        id:4,
        userId:2,
        content:"con quien sale un minecraft hoy gente?",
        likes:0,
        coments:0,
        retweets:0
    }
]

/*
*/
const constainerTweets = document.getElementById("container-tweets")
const buttonPostTweet = document.getElementById('button-post-tweet')
const inputWhoAreYou= document.getElementById('input-who-are-you')
const whatAreYouThinking = document.getElementById('textArea-what-are-you-thinking')
let newUserName;
let newTweetUser;

buttonPostTweet.addEventListener("click",()=>{
    postNewTweet()
    .then((data)=>{
        const {tweets,users}= data
        removeTweets()
        postNewtweets(tweets,users)
        
    })
})
inputWhoAreYou.addEventListener("change",(e)=>{
    newUserName = e.target.value
})
whatAreYouThinking.addEventListener("change",(e)=>{
    newTweetUser = e.target.value


})
const getUserTweet = (userId)=>{
    return users.find(user=>user.id===userId)
}

const PrintTweet = (tweet,arrayOfUsers= users)=>{
  
    const container = document.createElement('div')
    const subContainer = document.createElement('div')
    const profilePhoto = document.createElement('img')
    const userName = document.createElement('span')
    const nickName = document.createElement('span')
    const tittleTweet = document.createElement('div')
    const content = document.createElement('p')
    const interactiveButtons =  document.createElement('div')

    //we create the check profile svg
    const svgCheck = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svgCheckPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );

    svgCheck.setAttribute('fill', '#0d6efd');
    svgCheck.setAttribute('viewBox', '0 0 24 24');

    svgCheckPath.setAttribute('d','M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z')  

    //we create the svg icon for thw like button
    const svgLike = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPathLike = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      iconPathLike.setAttribute('d',"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z")

    svgLike.setAttribute('fill', 'gray');
    svgLike.setAttribute('class', 'bi bi-heart');
    svgLike.setAttribute('viewBox', '0 0 16 16');

    //and now we create the svg icon for the commentary button
    const svgCommentary = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPathComentary = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      svgCommentary.setAttribute('fill', 'gray');
      svgCommentary.setAttribute('viewBox', '0 0 511.626 511.627');
    
      iconPathComentary.setAttribute('d','M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41   c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269   c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7   c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283   c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574   c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854   c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429   c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283   c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789   C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529   c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852   c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27   c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803   c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845   c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z')

        //and now we create the svg icon for the share buttons
        const svgShare = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const iconPathShare = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          );

          svgShare.setAttribute('fill', 'gray');
          svgShare.setAttribute('viewBox', '0 0 32 32');
          iconPathShare.setAttribute('d','M2,29A1.12,1.12,0,0,1,1.69,29,1,1,0,0,1,1,28V27A19,19,0,0,1,17,8.24V4a1,1,0,0,1,1.6-.8l12,9a1,1,0,0,1,0,1.6l-12,9A1,1,0,0,1,17,22V18.25A18.66,18.66,0,0,0,4.93,25.67L2.81,28.59A1,1,0,0,1,2,29ZM19,6V9.12a1,1,0,0,1-.89,1,17,17,0,0,0-15,14.6l.16-.21A20.68,20.68,0,0,1,17.9,16.11a1,1,0,0,1,.77.26,1,1,0,0,1,.33.74V20l9.33-7Z')



    const user = arrayOfUsers.find(user=>user.id===tweet.userId)
    content.classList.add('tweet_content')
    userName.classList.add('user_name')
    container.classList.add('user_tweet')
    container.classList.add('tweet_id_'+tweet.id)
    profilePhoto.classList.add('profile_user_photo')
    subContainer.classList.add('sub_container')
    nickName.classList.add('nick_name')
    tittleTweet.classList.add('tittle_tweet')
    svgLike.classList.add('svg_button')
    svgShare.classList.add('svg_button')
    svgCommentary.classList.add('svg_button')
    interactiveButtons.classList.add('interactive_buttons')
    svgCheck.classList.add('check_profile')
    profilePhoto.src = user.profilePhoto 
    userName.textContent= user.name
    content.textContent = tweet.content
    nickName.textContent= '@'+user.nickName

    svgCheck.appendChild(svgCheckPath)
    svgShare.appendChild(iconPathShare);
    svgLike.appendChild(iconPathLike);
    svgCommentary.appendChild(iconPathComentary)
    interactiveButtons.appendChild(svgLike)
    interactiveButtons.appendChild(svgShare)
    interactiveButtons.appendChild(svgCommentary)
    tittleTweet.appendChild(userName)

    user.verified ? tittleTweet.appendChild(svgCheck) : null

    tittleTweet.appendChild(nickName)
    container.appendChild(profilePhoto)
    subContainer.appendChild(tittleTweet)
    subContainer.appendChild(content)
    subContainer.appendChild(interactiveButtons)
    container.appendChild(subContainer)
    constainerTweets.appendChild(container)
}
const postNewTweet =()=>{
    return new Promise((resolve,reject)=>{
        const checkIfUserExist = userExist(newUserName)
        var userId = users.length + 1 
        var tweetId = tweets.length + 1
        var user ={
            id:userId,
            name:newUserName,
            verified:false,
            nickName:'invited',
            profilePhoto:"https://i.pinimg.com/736x/43/4c/ee/434ceefff56f329c73e0bb77fad33274.jpg"
        }
        var tweet ={
            id:tweetId,
            userId: checkIfUserExist ? checkIfUserExist.id : userId,
            content:newTweetUser
        }

        checkIfUserExist ? null : users.unshift(user)
        tweets.unshift(tweet)
        resolve({tweets,users})

    })
}
const removeTweets = ()=>{
    const tweets =[].slice.call(document.getElementsByClassName('user_tweet')) 
    console.log('removetweets',tweets)
    tweets.forEach((tweet)=>{
        constainerTweets.removeChild(tweet)
    })

}

const postNewtweets=(tweets,users)=>{
    console.log('postNewtweets',{tweets,users})
    tweets.forEach((tweet)=>PrintTweet(tweet,users))
}
const userExist=(userName)=>{
    const user = users.find((user)=>user.name===userName)
    
    return user ? user : null
}

tweets.forEach(tweet=>PrintTweet(tweet))


