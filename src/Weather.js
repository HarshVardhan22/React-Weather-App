import React from "react";

const Weather = ({description,city,country,error,temperature}) => {
    return(
        <div>
            {city && country && <h2>{city} , {country}</h2>}
            {temperature && <p>{temperature}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;