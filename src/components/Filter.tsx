import React, { useState } from "react";
import "./../css/styles.css";


interface Props {
	satParam: string,
	contrastParam: string,
	brightnessParam: string,
	hueParam: string,
	sourceImage: string
}

const Filter = ({ sourceImage, satParam, contrastParam, brightnessParam, hueParam }: Props): JSX.Element => {
	const [satVal, setSatVal] = useState<number>(100);
	const [brightnessVal, setBrightnessVal] = useState<number>(100);
	const [contrastVal, setContrastVal] = useState<number>(150);
	const [hueVal, setHueVal] = useState<number>(0);
	const [red1Val, setRed1Val] = useState<number>(0);
	const [blue1Val, setBlue1Val] = useState<number>(0);
	const [green1Val, setGreen1Val] = useState<number>(0);

	const onSatChange = (e: number) => {
		document.querySelector("#mainImage");
		setSatVal(e.target.value);
	};

	const onContrastChange = (e: number) => {
		document.querySelector("#mainImage");
		setContrastVal(e.target.value);
	};

	const onBrightnessChange = (e: number) => {
		document.querySelector("#mainImage");
		setBrightnessVal(e.target.value);
	};

	const onHueChange = (e: number) => {
		document.querySelector("#mainImage");
		setHueVal(e.target.value);
	};

	const onRed1Change = (e: number) => {
		document.querySelector("#mainImage");
		setRed1Val(e.target.value);
	};

	const onBlue1Change = (e: number) => {
		document.querySelector("#mainImage");
		setBlue1Val(e.target.value);
	};

	const onGreen1Change = (e: number) => {
		document.querySelector("#mainImage");
		setGreen1Val(e.target.value);
	};

	const resetButton = (event: number) => {
		document.querySelector("#mainImage");
		setSatVal(100);
		setBrightnessVal(100);
		setContrastVal(150);
		setHueVal(0);
		setRed1Val(0);
		setBlue1Val(0);
		setGreen1Val(0);
	};

	return (
		<React.Fragment>
			<div className="left-container">
				<h1>Fire-Brick Brightroom&trade;</h1>
				<div className="button-box flex-row-ctr">
					<button className="flex-row-ctr" onClick={null}>
						IMPORT
					</button>
					<button className="flex-row-ctr" onClick={resetButton}>
						RESET
					</button>
					<button className="flex-row-ctr">EXPORT...</button>
				</div>
			</div>

			<svg
				className="imageTest"
				style={{
				filter: `${satParam}(${satVal}%)
				${contrastParam}(${contrastVal}%)
				${brightnessParam}(${brightnessVal}%)
				${hueParam}(${hueVal}deg)`,
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
								intercept={red1Val}
							/>
							<feFuncG
								type="linear"
								slope="1"
								intercept={-blue1Val}
							/>
							<feFuncB
								type="linear"
								slope="1"
								intercept={-green1Val}
							/>
						</feComponentTransfer>
					</filter>
				</defs>
				<image
					xlinkHref={sourceImage}
					width="100%"
					height="100%"
					filter="url(#Linear)"
					transform="scale(1)"
				/>
			</svg>
			<div className="filterContainer flex-row-ctr">
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
								value={satVal}
								onChange={(e) => onSatChange(e)}
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
								value={contrastVal}
								onChange={(e) => onContrastChange(e)}
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
								value={brightnessVal}
								onChange={(e) => onBrightnessChange(e)}
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
								value={hueVal}
								onChange={(e) => onHueChange(e)}
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
							value={red1Val}
							onChange={(e) => onRed1Change(e)}
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
							value={blue1Val}
							onChange={(e) => onBlue1Change(e)}
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
							value={green1Val}
							onChange={(e) => onGreen1Change(e)}
						/>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Filter;

/*
Color Matrix reference
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

*/