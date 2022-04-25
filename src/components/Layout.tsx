import React, { useState } from 'react';
import Filter from './Filter.tsx'
import './../css/styles.css'
import traceImage from './../img/trace.jpg'


interface Props {
	sourceImage: string,
	setSourceImage: string
}

const Layout = (Props: any) => {
		const [ sourceImage, setSourceImage ] = useState<string>(traceImage)
	return(
		<div className='layout'>	
		<Filter
			satParam='saturate'
			contrastParam='contrast'
			hueParam='hue-rotate'
			brightnessParam='brightness'
			sourceImage={sourceImage}		
		/>
		</div>
		)
}


export default Layout

