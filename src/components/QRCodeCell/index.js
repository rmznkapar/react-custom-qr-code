import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  dot: PropTypes.bool,
  cellSize: PropTypes.number,
  transformX: PropTypes.number.isRequired,
  transformY: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeCell = ({ d, fill, transformX, transformY, dot }) => {
  if (dot) {
    return  <circle r={cellSize}  fill={fill} transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`} />;
  } 
  return <path d={`M 0 0 L ${cellSize} 0 L ${cellSize} ${cellSize} L 0 ${cellSize} Z`} fill={fill} transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`} />;
}

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
