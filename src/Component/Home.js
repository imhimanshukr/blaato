import Banner from './SubComponent/Banner'
import Services from './SubComponent/Services';
import Offer from './SubComponent/Offer';
import MakeAQuote from './SubComponent/MakeAQuote';
import RateCalculator from './SubComponent/RateCalculator';

const Home = () =>{
    return(
        <>
            <Banner/>
            <Services/>
            <Offer/>
            <MakeAQuote/>
            <RateCalculator/>
        </>
    )
}
export default Home;