import make_stars from './makeStars.js'

const make_card = (starNumber, title, contents) => {
return(
<div className="starCard">
{make_stars(starNumber)}
<div className="starTitle">{title}</div>
<div className="cardContents">{contents}</div>
</div>
)
}

export default make_card