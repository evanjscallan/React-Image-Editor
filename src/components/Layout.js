import React from 'react';
import Filter from './Filter'
import './../css/styles.css'


export default class Layout extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			sourceImage: "https://mms.businesswire.com/media/20210624005255/en/1134890/4/Press_Release_Image_1.jpg?download=1",
		}

	}


	render(props){
		


	return(
		<div className='layout flex-row-ctr'>
		<h1>Fire-Brick Luxroom</h1>
			<Filter
			satParam='saturate'
			contrastParam='contrast'
			hueParam='hue-rotate'
			brightnessParam='brightness'
			sourceImage={this.state.sourceImage}
			/>
		</div>

		)
	}

}

