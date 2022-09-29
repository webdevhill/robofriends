import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    // if(true){
    //     throw new Error('Headache');
    // }
    return (
        <div>
            {
                robots.map((user, i) => { 
                    return (
                        <Card
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;

// oct. 4 10:00 a.m. 3490