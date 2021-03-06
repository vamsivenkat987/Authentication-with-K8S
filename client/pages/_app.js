import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/buildClient';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, CurrentUser }) => {
  return(
    <div>
      <Header CurrentUser={CurrentUser}/>
      <Component {...pageProps} />
    </div>
  )
  // return <Component {...pageProps} />;
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  let pageProps = {};
  if(appContext.Component.getInitialProps){
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  
  return {pageProps, ...data};

};


export default AppComponent;