/* @flow */
import normalizeColor from 'normalize-css-color';
import type { Color } from '../types';

const convertToColor = (input: Color): MSColor => {
  const nullableColor: ?number = normalizeColor(input);
  const colorInt: number = nullableColor == null ? 0x00000000 : nullableColor;
  const { r, g, b, a } = normalizeColor.rgba(colorInt);

  return MSColor.colorWithRGBADictionary({ r: r / 255, g: g / 255, b: b / 255, a });
};

module.exports = convertToColor;
