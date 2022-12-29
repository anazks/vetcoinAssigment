import React, { useState } from 'react';
import SubscribeModal from './modals';
import { MODAL_SCREENS } from './modals/constants';
import SubscribeForm from './modals/subscribeForm';
import Success from './modals/success';
import FaqModal from './modals/faq';
import { TermsConditions, Cover, Header, Card, Features, Note, Footer } from './partials';
import PageLayout from './partials/Layout';
// import DropDown from '../../components/DropDown/DropDown';

const Landing = () => {
  const [currentScreen, setCurrentScreen] = useState(MODAL_SCREENS[0]);
  const [loggedIn , setLoggedIn] = useState(false);
  return (
    <PageLayout>
      <Header  loggedIn={loggedIn} currentScreen={currentScreen} setLoggedIn={setLoggedIn}/>
      <Cover />
      <Card />
      <Features />
      <Note />
      <Footer />
      <SubscribeModal screens={MODAL_SCREENS} currentScreen={currentScreen} setLoggedIn={setLoggedIn}>
        <SubscribeForm onChangeScreen={setCurrentScreen} />
        <Success onChangeScreen={setCurrentScreen} />
      </SubscribeModal>
      <TermsConditions />
      <FaqModal />
    </PageLayout>
  );
};

export default Landing;
