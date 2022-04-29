import React from "react";
import "./../css/styles.css";
import traceImage from './../img/trace.jpg'



export default class Image extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			imageSrc: traceImage,
			
		}
	}
	render(props){
		const { sourceImage } = this.state.imageSrc
		const red1Val = this.props.red1Val
		return(
			<React.Fragment>
				<svg
				id='mainImage'
				className="imageTest"
				style={{
				filter: `${this.props.sat}(${this.props.satVal}%)
				${this.props.contrast}(${this.props.contrastVal}%)
				${this.props.brightness}(${this.props.brightnessVal}%)
				${this.props.hue}(${this.props.hueVal}deg)
				`}}
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 444 250"
			>
				<defs>
					<filter
						id="Linear"
						filterUnits="userSpaceOnUse"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
					>
						<feComponentTransfer>
							<feFuncR
								type="linear"
								slope="1"
								intercept={this.props.red1Val}
							/>
							<feFuncG
								type="linear"
								slope="1"
								intercept={this.props.blue1Val}
							/>
							<feFuncB
								type="linear"
								slope="1"
								intercept={this.props.green1Val}
							/>
						</feComponentTransfer>
					</filter>
				</defs>
				<image
					xlinkHref={traceImage}
					width="100%"
					height="100%"
					filter="url(#Linear)"
					transform="scale(1)"
				/>
			</svg>
			</React.Fragment>
			)
	}

}

/*

	

				*/