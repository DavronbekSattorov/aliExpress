import Categories from "./Categories";
import StoreNews from './StoreNews';

const Home = () => {
    return(
        <div className="home">
            <div className="home-wrap">
                <div className="categories">
                    <Categories/>
                   
                </div>

                <div className="stories">
                    <StoreNews/>
                </div>
            </div>
        </div>
    )
}

export default Home;