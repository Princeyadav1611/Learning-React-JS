import Navbar from './Navbar.jsx';
import PageContent1 from './PageContent1';

const Section1 = ({cards}) => {
    return(
        <div className="h-screen w-full">
            <Navbar />
            <PageContent1 cards={cards} />
        </div>
    )
}
export default Section1;