import React from "react";
import "./../css/styles.css";

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			satVal: 100,
			contrastVal: 150,
			brightnessVal: 100,
			hueVal: 0,

		};
		this.onSatChange = this.onSatChange.bind(this);
		this.onContrastChange = this.onContrastChange.bind(this);
		this.onBrightnessChange=this.onBrightnessChange.bind(this);
		this.onHueChange=this.onHueChange.bind(this);
	}

	onSatChange(e) {
		document.querySelector("#catImage");
		this.setState({ satVal: e.target.value });

	}

	onContrastChange(e2) {
		document.querySelector("#catImage");
		this.setState({ contrastVal: e2.target.value });
	}

	onBrightnessChange(e3){
		document.querySelector("#catImage");
		this.setState({ brightnessVal: e3.target.value });
	}

	onHueChange(e4){
		document.querySelector("#catImage");
		this.setState({ hueVal: e4.target.value });
	}

	render(props) {
		return (
			<React.Fragment>
				<img
					className="imageTest"
					id="catImage"
					style={{
						filter: 
						`${this.props.satParam}(${this.state.satVal}%)
						${this.props.contrastParam}(${this.state.contrastVal}%)
						${this.props.brightnessParam}(${this.state.brightnessVal}%)
						${this.props.hueParam}(${this.state.hueVal}deg)`,
					}}
					src={this.props.sourceImage}
					alt="source image"
				/>
				<ul className='sliderList'>
					<li>
						<label for="sat" className="sliderlist">
							Saturation
						</label>
						<input
							id="sat"
							type="range"
							max={200}
							value={this.state.satVal}
							onChange={(e) => this.onSatChange(e)}/>
					</li>

					<li>
						<label for="cont" className="sliderlist">
							Contrast
						</label>
						<input
							id="cont"
							type="range"
							max={250}
							min={50}
							value={this.state.contrastVal}
							onChange={(e2) => this.onContrastChange(e2)}/>
					</li>
					<li>
						<label for="bright" className="sliderlist">
							Brightness
						</label>
						<input
							id="bright"
							type="range"
							max={200}
							min={0}
							value={this.state.brightnessVal}
							onChange={(e2) => this.onBrightnessChange(e2)}/>
					</li>
					<li>
						<label for="hue" className="sliderlist">
							Hue
						</label>
						<input
							id="hue"
							type="range"
							max={360}
							min={0}
							value={this.state.hueVal}
							onChange={(e4) => this.onHueChange(e4)}/>
					</li>
				</ul>
			</React.Fragment>
		);
	}
}
