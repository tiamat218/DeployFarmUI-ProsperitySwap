import React from 'react';
import styled from 'styled-components';
import { BaseLayout } from '@pancakeswap-libs/uikit';
import useI18n from 'hooks/useI18n';
import Page from 'components/layout/Page';

import FarmStakingCard from './components/FarmStakingCard';
import CakeStats from './components/CakeStats';
import TotalValueLockedCard from './components/TotalValueLockedCard';
import TwitterCard from './components/TwitterCard';
import InfoCard from './components/InfoCard';
import GradientButton from './components/GradientButton'; // Import the custom GradientButton

const Content = styled.div`
  z-index: 1;
  padding: 20px;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
  z-index: 2;
  position: relative;
`;

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`;

const Home: React.FC = () => {
  const TranslateString = useI18n();

  return (
    <Page>
      <Content>
        <ButtonContainer>
          <GradientButton
            as="a"
            variant="primary"
            href=""
            target="_blank"
          >
            Get GMT
          </GradientButton>
        </ButtonContainer>

        <Cards>
          <FarmStakingCard />
          <CakeStats />
          <TotalValueLockedCard />
          <TwitterCard />
          <InfoCard />
        </Cards>
      </Content>
    </Page>
  );
};

export default Home;

// Add this line at the end of the file to make it a module
export {};
