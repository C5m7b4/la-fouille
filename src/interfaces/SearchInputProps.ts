export interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  mainDivStyle?: object;
  mainDivClassName?: string;
  labelStyle?: object;
  labelClassName?: string;
  labelText?: string;
  inputStyle?: object;
  inputClassName?: string;
  inputPlaceholder?: string;
}
