import shoppingImage from '../images/online-shopping.jpg'
import birthdayImage from '../images/birthday.png'
import JSPhoto from "../images/JavaScript-logo.png"
import RPhoto from "../images/reactjs.png"
import RDPhoto from "../images/redux.png"
import BPhoto from "../images/bootstrap.png"
import ephoto from '../images/e.png'
import youtubeApp from '../images/youtube-clone-app.png'
import MyPortfolio from '../images/MyPortfolio.png'

    let projectData = [
        {
            id:1,
            projectName: "My FirstEver Portfolio",
            projectImage : MyPortfolio,
            projectLink : 'https://mohammedihsaan.github.io/MyPortfolio/',
            projectDescription : " My FirstEver Portfolio ",
            icon :[JSPhoto,RDPhoto,RPhoto]
        },
        {
            id:2,
            projectName: "E Comerece Website",
            projectImage : ephoto,
            projectLink : "https://mohammedihsaan.github.io/E-Commerce-Website/",
            projectDescription : " Working on this Project  ",
            icon :[JSPhoto,RDPhoto,RPhoto]
        },
        {
            id:3,
            projectName: "YouTube Clone(Working on this project)",
            projectImage : youtubeApp,
            projectLink : "https://mohammedihsaan.github.io/react-youtube-clone-app/",
            projectDescription : " working ",
            icon :[JSPhoto,RDPhoto,RPhoto,BPhoto]
        },
        {
            id:4,
            projectName: "Birthday Calender",
            projectImage : birthdayImage,
            projectLink : "https://mohammedihsaan.github.io/my-birthdaycalender/",
            projectDescription : "Birthday Calender WebSite is Build Using React.js & for styling CSS3 is used. In this React Project we can serach Birthday and also it show person's Age  ",
            icon :[JSPhoto,RPhoto]
        },
        {
            id:5,
            projectName: "Online Shopping",
            projectImage : shoppingImage,
            projectLink : "https://mohammedihsaan.github.io/onlineShopping/",
            projectDescription : "Online Shopping WebSite is Build Using React.js & for styling BootsTrap is used. In this React Project Data is fetched from Fake Store API using axios ",
            icon :[JSPhoto,RDPhoto,RPhoto,BPhoto]
        },
    ]
    
    export default projectData




