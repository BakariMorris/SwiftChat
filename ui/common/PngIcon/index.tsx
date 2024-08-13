import { PngIconProps } from "../types";

export const PngIcon = ({ src, alt, className}: PngIconProps) => (
  <img className={className} src={`/img/png/${src}`} alt={alt} />
);
