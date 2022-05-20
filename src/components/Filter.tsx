import React, { useState, useRef } from "react";
import "./../css/styles.css";
import hueScale from "./../img/hueScaleRefactored.png";
import Image from "./Image";
import fireBrickIcon from "./../img/Logo.png";

interface Props {
	satParam: string;
	contrastParam: string;
	brightnessParam: string;
	hueParam: string;
	sourceImage: string;
}

const Filter = ({
	sourceImage,
	satParam,
	contrastParam,
	brightnessParam,
	hueParam,
}: Props): JSX.Element => {
	const [satVal, setSatVal] = useState<number>(100);
	const [brightnessVal, setBrightnessVal] = useState<number>(100);
	const [contrastVal, setContrastVal] = useState<number>(100);
	const [hueVal, setHueVal] = useState<number>(0);
	const [red1Val, setRed1Val] = useState<number>(0);
	const [blue1Val, setBlue1Val] = useState<number>(0);
	const [green1Val, setGreen1Val] = useState<number>(0);
	const [imageState] = useState<string>(
		"https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
	);

	const ref = useRef<HTMLDivElement>(null);

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
		setContrastVal(100);
		setHueVal(0);
		setRed1Val(0);
		setBlue1Val(0);
		setGreen1Val(0);
	};

	return (
		<React.Fragment>
			<div className="left-container">
				<div className='flex-row'>
				<img
					className="icon-main"
					src={fireBrickIcon}
					alt="logo icon"
				/>
				<h1>Fire-Brick Brightroom&trade;</h1>
				</div>
				<Image
					ref={ref}
					sat="saturate"
					satVal={satVal}
					contrast="contrast"
					contrastVal={contrastVal}
					brightness="brightness"
					brightnessVal={brightnessVal}
					hue="hue-rotate"
					hueVal={hueVal}
					red1Val={red1Val}
					green1Val={green1Val}
					blue1Val={blue1Val}
					source={imageState}/>
				<div className="button-box adjust-up">
					<button onClick={resetButton}>RESET</button>
				</div>
			</div>
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
								max={200}
								min={0}
								value={contrastVal}
								onChange={(e) => onContrastChange(e)}/>
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
								onChange={(e) => onBrightnessChange(e)}/>
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
								onChange={(e) => onHueChange(e)}/>
						</li>
						<img
							className="hueScale"
							src={hueScale}
							alt="hue scale"/>
					</ul>
				</div>
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
							onChange={(e) => onRed1Change(e)}/>
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
							onChange={(e) => onBlue1Change(e)}/>
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
							onChange={(e) => onGreen1Change(e)}/>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Filter;



