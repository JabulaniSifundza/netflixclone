import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useDispatch } from "react-redux";
import { removeMovieFromLiked } from "../store";
import video from "../assets/video.mp4";

export default function Card({movieData, isLiked = false}){
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	return <Container 
	onMouseEnter={()=> setIsHovered(true)}
	onMouseLeave={()=> setIsHovered(false)}
	>
		<img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" />

	{
		isHovered && (
			<div className="hover">
				<div className="image-video-container">
				<img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" 
				onClick={()=> navigate("/player")}
				/>
				<video src={video} autoplay loop controls muted onClick={()=> navigate("/player")} />
				</div>
				<div className="info-container flex column">
				<h3 className="name" onClick={()=> navigate("/player")}>{movieData.name}</h3>
				<div className="icons flex j-between">
					<IoPlayCircleSharp title="play"
					onClick={()=> navigate("/player")}
					/>
					<RiThumbUpFill title="Like"/>
					<RiThumbDownFill title="Dislike"/>
					{
						isLiked ? (
							<BsCheck title="Remove From List" />
						) : (
							<AiOutlinePlus title="Add to my list" />
						)
					}
				</div>
				<div className="info">
				<BiChevronDown title="More Info" />
				</div>
				
				</div>
			</div>
		)
	}
	</Container>
		
	
}

const Container = styled.div`



`