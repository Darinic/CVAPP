import React from 'react';
import Introduction from './component/Introduction/Introduction';
import Skills from './component/Skills/Skills';
import WrappedComponent from './component/WrappedComponent/WrappedComponent';
import Experience from './component/Experience/Experience';
import ContactMe from './component/ContactMe/ContactMe';
import Portfolio from './component/Portfolio/Portfolio';
import Footer from './component/Footer/Footer';
import Navigation from './component/Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <WrappedComponent id="Home" component={<Introduction/>}/>
      <WrappedComponent id="Skills" component={<Skills/>} />
      <WrappedComponent id="Experience" component={<Experience/>} />
      <WrappedComponent id="Portfolio" component={<Portfolio/>} />
      <WrappedComponent id="ContactMe" component={<ContactMe/>} />
      <WrappedComponent id="Footer" component={<Footer/>} />
    </div>
  );
}

export default App;
