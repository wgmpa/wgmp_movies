import React from "react";
import { IconType } from "react-icons";

interface IconsProps {
  icon: IconType;
  size: string | number;
  color: string;
}

const IconsGeneral: React.FC<IconsProps> = ({
  icon: IconComponent,
  size,
  color,
}) => {
  return <IconComponent size={size} color={color} />;
};

export default IconsGeneral;
