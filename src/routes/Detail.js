import React from "react";
import "./Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const{location,history} = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return (
            <div className="detailBox">
                <img src={location.state.poster} alt="poster"/>
                <span>{location.state.title}</span>
                <p className="detailSummary">{location.state.summary}</p>
            </div>
            );
        } else{
            return null;
        }
        
    }
}

export default Detail;