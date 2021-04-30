type CssClass = string;
type HtmlElement = string;
type CssId = string;

export interface Layout {
  flex: string;
  grid: string;
  none: string;
}

export interface ColorRequest {
  elementSelector: CssClass | HtmlElement | CssId;
  type: 'background' | 'border' | 'text';
  value: string;
}

export interface BoxModelRequest {
  elementSelector: CssClass | HtmlElement | CssId;
  type: 'border' | 'padding' | 'margin' | 'border-radius';
  value: number;
}

export interface SizeRequest {
  elementSelector: CssClass | HtmlElement | CssId;
  type: 'width' | 'height' | 'text';
  value: number;
}
export interface Position {}

export interface StyleRequest {
  type: BoxModel | Layout | SizeRequest | Position;
  value: string | object;
}
