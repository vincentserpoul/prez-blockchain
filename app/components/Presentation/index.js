/**
*
* Presentation
*
*/

import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Slide, Heading, Text } from 'spectacle';

import blockchainIntro from './img/blockchain-intro.jpg';
import ledger from './img/ledger.gif';
import doubleSpend from './img/doublespend.jpg';
import history from './img/history.jpg';
import duality from './img/duality.jpg';
import smartcontracts from './img/smartcontracts.png';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
  primary: '#00BEFE',
  secondary: 'white',
}, {
  primary: 'Poiret One',
  history: 'Tangerine',
});

function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgImage={blockchainIntro} bgDarken={0.6}>
        <Heading size={1} fit caps lineHeight={1} textColor="white">
          Blockchain
        </Heading>
        <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">an overview</Text>
      </Slide>
      <Slide
        transition={['slide']}
        bgImage={ledger}
        bgDarken={0.7}
        notes={`
          <ul>
            <li>distributed/decentralized ledger of transactions</li>\
            <li> linked list of blocks (timestamped, reference to previous block)</li>\
            <li>public/private (signed VS encrypted)</li>\
            <li>anonymous/pseudonymous</li>\
            <li>permissionless/permissioned</li>\
          </ul>
        `}
      >
        <Heading size={2} caps fit bgColor="" textColor="primary" textFont="primary">
          What is it?
        </Heading>
      </Slide>
      <Slide
        transition={['slide']}
        bgImage={doubleSpend}
        bgDarken={0.4}
        notes={`
          <ul>
            <li>double spending</li>
          </ul>
        `}
      >
        <Heading size={1} caps fit textColor="secondary">
          What problem is it solving?
        </Heading>
      </Slide>
      <Slide
        transition={['zoom', 'fade']}
        bgImage={history}
        bgDarken={0.4}
        notes={`
          <ul>
            <li>1983 - David Chaum - ecash/digicash</li>
            <li>1997 - CocaCola introduced mobile payments</li>
            <li>1998 - PayPal</li>
            <li>2005 - eGold</li>
            <li>2008 - Bitcoin</li>
            <li>today: BTC 13B market cap, hundreds of altcoins, ETH 1B market cap</li>
          </ul>
        `}
      >
        <Heading size={1} fill textFont="history" textColor="secondary">
          History leading to blockchain
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor="primary">
        <Heading size={1} caps fit textColor="secondary">
          live blockchain
        </Heading>
      </Slide>
      <Slide
        transition={['fade', 'zoom']}
        bgImage={smartcontracts}
        bgDarken={0.4}
        notes={`
          <ul>
            <li>Ethereum, the world computer</li>
            <li>Hyperledger, sharing data across companies</li>
          </ul>
        `}
      >
        <Heading size={1} caps fit textColor="secondary">
          Going further, smart contracts
        </Heading>
      </Slide>
      <Slide transition={['fade', 'zoom']} bgImage={duality}>
        <Heading size={1} caps fit textColor="secondary">
          a social revolution or a technical revolution?
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor="primary">
        <Heading size={1} caps fit textColor="secondary">
            Questions
        </Heading>
        <Heading size={1} fit textColor="secondary">
          slides available @ https://blockchainprez.surge.sh
        </Heading>
      </Slide>
    </Deck>
  );
}

export default Presentation;
