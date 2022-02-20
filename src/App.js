import './App.css';
import make_card from './makeCard.js'
import make_big_card from './makeBigCard.js'

const cdcDataOne =
"The canine teeth in our region are spotless! Our primary care team never misses a day, and our current customers indicate a very high level of satisfaction. Surveys indicate that 100% of our current customers intend to stay on our Canine Dental Care plan for the upcoming year."

const cdcDataTwo =
"Upon review, we will be denying requests for new staff. Our statistics indicate that current staffing is adequate for CDC, considering we expect no new CDC plans. We are considering integrating our current Child Dental Care plan, making a new CCDC measure (Child and Canine Dental Care). This plan is on hold due to the current non-compliance on the Child Dental Care plan, so for the time being, the two plans will be separate."

const coaOne =
"Our region leads the nation in COA, due largely to the contributions of one very confused old lady. We have found our COA cannot tell the difference between a dishwasher, refridgerator, and washing machine."

const coaTwo =
"Other factors for our five star COA are our strong lost phones, lost keys, and 80's fashion measures. We met all new measures, such as mixing up names, baking oats into pans, and forgetting to eat due to working 25/7 (24 hours a day wasn't quite enough to keep up with everything)"

const colData =
"There are \'not enough stars\' to properly indicate how compliant we are with this measure!"

const trcData =
"Clients on our TRC measure have charged in excess of $100 on /'Itunes crap/', wrecked vans in broad daylight, without another car on the road, and started \"an aquarium business\"."

const spcData =
"Our region is currently lacking many SPC systems. Included are: a typewriter, horse and buggy, abacus, mimeograph, and rotary phone. We are in serious danger of a non-compliance if this keeps up."

const mrpData =
"We have a ton of MRP measures. For our MRP, we send PHI to any random fax number, ask our employees to work more measures without more staff, and hire bosses that don't really know what their employees do."

const cbpData =
"We\'re reorganizing our CBP department, and expected this non-compliance since our CBP measure is zero."

function App() {
  return (
    <div className="App">
		<div className="title">"Extremely Accurate"™ Anthem Measures Status Report</div>
		<div className="cardRow topRow">
		{make_big_card(5, "cdc: Canine Dental Care", cdcDataOne, cdcDataTwo)}
		{make_big_card(5, "coa: Clueless Older Adults", coaOne, coaTwo)}
		</div>
		<div className="cardRow">
		{make_card(5, "col: Centuries Officially Lived", colData)}
		{make_card(4, "trc: Totally Ridiculous Children", trcData)}
		{make_card(1, "spc: Systems Predating Christ", spcData)}
		{make_card(5, "mrp: Most Retarded People", mrpData)}
		{make_card(0, "cbp: Current Bread Production", cbpData)}
		</div>
    </div>
  );
}

export default App;
