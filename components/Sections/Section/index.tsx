import React from "react";
import clsx from "clsx";
import Emoji from "a11y-react-emoji";

import Button from "components/Button";
import MaxWidthContainer from "components/MaxWidthContainer";

import { SectionProps, SectionVariant } from "./types";
import { sectionStyles, sectionVariantsStyles } from "./styles";

const Section: React.FC<SectionProps> = ({
  emojiSymbol,
  buttonText,
  buttonLink,
  className,
  children,
  variant = SectionVariant.Secondary,
  title,
  text,
  ...rest
}) => {
  const concatenateSectionClassName = clsx(
    className,
    sectionStyles.container,
    sectionVariantsStyles[variant],
  );

  return (
    <section
      className={concatenateSectionClassName}
      {...rest}
    >
      <MaxWidthContainer>
        {
          emojiSymbol && (
            <Emoji
              className="inline-block text-3xl mb-3"
              symbol={emojiSymbol}
            />
          )
        }

        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>

        <h2 className="text-lg font-light max-w-1/2">
          {text}
        </h2>

        {
          buttonText && (
            <Button
              buttonLink={buttonLink}
              buttonWrapperClassName="mt-8 mx-auto"
            >
              {buttonText}
            </Button>
          )
        }

        {
          children && (
            <div className="w-full mt-5">
              {children}
            </div>
          )
        }
      </MaxWidthContainer>
    </section>
  );
};

export default Section;