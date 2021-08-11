import {useState} from 'react';

function DinnerSupplies({guestList}) {
    console.log('guestList', guestList);
    
    return (
        <>
            <h2>Dinner Supplies</h2>
            <div>
                Spoons: {guestList.length * 2}
            </div>
            <div>
                Forks: {guestList.length * 2}
            </div>
            <div>
                Knives: {guestList.length * 2}
            </div>
        </>
    ) // end return
} // end DinnerSupplies

export default DinnerSupplies;
 