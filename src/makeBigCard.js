import make_stars from './makeStars.js'

const make_big_card = (starNumber, title, contents, paragraphTwo) => {
return(
<div className="starCard bigCard">
{make_stars(starNumber)}
<div className="starTitle">{title}</div>
<div className="bigCardContents">{contents}</div>
<div className="bigCardContents">{paragraphTwo}</div>
</div>
)
}

export default make_big_card