import React, { memo, useContext } from 'react';
import {
  HeroImage,
  SiteName,
  HeroOverlay,
  PreviewWave,
  PreviewParallax,
} from './styles';

import Typewriter from 'typewriter-effect';
import { ThemeContext } from '../../../context/ThemeContext';

type Props = {
  strings: string[];
};

const Hero = ({ strings }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HeroImage>
        <SiteName align="center" variant="h2" component="h1">
          <Typewriter
            onInit={(typewriter) => {
              if (strings.length === 2)
                typewriter
                  .typeString(strings[0])
                  .deleteChars(8)
                  .pauseFor(2500)
                  .typeString(strings[1])
                  .start();
              else typewriter.typeString(strings[0]).start();
            }}
          ></Typewriter>
        </SiteName>
        <HeroOverlay>
          <PreviewWave
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <PreviewParallax>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill={
                  theme === 'dark'
                    ? 'rgba(0,0,0,0.7)'
                    : 'rgba(255, 255, 255, 0.7)'
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill={
                  theme === 'dark'
                    ? 'rgba(0,0,0, 0.5)'
                    : 'rgba(255,255,255,0.5)'
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill={
                  theme === 'dark'
                    ? 'rgba(0,0,0, 0.3)'
                    : 'rgba(255,255,255,0.3)'
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill={theme === 'dark' ? '#303030' : '#fafafa'}
              />
            </PreviewParallax>
          </PreviewWave>
        </HeroOverlay>
      </HeroImage>
    </>
  );
};

export default memo(Hero);
