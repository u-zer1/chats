export interface IFormFields<T> {
  id?: string;
  label?: string;
  maxLength?: number;
  maxHeight?: number;
  minHeight?: number;
  IconAfter?: any;
  IconBefore?: any;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
  name: string;
  value?: string;
  IconBeforeClick?: any;
  IconAfterClick?: any;
  onChange: (key: React.ChangeEvent<T>) => void;
}
