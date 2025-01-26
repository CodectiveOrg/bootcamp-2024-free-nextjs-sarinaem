import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import clsx from "clsx";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./select.module.css";

type SelectProps = {
  isFloating?: boolean;
  label?: string;
  placeholderText?: string;
  optionsList: SelectOptionType[];
  currentOption?: SelectOptionType;
  onOptionChange?: (value: SelectOptionType) => void;
  onDropdownToggle?: (isOpen: boolean) => void;
};

const SelectDropdown: React.FC<SelectProps> = ({
  isFloating,
  label,
  placeholderText,
  optionsList,
  currentOption,
  onOptionChange,
  onDropdownToggle,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const maxLabelLength = useMemo(() => {
    return Math.max(
      placeholderText?.length || 0,
      ...optionsList.map((option) => option.label.length),
    );
  }, [placeholderText, optionsList]);

  const handleOptionSelect = useCallback(
    (option: SelectOptionType) => {
      if (option !== currentOption) {
        onOptionChange?.(option);
      }
    },
    [onOptionChange, currentOption],
  );

  const handleOptionClick = (
    event: React.MouseEvent<HTMLLIElement>,
    option: SelectOptionType,
  ) => {
    event.stopPropagation();
    handleOptionSelect(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen) {
      setActiveIndex(0);
    }
    onDropdownToggle?.(dropdownOpen);
  }, [dropdownOpen, onDropdownToggle]);

  useEffect(() => {
    const currentDropdown = dropdownRef.current;
    if (!currentDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target !== currentDropdown) return;

      switch (event.code) {
        case "Enter":
        case "Space":
          event.preventDefault();
          if (dropdownOpen) {
            handleOptionSelect(optionsList[activeIndex]);
          }
          setDropdownOpen((prev) => !prev);
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          if (!dropdownOpen) {
            setDropdownOpen(true);
            break;
          }
          const newIndex = activeIndex + (event.code === "ArrowDown" ? 1 : -1);
          if (newIndex >= 0 && newIndex < optionsList.length) {
            setActiveIndex(newIndex);
          }
          break;
        case "Escape":
          event.preventDefault();
          setDropdownOpen(false);
          break;
      }
    };

    currentDropdown.addEventListener("keydown", handleKeyDown);
    return () => {
      currentDropdown.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen, activeIndex, optionsList, handleOptionSelect]);

  return (
    <div
      ref={dropdownRef}
      onBlur={() => setDropdownOpen(false)}
      onClick={() => setDropdownOpen((prev) => !prev)}
      tabIndex={0}
      className={clsx(
        styles.container,
        dropdownOpen && styles.open,
        isFloating && styles.floating,
      )}
    >
      {label && <span className={styles.label}>{label}: </span>}
      <span
        className={styles.selectedValue}
        style={{ minInlineSize: `${maxLabelLength}ch` }}
      >
        {currentOption?.label || placeholderText || String.fromCharCode(160)}
      </span>
      <div className={styles.caret}></div>
      <ul className={styles.optionsList}>
        {optionsList.map((option, index) => (
          <li
            key={option.value}
            className={clsx(
              styles.optionItem,
              option === currentOption && styles.selected,
              index === activeIndex && styles.highlighted,
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={(e) => handleOptionClick(e, option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropdown;
