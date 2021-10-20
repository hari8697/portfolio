import Image from "next/image"
import styled from "styled-components"
import { SwooshContain, SwooshWrap } from "../molecules/About.style"

const Swoosh = () => (
  <SwooshContain>
    <SwooshWrap>
      {/* <span className="gradient"></span>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="line">
          <clipPath id="myClip">
            <path
              className="line"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2924.92 4.62061C2587.71 4.62051 2140.01 98.5328 1801.96 302.832C1628.73 407.524 1459.06 567.172 1283.85 732.024C1273.95 741.346 1264.02 750.685 1254.08 760.032C1068.36 934.58 875.949 1111.75 666.422 1232.35C475.358 1342.33 339.908 1377.36 236.612 1381.07C154.29 1384.03 92.4363 1367.06 39.5077 1352.55C26.0577 1348.86 13.184 1345.33 0.697266 1342.33L1.63321 1338.44C14.2765 1341.48 27.2557 1345.04 40.7751 1348.74C93.6631 1363.24 154.818 1380 236.468 1377.07C338.933 1373.39 473.748 1338.65 664.426 1228.89C873.487 1108.55 1065.58 931.708 1251.34 757.117C1261.32 747.734 1271.29 738.358 1281.23 728.997C1456.32 564.254 1626.28 404.329 1799.89 299.409C2138.69 94.6582 2587.14 0.62051 2924.92 0.620605V4.62061Z"
              fill="white"
            />
          </clipPath>
        </svg> */}
      {/* <svg
          viewBox="0 0 2925 1382"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="lmao_fill"
              x1="2854.65"
              y1="72.9032"
              x2="305.144"
              y2="1480.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FA00FF" />
              <stop offset="0.24552" stop-color="#8F00FF" />
              <stop offset="0.591953" stop-color="#2400FF" />
              <stop offset="0.64948" stop-color="#2400FF" stop-opacity="0.37" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M1.16504 1340.38C124.893 1370.16 283.682 1450.36 665.424 1230.62C1084.01 989.671 1434.42 522.614 1800.92 301.121C2139.35 96.5955 2587.42 2.62051 2924.92 2.62061"
            className="lmao"
            stroke="url(#lmao_fill)"
            stroke-width="4"
          />
        </svg> */}

      <div className="box"></div>
    </SwooshWrap>
  </SwooshContain>
)

export default Swoosh
