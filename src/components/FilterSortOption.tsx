import { LogoCheck } from "./SVGs/SVGs";

interface FilterSortOptionProps {
  label: string;
  currentLabel: string;
  onClick: () => void;
}

export const FilterSortOption: React.FC<FilterSortOptionProps> = ({ label, currentLabel, onClick }) => {
  return (
    <p className={`Networks__content__control__filters__button__pannel1__label ${currentLabel === label ? 'selected' : ''}`} tabIndex={0} onClick={onClick}>
      {label}
      {currentLabel === label && <LogoCheck />}
    </p>
  );
}
