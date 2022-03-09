import { BiMenu } from 'react-icons/bi';
import { GiClothes } from 'react-icons/gi';
import { GiRolledCloth } from 'react-icons/gi';
import { GiSmartphone } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { GiPhotoCamera } from 'react-icons/gi';
import { GiJewelCrown } from 'react-icons/gi';
import { GiSofa } from 'react-icons/gi';
import { MdOutlineToys } from 'react-icons/md';
import { GiConverseShoe } from 'react-icons/gi';
import { BiBaseball } from 'react-icons/bi';
import { GiMirrorMirror } from 'react-icons/gi';
import { AiOutlineCar } from 'react-icons/ai';
import { GiWashingMachine } from 'react-icons/gi';

const Categories = () => {
    return(
        <div className="categories-wrap">
            <div className='categories-wrap-title'>
                <BiMenu className='categories-wrap-icon'/> 
                <h4> Categories </h4>
            </div>
            <div className='categories-name'>
                <GiRolledCloth className='categories-name-icon'/>
                <p>Women's Fashion</p>
            </div>
            <div className='categories-name'>
                <GiClothes className='categories-name-icon'/>
                <p>Men's Fashion</p>
            </div>
            <div className='categories-name'>
                <GiSmartphone className='categories-name-icon'/>
                <p>Phones & Telecommunications</p>
            </div>
            <div className='categories-name'>
                <MdComputer className='categories-name-icon'/>
                <p>Computer, Office & Security</p>
            </div>
            <div className='categories-name'>
                <GiPhotoCamera className='categories-name-icon'/>
                <p>Consumer Electronics</p>
            </div>
            <div className='categories-name'>
                <GiJewelCrown className='categories-name-icon'/>
                <p>Jewelry & Watches</p>
            </div>
            <div className='categories-name'>
                <GiSofa className='categories-name-icon'/>
                <p>Home, Pet & Appliances</p>
            </div>
            <div className='categories-name'>
                <GiConverseShoe className='categories-name-icon'/>
                <p>Bags & Shoes</p>
            </div>
            <div className='categories-name'>
                <MdOutlineToys className='categories-name-icon'/>
                <p>Toys, Kids & Babies</p>
            </div>
            <div className='categories-name'>
                <BiBaseball className='categories-name-icon'/>
                <p>Outdoor Fun & Sports</p>
            </div>
            <div className='categories-name'>
                <GiMirrorMirror className='categories-name-icon'/>
                <p>Beauty, Health & Hair</p>
            </div>
            <div className='categories-name'>
                <AiOutlineCar className='categories-name-icon'/>
                <p>Automobiles & Motorcycles</p>
            </div>
            <div className='categories-name last'>
                <GiWashingMachine className='categories-name-icon'/>
                <p>Home Improvement & Tools</p>
            </div>
        </div>
    )
}

export default Categories;