import React, { useState } from 'react';

const CheckboxProgram = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    // This function will be called when the checkbox is clicked
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <p>{isChecked ? 'Checkbox is checked' : 'Checkbox is unchecked'}</p>
    </div>
  );
};

export default CheckboxProgram;
