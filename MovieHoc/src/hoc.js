import React, { Component } from 'react';
import './LoaderHOC.css';


const LoaderHOC = (WrappedComponent)=>{
  
    return class LoaderHOC extends Component {
    
         render () {
                //console.log(this.props.loading)
           return  (this.props.loading) ? <div className="loader"> </div> : <WrappedComponent {...this.props} />;
         }
    }
}
export default LoaderHOC;