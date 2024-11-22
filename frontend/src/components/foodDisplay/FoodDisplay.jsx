import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { food_list } from '../../assets/assets';
import FoodItems from '../fooditems/FoodItems';
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

    const { food_item } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index)=>{
                    // {category}

                    {if(category==='Everything' || category===item.category) 
                        {
                        return <FoodItems key={index} id={item._id} name={item.name}  image={item.image} price={item.price} description={item.description}  />

                    }}

                })}
            </div>

            
        </div>


    )
}

export default FoodDisplay
