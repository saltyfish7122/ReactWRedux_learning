import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    // work the same as it in java
    state = {lat:null, errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message})
            );
    }

    componentDidUpdate(){
        console.log('My component is just updated - it rerendered');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>
                Error: {this.state.errorMessage}
            </div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat} />
        }
        return <Spinner message ="Please Accept location request"/>;
    }

    // React says we have to define render!
    render() { 
       return(
       <div>
           {this.renderContent()}
       </div>
       );
    }
}

/* show instance of App,
provide reference to that div with id of root inside of our index
 */
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
