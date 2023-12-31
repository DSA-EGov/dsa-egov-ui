export interface ButtonInputProps {
  placeholder?: string;
  className?: string;
  onSubmit?: (text: string) => void | Promise<void>;
  lengthLimit?: number;
  focusOnLoad?: boolean;
}
