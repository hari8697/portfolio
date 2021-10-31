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

interface text_size_template_props {
  mobile?: string
  mobileM?: string
  mobileL?: string
  tablet?: string
  laptop?: string
  laptopL?: string
  desktop?: string
  desktopL?: string
}

const text_size_template = ({
  mobile,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopL,
  desktop,
  desktopL,
}: text_size_template_props) => css`
  font-size: ${typeScale.mobile[mobile]};

  @media ${device.mobileM} {
    font-size: ${typeScale.mobile[mobileM]};
  }
  @media ${device.mobileL} {
    font-size: ${typeScale.mobile[mobileL]};
  }
  @media ${device.tablet} {
    font-size: ${typeScale.tablet[tablet]};
  }
  @media ${device.laptop} {
    font-size: ${typeScale.desktop[laptop]};
  }
  @media ${device.laptopL} {
    font-size: ${typeScale.desktop[laptopL]};
  }
  @media ${device.desktop} {
    font-size: ${typeScale.desktop[desktop]};
  }
  @media ${device.desktopL} {
    font-size: ${typeScale.desktop[desktopL]};
  }
`

export const h1Style = css`
  ${text_size_template({
    mobile: "header2",
    mobileM: "header1",
    mobileL: "large",
    tablet: "xl",
    laptop: "header1",
    desktop: "xl",
    desktopL: "xxl",
  })};
`

export const H1 = styled.h1`
  ${headerStyle}
  
  font-family: ${(props) => props.theme.secondaryFont};
  ${h1Style}

`

export const H2 = styled.h2`
  ${headerStyle}
  font-family: ${(props) => props.theme.secondaryFont};
  ${text_size_template({
    mobile: "header2",
    laptop: "header2",
    desktop: "header2",
  })};
`

export const H3 = styled.h3`
  ${headerStyle}
  font-family: ${(props) => props.theme.secondaryFont};
  
  ${text_size_template({
    mobile: "header3",
    laptop: "header3",
  })};
`

export const H4 = styled.h4`
  ${headerStyle}
  font-family: ${(props) => props.theme.secondaryFont};

  ${text_size_template({
    mobile: "header4",
    laptop: "header4",
  })};
`

export const H5 = styled.h5`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};
  text-transform: ${(props) => props.capsON && "uppercase"};

  ${text_size_template({
    mobile: "header5",
    laptopL: "header5",
    desktopL: "header5L",
  })};
`

export const H5Large = styled(H5)`
  ${text_size_template({
    mobile: "header5L",
    laptop: "header5L",
    desktopL: "header5L",
  })};
`

export const Para = styled.p`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};

  ${text_size_template({
    mobile: "paragraph",
    tablet: "paragraph",
    laptop: "paragraph",
  })};
`

export const ParaLarge = styled(Para)`
  ${text_size_template({
    mobile: "paragraphL",
    tablet: "paragraphL",
    laptop: "paragraphL",
    desktop: "paragraphL",
  })};
`

export const HelperText = styled.p`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};

  ${text_size_template({
    mobile: "helperText",
    laptop: "helperText",
  })};
`

export const CopyrightText = styled.p`
  ${textStyle}
  font-family: ${(props) => props.theme.primaryFont};

  ${text_size_template({
    mobile: "copyrightText",
    laptop: "copyrightText",
  })};
`
