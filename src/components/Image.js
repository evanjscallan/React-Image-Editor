import React from 'react';
import Filter from './Filter'
import './../css/styles.css'


export default class Image extends React.Component{

	constructor(props){
		super(props)
		

	}


	render(props){
		


	return(
		<div className='layout flex-row-ctr'>
		{props.children}
		</div>

		)
	}

}

