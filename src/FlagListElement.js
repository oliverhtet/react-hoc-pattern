import CountryFlag from "./CountryFlag";
import useHover from "./useHover";
import React from "react";
function FlagListElement(props){
const [hoverRef,hovering] = useHover();

return (
    <div ref={hoverRef} {...props}>
        {hovering && <div id="hover">Mouse Hover</div>}
        <div id="list">
        {props.data.map((country, index) => (
        <div className="country-card" key={index}>
          <p>Name: {country.name.common}</p>
          <p>Flag:</p>
          {country.flags && (
            <img src={country.flags.png} alt="Flag" />
          )}
        </div>
      ))}
        </div>
    </div>
);
}

export default CountryFlag(
    FlagListElement,
    "https://restcountries.com/v3.1/all");
