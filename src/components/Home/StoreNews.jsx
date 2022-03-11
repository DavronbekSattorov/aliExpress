import { BiUserCircle } from 'react-icons/bi';

const StoreNews = () => {
    return(
        <div className="storeNews-wrap">
            <div className="stories-update">
                <div className="stories-pagination">
                            
                </div>
                <div className="stories-discount">
                    <div className="stories-discount-desc">

                    </div>
                    <div className="stories-discount-pagination">

                    </div>

                </div>
            </div>

            <div className="stories-welcomeTo">
                    <div className='stories-sign'>
                        <BiUserCircle className='stories-user-icon'/>
                        <h4>Welcome to AliExpress</h4>
                        <button className='stories-join'>Join</button>
                        <button className='stories-signUp'>Sign in</button>
                    </div>

                    <div className='stories-welcomeTo-offer'>

                    </div>
            </div>
        </div>
    )
}

export default StoreNews;