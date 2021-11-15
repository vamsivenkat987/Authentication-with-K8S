// import axios from "axios"
// import buildClient from "../api/buildClient";


// const HomePage = ({ currentUser }) => {
//   console.log(currentUser);
  
//   return currentUser ? <h1>Welcome to home page!! you are signed</h1> : <h1>Welcome to home page!! you are not signed</h1> ;
// };

// HomePage.getInitialProps = async context => {
//   const client = buildClient(context);
//   const { data } = await client.get('/api/users/currentuser');
//   return data;
//   // if(typeof window === 'undefined'){
//   //   const { data } = await axios.get("http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",{
//   //     headers: req.headers
//   //   });
//   //   return data;

//   // }
//   // else{
//   //   const response = await axios.get("/api/users/currentuser");
//   //   return response.data;
//   // }
//   // return response.data;
// }

// export default HomePage;

import buildClient from '../api/buildClient';

const LandingPage = ({ CurrentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  return CurrentUser ? <h1>Welcome to home page!! you are signed</h1> : <h1>Welcome to home page!! you are not signed</h1> ;
};

LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
  
};

export default LandingPage;
