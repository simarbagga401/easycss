import { CssProperties } from './cssProps.interfaces';

type htmlClass = string;
type htmlElement = string;
type htmlId = string;

export interface StyleRequest {
  style: {
    element: htmlClass | htmlElement | htmlId;
    property: CssProperties;
    value: string | number;
  };
  filePath: string;
}
