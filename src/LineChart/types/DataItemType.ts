import {ColorValue} from 'react-native';

export type DataItemType = {
  value?: number;
  label: String;
  labelComponent: Function;
  labelTextStyle?: any;
  dataPointText?: string;
  textShiftX?: number;
  textShiftY?: number;
  textColor?: string;
  textFontSize?: number;

  hideDataPoint?: Boolean;
  dataPointHeight?: number;
  dataPointWidth?: number;
  dataPointRadius?: number;
  dataPointColor?: string;
  dataPointShape?: string;
  customDataPoint?: Function;

  stripHeight?: number;
  stripWidth?: number;
  stripColor?: ColorValue | String | any;
  stripOpacity?: number;

  focusedDataPointShape?: String;
  focusedDataPointWidth?: number;
  focusedDataPointHeight?: number;
  focusedDataPointColor?: ColorValue | String | any;
  focusedDataPointRadius?: number;
  focusedCustomDataPoint?: Function;

  dataPointLabelComponent?: Function;
  focusedDataPointLabelComponent?: Function;
  dataPointLabelWidth?: number;
  dataPointLabelShiftX?: number;
  dataPointLabelShiftY?: number;
  showStrip?: Boolean;

  showVerticalLine?: Boolean;
  verticalLineUptoDataPoint?: Boolean;
  verticalLineColor?: string;
  verticalLineThickness?: number;
  pointerShiftX?: number;
  pointerShiftY?: number;
  onPress?: Function;
  
};
