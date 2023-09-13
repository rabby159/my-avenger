/* eslint-disable react/prop-types */

import CheckDetails from "../CheckDetails/CheckDetails";


const CheckList = ({bookNow, remaining, teamCost}) => {
    


    return (
        <div className="md:w-1/4 text-white">
            <h2 className="text-center text-2xl font-semibold mb-5">Team Details</h2>
            <h2>Producer: Error Corporation </h2>
            <h2 className="mb-5">Team budget: $50,000</h2>
            <h2 className="text-2xl text-center mb-5">Total Team Member: {bookNow.length}</h2>
            <h2 className="text-2xl text-center mb-5">Team Cost: ${teamCost}</h2>
            <h2 className="text-2xl text-center mb-5">Remaining Money: ${remaining}</h2>
            {
                bookNow.map((checkBook, idx) => <CheckDetails key={idx} checkBook={checkBook}></CheckDetails>)
            }
        </div>
    );
};

export default CheckList;