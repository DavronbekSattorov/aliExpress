import logo from '../img/logoo.png'
import { BsSearch } from 'react-icons/bs';
import { BiCartAlt } from 'react-icons/bi';

const Header = () => {
    return(
        <div className="header">
            <div className="header-wrap">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="header-search-wrap">
                    
                    <div className="header-search">
                        <div className='header-search-input'>
                            <input type="text" placeholder='Search your item...'/>
                            <div className='hot-words'>
                                <button>mobile phones</button>
                                <button>knife</button>
                                <button>bag</button>
                                <button>shoes</button>
                                <button>dress</button>
                            </div>

                        </div>
                        <div className='header-search-select'>
                            <select name="" id="">
                                <option value=""> All Categories</option>   
                                <option value="">Women's Fashion</option> 
                            </select>
                        </div>
                        <div className='header-search-button'>
                            <button><BsSearch/> </button>
                        </div>

                    </div>

                </div>

                <div className="header-addToCart">
                    <div className='header-addToCart-icon'>
                        <BiCartAlt />
                        <div className='header-addToCart-count'>0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;