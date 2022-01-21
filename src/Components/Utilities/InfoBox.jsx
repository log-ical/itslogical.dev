import React from 'react';

export const InfoBox = ({ label, bigText, smallText, }) => {
  return (
    <>
    <div className="info_box">
        <div className="bigText">
        <h3>{label}</h3>    
            {bigText}
        </div>
        <div className="smallText">
            {smallText}
        </div>
    </div>
    </> 
  );
};


export default InfoBox;
