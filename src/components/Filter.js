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
			red1Val: 0,
			blue1Val: 0,
			green1Val: 0,
	};
		this.onSatChange = this.onSatChange.bind(this);
		this.onContrastChange = this.onContrastChange.bind(this);
		this.onBrightnessChange = this.onBrightnessChange.bind(this);
		this.onHueChange = this.onHueChange.bind(this);
		this.onRed1Change = this.onRed1Change.bind(this);
		this.onBlue1Change = this.onBlue1Change.bind(this);
		this.onGreen1Change = this.onGreen1Change.bind(this);
		this.resetButton = this.resetButton.bind(this);
	
	}



	onSatChange(e) {
		document.querySelector("#mainImage");
		this.setState({ satVal: e.target.value });
	}

	onContrastChange(e2) {
		document.querySelector("#mainImage");
		this.setState({ contrastVal: e2.target.value });
	}

	onBrightnessChange(e3) {
		document.querySelector("#mainImage");
		this.setState({ brightnessVal: e3.target.value });
	}

	onHueChange(e4) {
		document.querySelector("#mainImage");
		this.setState({ hueVal: e4.target.value });
	}

	onRed1Change(e5) {
		document.querySelector("#mainImage");
		this.setState({ red1Val: e5.target.value });
	}

	onBlue1Change(e6) {
		document.querySelector("#mainImage");
		this.setState({ blue1Val: e6.target.value });
	}

	onGreen1Change(e7) {
		document.querySelector("#mainImage");
		this.setState({ green1Val: e7.target.value });
	}

	resetButton(event){
		document.querySelector("#mainImage");
		this.setState({
			satVal: 100,
			contrastVal: 150,
			brightnessVal: 100,
			hueVal: 0,
			red1Val: 0,
			blue1Val: 0,
			green1Val: 0,
		})

	}


	render(props) {
		//NOT FUNCTIONING CURRENTLY.
		const src = this.props.sourceImage

		function downloadImage(src) {
			console.log('clicked')
			  const img = new Image();
			  img.crossOrigin = 'anonymous';  // This tells the browser to request cross-origin access when trying to download the image data.
			  // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
			  img.src = src
			  img.onload = () => {
			    // create Canvas
			    const canvas = document.createElement('canvas');
			    const ctx = canvas.getContext('2d');
			    canvas.width = img.width;
			    canvas.height = img.height;
			    ctx.drawImage(img, 0, 0);
			    // create a tag
			    const a = document.createElement('a');
			    a.download = 'download.jpg';
			    a.href = canvas.toDataURL('image/jpg');
			    a.click();
			  };
			}
	
		return (
			<React.Fragment>
			<div className='left-container'>
			<h1>Fire-Brick Brightroom&trade;</h1>
				<div className='button-box flex-row-ctr'>
					<button className='flex-row-ctr' onClick={this.resetButton}>RESET</button>
					<button className='flex-row-ctr' onClick={() => downloadImage(src)} src={src}>EXPORT...</button>
				</div>
			</div>

			<svg
				className='imageTest'
				style={{
					filter: `${this.props.satParam}(${this.state.satVal}%)
					${this.props.contrastParam}(${this.state.contrastVal}%)
					${this.props.brightnessParam}(${this.state.brightnessVal}%)
					${this.props.hueParam}(${this.state.hueVal}deg)`,
				}}
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
								intercept={this.state.red1Val}
							/>
							<feFuncG
								type="linear"
								slope="1"
								intercept={-this.state.blue1Val}
							/>
							<feFuncB
								type="linear"
								slope="1"
								intercept={-this.state.green1Val}
							/>
						</feComponentTransfer>
					</filter>
				</defs>
				<image
					
					xlinkHref={this.props.sourceImage}
					width="100%"
					height="100%"
					filter="url(#Linear)"
					transform="scale(1)"
				/>
			</svg>
			<div className='filterContainer flex-row-ctr'>
				<div className="essentialEdits">
					<ul className="sliderList flex-row-ctr">
						<h2>Basic Filters</h2>
						<li>
							<label for="sat" className="sliderlist">
								Saturation
							</label>
							<input
								id="sat"
								type="range"
								max={200}
								value={this.state.satVal}
								onChange={(e) => this.onSatChange(e)}
							/>
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
								onChange={(e2) => this.onContrastChange(e2)}
							/>
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
								onChange={(e2) => this.onBrightnessChange(e2)}
							/>
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
								onChange={(e4) => this.onHueChange(e4)}
							/>
						</li>
					</ul>
				</div>
				


				<code>{/*EXPERIMENTAL*/}</code>
				<ul className="sliderList">
					<h2>Color Channels</h2>

					<li>
						<label for="red1" className="sliderlist">
							Red
						</label>

						<input
							id="red1"
							type="range"
							max={1}
							min={-1}
							step={0.01}
							value={this.state.red1Val}
							onChange={(e5) => this.onRed1Change(e5)}
						/>
					</li>

					<li>
						<label for="blue1" className="sliderlist">
							Blue
						</label>

						<input
							id="blue1"
							type="range"
							max={1}
							min={-1}
							step={0.01}
							value={this.state.blue1Val}
							onChange={(e6) => this.onBlue1Change(e6)}
						/>
					</li>

					<li>
						<label for="green1" className="sliderlist">
							Green
						</label>

						<input
							id="green1"
							type="range"
							max={1}
							min={-1}
							step={0.01}
							value={this.state.green1Val}
							onChange={(e7) => this.onGreen1Change(e7)}
						/>
					</li>
				</ul>
				</div>

				
			</React.Fragment>
		);
	}
}

/*
Matrix reference

| R' |     | r1 r2 r3 r4 r5 |   | R |
| G' |     | g1 g2 g3 g4 g5 |   | G |
| B' |  =  | b1 b2 b3 b4 b5 | * | B |
| A' |     | a1 a2 a3 a4 a5 |   | A |
| 1  |     | 0  0  0  0  1 |   | 1 |



     R G B A W
R' | 1 0 0 0 0 |
G' | 0 1 0 0 0 |
B' | 0 0 1 0 0 |
A' | 0 0 0 1 0 |


			        <filter id="darkGreen">
			            <feColorMatrix type="matrix" values={`${this.state.red1Val} 0 0 0 0
			                                                  0 1 0 0 0
			                                                  0 0 1 0 0
			                                                  1 0 0 1 1`} />
			        </filter>

*/


/*



*/
