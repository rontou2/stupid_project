import star from './images/star.png'
import './newStars.css';

const make_stars = (number) => {
	
const starsForNum = (number) => {
let stars = [];
for(let i=0; i < number; i++){
stars.push(<img src={star} />)
}
return stars;	
}
	
return(
<div className="starsLine">
{starsForNum(number)}
</div>
)
}

export default make_stars