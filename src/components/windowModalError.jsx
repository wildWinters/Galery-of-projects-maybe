import { useState, useLayoutEffect, Fragment, useEffect,useRef } from "react";
import "../css/windowModal.css";


export function WindowModal({ disabled }) {
  const [json, setJson] = useState([]);
  const [idPrefix, setIdPrefix] = useState("season"); 


  useLayoutEffect(() => {
    fetch("/json/season.json")
      .then((x) => x.json())
      .then((json) => setJson(json))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


  return (
    <>
      <div className="moveModal">
        <div className="exitBlock">
          <img
            className="exit"
            onClick={disabled}
            src="https://t3.ftcdn.net/jpg/04/37/51/90/360_F_437519066_OLrSfrnBk5hioGeje96IZ0ejr8Xrozw3.jpg"
            alt="exit"
          />
        </div>

        {json.map((value, index) => (
          <Fragment key={index}>
            <div className={value.className1}>
              <div className={value.className2}>
                <img
                  className="seasonImg"
                  src={value.src}
                  alt={value.alt}
                  onClick={() => setIdPrefix("season")}
                />
                <h3>{value.h3}</h3>
              </div>

              <div className={value.className3}>
                <img
                  className="seasonImg"
                  src={value.src2}
                  alt={value.alt2}
                />
                <h3>{value.h32}</h3>
              </div>
            </div>

          </Fragment>
        ))}
      </div>
    </> 
  );
}
