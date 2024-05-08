import React, { useContext } from 'react';
import NavBar1 from '../NavBar/Navabar1/NavBar1'
import CardsHome from './EquipListCard/CardsHome';
import UserContext from '../../Session/Session';
import './BuyEquip.css';

// Removed unused Sort component
// const Sort = () => {
//     return (
//         <div className="sort-bar">
//             this is sort list
//         </div>
//     );
// };

const BuyEquip = () => {
    // Removed unused value and setValue destructured from context
    const { /* value, setValue */ } = useContext(UserContext);
    return (
        <>
            <NavBar1 />
            <div className="bg-colo3">
                {/* <Sort/> */}
                <CardsHome />
            </div>
        </>
    );
};

export default BuyEquip;
