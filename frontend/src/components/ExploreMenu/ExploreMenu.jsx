import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu' id='ex-menu '>
            <br /><br /><br /><br /><br />
            <h1>Explore Our Menu</h1>
            <p className='paraExplore-menu'>Choose from a diverse menu with group of dishes,snacks,dinner items,tiffins,Non-veg,veg</p>

            {category}

            <div className='explore-menu-list'>
                {menu_list.map((item,index)=>{
                    return (
                        <div key={index}className='explore-menu-list-item'>
                            <img  className={category===item.menu_name ? 'active' : ''} 
                             onClick={()=>
                                setCategory((prev)=>prev===item.menu_name? 'Everything' : item.menu_name)} 
                                src={item.menu_image} alt="menuimage" />
                            <p>{item.menu_name}</p>

                        </div>

                    )

                })}

            </div>
            <hr />

        </div>





            )
}

            export default ExploreMenu
