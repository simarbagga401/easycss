export interface CssColor {
  color?: 'color';
  backgroundColor?: 'background-color';
}

export interface CssFont {
  fontFamily?: 'font-family';
  fontSize?: 'font-size';
  fontWeight?: 'font-weight';
}

export interface CssBoxModel {
  border?: 'border';
  margin?: 'margin';
  padding?: 'padding';
  outline?: 'outline';
}

export interface CssFlex {
  flex?: 'flex';
  flexDirection?: 'flex-direction';
  justifyContent?: 'justify-content';
  alignItems?: 'align-items';
}

export interface CssProperties
  extends CssBoxModel,
    CssColor,
    CssFlex,
    CssFont,
    CssFont {
  border: 'border';
}
