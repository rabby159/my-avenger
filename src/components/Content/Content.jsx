/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";


const Content = ({handleBookNow}) => {
  const [content, setContent] = useState([]);

  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setContent(data))
  }, [])
    return (
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
            {
              content.map(actor=> <Actor key={actor.id} actor={actor}
              handleBookNow={handleBookNow}></Actor>)
            }
        </div>
    );
};

export default Content;