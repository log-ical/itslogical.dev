import React from 'react';
import './../../CSS/ToggleSwitch.css';

export const ToggleSwitch = ({ desc='', label, isOn, handleToggle, onColor }) => {
    return (
    <>
    <div className="switch-container">
        {label + ' '}
        <div className="switch">
            <input
              checked={isOn}
              onChange={handleToggle}
              className="react-switch-checkbox"
              id={label}
              type="checkbox"
            />
            <label
              style={{ background: isOn && onColor }}
              className="react-switch-label"
              htmlFor={label}
            >
              <span className={`react-switch-button`} />
            </label>
        </div>
        {isOn && `${desc}`}
    </div>
    </>
  );
};

export default ToggleSwitch;