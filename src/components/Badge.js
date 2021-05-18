import React from 'react';
import confLogo from '../images/dragon.png';
import './styles/Badge.css';

class Badge extends React.Component {
	render(){
		//this.props;
		//const firstName = "Daniel";
		//const lastName = "Bermúdez";
		return (
		<div className = "badge">
			<div className = "badge_header">
				<img src= {confLogo} alt="Logo"/>
			</div>
			
			
			<div className="badge_section-name">
				<img className= "badge_avatar" src= {this.props.avatar} alt="Avatar"/>
				<h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
			</div>
			
			
			<div className="badge_section-info">
				<p> {this.props.jobTitle} </p>
				<p> {this.props.twitter} </p>
			</div>
			
			<div className="badge_footer">
				#platziconf
			</div>
		
		</div>);
	}
}

export default Badge;
