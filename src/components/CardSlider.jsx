import React, {useState, useEffect} from 'react';
import Card from './Card';
import styled from "styled-components";

export default function CardSlider({data, title}){
	const [showControls, setShowControls] = useState(false);
	const listRef = useRef();
	const [sliderPosition, setSliderPosition] = useState(0);

	return (
	<Container className="flex column"
	onMouseEnter={()=> setShowControls(true)}
	onMouseLeave={()=> setShowControls(false)}>
		<h1>{title}</h1>
		<div className="wrapper">
			<div className={`slider-action left ${!showControls ? "none" : ""}`}>
			
			</div>		
		</div>

		<div className="flex">
		{
			data.map((movie, index)=>{
				return <Card movieData={movie} index={index} key={movie.id}/>
			})
		}
		</div>
	

		
	</Container>
	);
}