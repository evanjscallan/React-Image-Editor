import React, { useState } from 'react';
import Filter from './Filter.tsx'
import './../css/styles.css'
import traceImage from './../img/trace.jpg'


interface Props {
	sourceImage: string,
	setSourceImage: string
}

const Layout = (Props: any) => {
	return(
		<div className='layout'>	
		<Filter/>
		</div>
		)
}


export default Layout

