import React from "react";
import "./../css/styles.css";
import testImage from "./../img/test.jpg";

export default class Image extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			image: null
		};
	this.onImageChange = this.onImageChange.bind(this);
	} 

	onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let userImage = event.target.files[0];
			this.setState({
				image: URL.createObjectURL(userImage)
			});
		}
	}

	render(props) {
	return (
	<React.Fragment>

	{ this.state.image === null 
		?
		<svg
			className="imageTest"
			style={{
				filter: `${this.props.sat}(${this.props.satVal}%)
						 ${this.props.contrast}(${this.props.contrastVal}%)
						 ${this.props.brightness}(${this.props.brightnessVal}%)
						 ${this.props.hue}(${this.props.hueVal}deg)`,
			}}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 444 250">
			<defs>
				<filter
					id="Linear"
					filterUnits="userSpaceOnUse"
					x="0%"
					y="0%"
					width="100%"
					height="100%">
					<feComponentTransfer>
						<feFuncR
							type="linear"
							slope="1"
							intercept={this.props.red1Val}/>
						<feFuncG
							type="linear"
							slope="1"
							intercept={this.props.blue1Val}/>
						<feFuncB
							type="linear"
							slope="1"
							intercept={this.props.green1Val}/>
					</feComponentTransfer>
				</filter>
			</defs>
			<image
				xlinkHref={testImage}
				width="100%"
				height="100%"
				filter="url(#Linear)"
				transform="scale(1)"/>
		</svg>
		:
		<svg
			className="imageTest"
			style={{
				filter: `${this.props.sat}(${this.props.satVal}%)
						 ${this.props.contrast}(${this.props.contrastVal}%)
						 ${this.props.brightness}(${this.props.brightnessVal}%)
						 ${this.props.hue}(${this.props.hueVal}deg)`,
			}}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 444 250">
			<defs>
				<filter
					id="Linear"
					filterUnits="userSpaceOnUse"
					x="0%"
					y="0%"
					width="100%"
					height="100%">
					<feComponentTransfer>
						<feFuncR
							type="linear"
							slope="1"
							intercept={this.props.red1Val}/>
						<feFuncG
							type="linear"
							slope="1"
							intercept={this.props.blue1Val}/>
						<feFuncB
							type="linear"
							slope="1"
							intercept={this.props.green1Val}/>
					</feComponentTransfer>
				</filter>
			</defs>
			<image
				xlinkHref={this.state.image}
				width="100%"
				height="100%"
				filter="url(#Linear)"
				transform="scale(1)"/>
		</svg>
}
		<form>
		<div className='button-box importer'>
		<label className='file' for="file">IMPORT...</label>
		<input type='file' id='file' name='file' onChange={this.onImageChange} />
		</div>
		</form>

	</React.Fragment>
	);
	}
}

