import React, { ChangeEventHandler, ReactNode } from "react";

interface CustomInputProps {
 type: string;
 label: string;
 icon?: ReactNode;
 placeholder?: string;
 inputId: string;
 labelStyles: string;
 inputStyles: string;
 iconStyles?: string;
 handleChange: ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
 >;
 options?: { value: string; label: string }[];
 rows?: number;
 accept?: string;
 multiple?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
 type,
 label,
 icon,
 placeholder,
 inputId,
 labelStyles,
 inputStyles,
 iconStyles,
 handleChange,
 options,
 rows,
 accept,
 multiple,
}) => {
 const renderInput = () => {
  switch (type) {
   case "textarea":
    return (
     <textarea
      id={inputId}
      placeholder={placeholder}
      className={inputStyles}
      onChange={handleChange}
      rows={rows || 3}
     />
    );
   case "select":
    return (
     <select id={inputId} className={inputStyles} onChange={handleChange}>
      {options?.map((option) => (
       <option key={option.value} value={option.value}>
        {option.label}
       </option>
      ))}
     </select>
    );
   case "file":
    return (
     <input
      id={inputId}
      type='file'
      className={inputStyles}
      onChange={handleChange}
      accept={accept}
      multiple={multiple}
     />
    );
   default:
    return (
     <input
      id={inputId}
      type={type}
      placeholder={placeholder}
      className={inputStyles}
      onChange={handleChange}
     />
    );
  }
 };
 return (
  <div className='mb-4 flex flex-col'>
   <label className={labelStyles} htmlFor={inputId}>
    {icon && <span className={iconStyles}>{icon}</span>}
    {label}
   </label>
   {renderInput()}
  </div>
 );
};

export default CustomInput;
