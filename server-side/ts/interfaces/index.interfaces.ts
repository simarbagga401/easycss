import { CssProperties } from './cssProps.interfaces';

type htmlClass = string;
type htmlElement = string;
type htmlId = string;
type scssVar = 'scssVar';

export interface StyleRequest {
  style: {
    element: htmlClass | htmlElement | htmlId | scssVar;
    property: CssProperties;
    value: string | number;
  };
  filePath: string;
}
