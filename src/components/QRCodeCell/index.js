import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  dot: PropTypes.bool,
  size: PropTypes.number,
  transformX: PropTypes.number.isRequired,
  transformY: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeCell = ({ d, fill, transformX, transformY, dot }) => {
  if (dot) {
    return  <circle r={size}  fill={fill} transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`} />;
  } 
  return <path d={`M 0 0 L ${size} 0 L ${size} ${size} L 0 ${size} Z`} fill={fill} transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`} />;
}

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
