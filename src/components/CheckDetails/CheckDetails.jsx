/* eslint-disable react/prop-types */

const CheckDetails = ({checkBook}) => {
    return (
        <div className="p-3 bg-slate-700 mb-3 rounded-md flex justify-between">
            <h3 className="text-xl font-semibold">{checkBook.name}</h3>
            <button className="text-red-700 bg-white rounded-full p-1">X</button>
        </div>
    );
};

export default CheckDetails;