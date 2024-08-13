'use client';

import { lazy } from "react";
import IntroContent from "content/IntroContent.json";
import MiddleBlockContent from "content/MiddleBlockContent.json";
import AboutContent from "content/AboutContent.json";
import MissionContent from "content/MissionContent.json";
import ProductContent from "content/ProductContent.json";
import PurchaseOptions from "../ui/components/PurchaseOptions/PurchaseOptions";
import { BottomRightImg, TopLeftImg } from "../ui/components/LogoContainer/styles";
import RootLayout from "./layout";
import dynamic from "next/dynamic";

const IntroBlock = lazy(() => import("../ui/components/IntroBlock"));
const Container = lazy(() => import("../ui/common/Container"));
const ScrollToTop = lazy(() => import("../ui/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../ui/components/ContentBlock"));


const Home = () => {

  return (
    <RootLayout>
      <Container>
        <ScrollToTop />
        <IntroBlock
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
        />
        <ContentBlock
          direction="right"
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          icon="developer.svg"
          id="intro"
          button={MiddleBlockContent.button}
        />
        <PurchaseOptions />
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
        
        <TopLeftImg src="gradient-circle.svg" width="300px" height="300px" />
        <BottomRightImg src="gradient-circle.svg" width="300px" height="300px" />
      </Container>
    </RootLayout>
  );
};

//Without this, my page waits to load
export default dynamic(() => Promise.resolve(Home), {ssr: false});