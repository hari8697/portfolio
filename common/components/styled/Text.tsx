import styled, { css } from "styled-components"
import { device, typeScale } from "@/common/utils"

const headerStyle = css`
  font-weight: 700;
  line-height: 1.22em;
`

const textStyle = css`
  font-weight: 400;
  line-height: 122%;
`

export const h1Style = css`
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${typeScale.mobile.header2};

  @media ${device.mobileM} {
    font-size: ${typeScale.mobile.header1};
  }

  @media ${device.mobileL} {
    font-size: ${typeScale.mobile.large};
  }

  @media ${device.tablet} {
    font-size: ${typeScale.tablet.xl};
  }

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.header1};
  }

  @media ${device.desktop} {
    font-size: ${typeScale.desktop.xl};
  }

  @media ${device.desktopL} {
    font-size: ${typeScale.desktop.xxl};
  }
`

export const H1 = styled.h1`
  ${headerStyle}
  ${h1Style}
`

export const H2 = styled.h2`
  ${headerStyle}
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${typeScale.mobile.header2};


  @media ${device.tablet} {
    font-size: ${typeScale.tablet.header2};
  }

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.header2};
  }
`

export const H3 = styled.h3`
  ${headerStyle}
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${typeScale.mobile.header3};

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.header3};
  }
`

export const H4 = styled.h4`
  ${headerStyle}
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${typeScale.mobile.header4};

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.header4};
  }
`

export const H5 = styled.h5`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${typeScale.mobile.header5};

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.header5};
  }

  @media ${device.desktopL} {
    font-size: ${typeScale.desktop.header5L};
  }
`

export const Para = styled.p`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${typeScale.mobile.paragraph};


  @media ${device.tablet} {
    font-size: ${typeScale.tablet.paragraph};
  }

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.paragraph};
  }
`

export const HelperText = styled.p`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${typeScale.mobile.helperText};

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.helperText};
  }
`

export const CopyrightText = styled.p`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${typeScale.mobile.copyrightText};

  @media ${device.laptop} {
    font-size: ${typeScale.desktop.copyrightText};
  }
`
