import Image from "next/image";
// import styled from "styled-components"
import { motion } from "framer-motion";
import {
  Title,
  GridContainer,
  Header_wrap,
  Header5,
  Paragraph,
  Subtitle,
  Title_wrap,
  Footer_wrap,
} from "./Landing.style";
import { useEffect, useState } from "react";

import { useWindowSize } from "@/common/utils/";

// import dynamic from "next/dynamic";
// const windowDimensionsHook = dynamic(
//   () => {
//     return import("@/common/utils/windowDimensionsHook");
//   },
//   { ssr: false }
// );

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const portArray = [
  { id: 1, name: "Nike SB", selected: true },
  { id: 2, name: "Rhoncus urna", selected: false },
  { id: 3, name: "Amet facilisis", selected: false },
  { id: 4, name: "Magna ac placerat", selected: false },
];

const portItems = portArray.map((item) => {
  return (
    <Title key={item.id} className={item.selected ? "sel" : ""}>
      {item.name}
    </Title>
  );
});

const socialItemsArr = Array.from(Array(4).keys());
// const [socialItems, setsocialItems] = useState([]);
let iconSize = 18;
const socialItems = socialItemsArr.map((item) => {
  return (
    <div className="social_icon" key={item}>
      <Image
        src={`/landing/social/${item + 1}.svg`}
        layout="fill"
        objectFit="contain"
      ></Image>
    </div>
  );
});

export default function index() {
  const { width: wW, height: wH } = useWindowSize();

  // useEffect(() => {
  //   setsocialItems(
  //     socialItemsArr.map((item) => {
  //       return (
  //         <div className="social_icon" key={item}>
  //           <Image
  //             src={`/landing/social/${item + 1}.svg`}
  //             width={iconSize}
  //             height={iconSize}
  //           ></Image>
  //         </div>
  //       );
  //     })
  //   );
  // }, [iconSize]);

  // const wW = useWindowSize().width;
  // const wH = useWindowSize().height;

  // useEffect(() => {
  //   console.log(wW, wH);

  // }, [useWindowSize()])

  return (
    <GridContainer>
      <Header_wrap className="noselect">
        <div className="logo">
          <Image
            src="/common/DeathSpace_Logo.svg"
            width={303}
            height={56}
          ></Image>
        </div>
        {wW < 768 ? (
          <Paragraph className="clickable" highlighted capsON>
            About
          </Paragraph>
        ) : (
          <Header5 highlighted capsON className="clickable">
            About
          </Header5>
        )}
      </Header_wrap>
      <div className="hero_image">
        <Image
          src={`/landing/album/1.png`}
          width={1354}
          height={761}
          // layout="fill"
        ></Image>
      </div>
      <Title_wrap className="noselect">{portItems}</Title_wrap>
      <Footer_wrap className="noselect">
        <div className="social_wrap ">{socialItems}</div>
        {wW < 768 ? (
          <Paragraph capsON className="text_wrap">
            Swipe/Tap
          </Paragraph>
        ) : (
          <Header5 capsON>Swipe/Tap</Header5>
        )}
      </Footer_wrap>
    </GridContainer>
  );
}
