export interface Layout {
  flex: string;
  grid: string;
  none: string;
}
export interface Color {}

export interface BoxModel {}
export interface Size {}
export interface Position {}

export interface StyleRequest {
  type: BoxModel | Layout | Color | Size | Position;
  value: string | object;
}
