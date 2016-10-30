import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar.jsx';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Improof' navigator={navigator} />}>
    
  </Page>
);

export default MainPage;