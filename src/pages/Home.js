import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import platziImage from '../images/astronauts.svg';
import '../components/styles/Home.css';

class Home extends React.Component {
    render(){
        return (
            <div className="caja_principal">
                <div className="col-1">
                    <img className="confLogo" src={confLogo} alt="logo platzi" />
                    <h1>PRINT BAGES</h1>
                    <p>The easiest way to manage your conference</p>
                    <a className="btn btn-primary">Start now</a>
                </div>

                <div className="col-2">
                    <img className="platziImage" src={platziImage} alt="imagen de platzi" />
                </div>
            </div> 
        )
    }
}




export default Home;