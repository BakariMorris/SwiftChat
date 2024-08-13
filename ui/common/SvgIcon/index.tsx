import { SvgIconProps } from "../types";

export const SvgIcon = ({ className, src, width, height }: SvgIconProps) => (
  <img className={className} src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
