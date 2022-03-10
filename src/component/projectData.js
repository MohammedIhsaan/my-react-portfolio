import shoppingImage from "../images/online-shopping.jpg";
import birthdayImage from "../images/birthday.png";
import login from "../images/loginProject.png";
import JSPhoto from "../images/JavaScript-logo.png";
import RPhoto from "../images/reactjs.png";
import RDPhoto from "../images/redux.png";
import BPhoto from "../images/bootstrap.png";
import ephoto from "../images/e.png";
import youtubeApp from "../images/youtube-clone-app.png";
import MyPortfolio from "../images/MyPortfolio.png";
import chatApp from "../images/chatApp.png";

export let projectData = [
  {
    id: 1,
    projectName: "My FirstEver Portfolio",
    projectImage: MyPortfolio,
    projectLink: "https://mohammedihsaan.github.io/MyPortfolio/",
    projectDescription: " My FirstEver Portfolio ",
    icon: [JSPhoto, RDPhoto, RPhoto],
  },
  {
    id: 2,
    projectName: "E Comerece Website",
    projectImage: ephoto,
    projectLink: "https://mohammedihsaan.github.io/E-Commerce-Website/",
    projectDescription: " Working on this Project  ",
    icon: [JSPhoto, RDPhoto, RPhoto],
  },
  {
    id: 3,
    projectName: "Birthday Calender",
    projectImage: birthdayImage,
    projectLink: "https://mohammedihsaan.github.io/my-birthdaycalender/",
    projectDescription:
      "Birthday Calender WebSite is Build Using React.js & for styling CSS3 is used. In this React Project we can serach Birthday and also it show person's Age  ",
    icon: [JSPhoto, RPhoto],
  },
];
export let projectData2 = [
  {
    id: 4,
    projectName: "YouTube Clone(Working on this project)",
    projectImage: youtubeApp,
    projectLink: "https://mohammedihsaan.github.io/react-youtube-clone-app/",
    projectDescription: " working ",
    icon: [JSPhoto, RDPhoto, RPhoto, BPhoto],
  },

  {
    id: 5,
    projectName: "Chat App",
    projectImage: chatApp,
    projectLink: "https://mohammedihsaan.github.io/react-chat-app/",
    projectDescription:
      "React Chat App is Build using React.js & for styling styled-component library is used. ContextAPI is used to handel state",
    icon: [JSPhoto, RDPhoto, RPhoto, BPhoto],
  },
  {
    id: 6,
    projectName: "Login & Singup (Firebase)",
    projectImage: login,
    projectLink: "https://mohammedihsaan.github.io/deltaExchangeAssignment",
    projectDescription:
      "Login and Signup pages is Build Using React.js & for login & signup firbase authentication used. for state managment Redux library is used",
    icon: [JSPhoto, RDPhoto, RPhoto],
  },
];
