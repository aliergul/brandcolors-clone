import { useEffect, useRef, useState } from "react";
import { MdDownload } from "react-icons/md";

const options = [
  { value: "", label: "Please Select" },
  { value: "ase", label: "ASE (Adobe)" },
  { value: "css", label: "CSS" },
  { value: "scss", label: "SCSS" },
  { value: "less", label: "LESS" },
  { value: "stylus", label: "Stylus" },
];

const Dropdown = ({ selectedBrands, setCssMethod }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    setCssMethod(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <MdDownload onClick={() => setIsOpen((prev) => !prev)} />
      {selectedBrands?.length > 0 && isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
