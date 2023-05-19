import { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Select = forwardRef(function Select( props, ref ) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  
  console.log(ref.current);
  
  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, [ref]);
  
  const handleInputClick = () => {
    setShowOptions(!showOptions);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
  }

  const isSelectedOption = (option) => {
    if (!selectedOption) return false;
    return selectedOption === option.value;
  }
  
  return (
    <>
      <div className="form-select__container">
        <input 
          type="text"
          ref={ref}
          onClick={handleInputClick}
          value={selectedOption}
          placeholder={props.placeholder}
          {...props} 
          className="form-select__field" 
          readOnly 
        />
        <img src={props.icon} className="form-select__icon" alt="Icon" />
      </div>
      {showOptions && (
        <div className="form-select__options">
          {props.options.map((option) => (
            <div 
              key={option.id} 
              onClick={() => handleOptionClick(option)}
              className={`form-select__option ${isSelectedOption(option) ? "selected" : ""}`}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </>
  )
});

Select.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
}

export default Select;