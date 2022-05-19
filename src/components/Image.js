import React, { useState, useRef, ReactNode, forwardRef } from "react";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import "./../css/styles.css";
import testImage from './../img/test.jpg'




const Image = (props) => (

				<React.Fragment>
			
				
				<svg
				
				className="imageTest"
				style={{
				filter: `${props.sat}(${props.satVal}%)
				${props.contrast}(${props.contrastVal}%)
				${props.brightness}(${props.brightnessVal}%)
				${props.hue}(${props.hueVal}deg)
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
								intercept={props.red1Val}
							/>
							<feFuncG
								type="linear"
								slope="1"
								intercept={props.blue1Val}
							/>
							<feFuncB
								type="linear"
								slope="1"
								intercept={props.green1Val}
							/>
						</feComponentTransfer>
					</filter>
				</defs>
				<image
					xlinkHref={testImage}
					width="100%"
					height="100%"
					filter="url(#Linear)"
					transform="scale(1)"
				/>

			</svg>	
			</React.Fragment>
			)

export default Image
