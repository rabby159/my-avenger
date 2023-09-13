/* eslint-disable react/prop-types */

const Actor = ({actor}) => {
    const {image, name, role, salary, age, country} = actor;
    return (
        <div>
            <div className="card border text-white shadow-xl">
            <figure><img className="rounded-full mt-3" src={image} alt="Actor" /></figure>
            <div className="card-body">
              <h2 className="card-title font-semibold">{name}</h2>
              <p>{role}</p>
              <p>Age: {age}</p>
              <p>Country: {country}</p>
              <h3>Revenue: {salary}</h3>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Actor;