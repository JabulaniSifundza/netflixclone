import React, {useState, useEffect} from 'react';
import CardSlider from './CardSlider';

export default function Slider({movies}){
	const getMoviesFromeRange = (from, to)=>{
		return movies.slice(from, to)
	}

	return <div>
	<CardSlider title="Trending Now" data={getMoviesFromeRange(0, 10)} />
	<CardSlider title="Latest Releases" data={getMoviesFromeRange(10, 20)} />
	<CardSlider title="Blockbuster Releases" data={getMoviesFromeRange(20, 30)} />
	<CardSlider title="Leaving Soon" data={getMoviesFromeRange(30, 40)} />
	<CardSlider title="Popular Right Now" data={getMoviesFromeRange(40, 50)} />
	<CardSlider title="Action" data={getMoviesFromeRange(50, 60)} />
	</div>
}