import { purple, blue, neutral, yellow, green, red } from "./colors"
import { primaryFont, secondaryFont } from "./typography"

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
}

export const darkTheme = {
  primaryColor: purple[400],
  bgColor: neutral[900],
  textColor: neutral[200],
  disabled: neutral[500],
  primaryFont: primaryFont,
  secondaryFont: secondaryFont,
  scrollThumb: neutral[210],
  scrollThumbHover: neutral[220],
}
