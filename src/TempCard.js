import React from 'react';

const TempCard = (props) => {
  const { data } = props;

  return (
    <div>
      {data.cod !== '404' ? (
        <div>
          <p>temp -{Math.floor(data.main.temp - 273.15)}</p>
          <p>humidity -{data.main.humidity}</p>
          <p>wind - {data.wind.speed}</p>
          <p>lat - {data.coord.lat}</p>
          <p>long-{data.coord.lon}</p>
        </div>
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
};
export default TempCard;
