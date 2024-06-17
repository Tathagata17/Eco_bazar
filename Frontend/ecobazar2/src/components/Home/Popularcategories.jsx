import React from 'react'
import Cardshome from '../Cards/Cardshome'
import fruits from '../../assets/fruits.png'
import vege from '../../assets/vegetables.png'
import dairy from '../../assets/dairy.png'
import meat from '../../assets/meat.png'
import grocery from '../../assets/grocery.png'
import bakery from '../../assets/bakery.png'





function Popularcategories() {
  return (
    <>
    <div className='ml-32'>
        <ul className='flex gap-12'>
            <li>
                <Cardshome img={fruits}/>
               Fresh Fruits 
            </li>
            <li>
            <Cardshome img={vege}/>
                Fresh vegetables 
            </li>
            <li>
            <Cardshome img={dairy}/>
                Dairy
            </li>
            <li>
            <Cardshome img={meat}/>
                Meat
            </li>
            <li>
            <Cardshome img={bakery}/>
                Bakery
            </li>
            <li>
            <Cardshome img={grocery}/>
                Grocery
            </li>
        </ul>
    </div>
    </>
  )
}

export default Popularcategories