import React from "react";
import Image from "next/image";

import MaxWidthContainer from "components/MaxWidthContainer";
import Touchable from "components/Touchable";
import ScrollLink from "components/ScrollLink";
import { orgInfoId } from "components/Sections/OrgInfo/constants";

import { IntroductionSectionProps } from "./types";
import { introductionSectionId, introductionSectionFixtures } from "./constants";

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  backgroundImageLink = introductionSectionFixtures.backgroundImageLink,
  buttonText = introductionSectionFixtures.buttonText,
  title = introductionSectionFixtures.title,
}) => (
  <section
    id={introductionSectionId}
    className="flex items-center py-10 px-5 md:p-20 relative h-section-introduction-mobile md:h-section-introduction-desktop bg-white"
  >
    <Image
      src={backgroundImageLink}
      alt="Florianópolis"
      className="absolute z-10 object-cover object-center h-full w-full"
      layout="fill"
      quality={100}
      loading="eager"
    />

    <MaxWidthContainer className="z-20">
      <h1 className="text-gray-200 w-full md:w-30 font-bold text-4xl">
        {title}
      </h1>

      <ScrollLink to={orgInfoId}>
        <Touchable tabIndex={-1} touchableWrapperClassName="mt-10 w-full md:w-22">
          {buttonText}
        </Touchable>
      </ScrollLink>
    </MaxWidthContainer>
  </section>
);

export default IntroductionSection;
