import {ColorValue} from 'react-native';

export type ReferenceConfig = {
  thickness: number;
  width: number;
  color: ColorValue | String | any;
  type: String;
  dashWidth: number;
  dashGap: number;
  labelText: String;
  labelTextStyle: any;
};
