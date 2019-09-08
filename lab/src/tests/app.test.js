import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../components/app.js';
import { exportAllDeclaration } from '@babel/types';


describe('<counter/>', () => {

it('exists on start up', () => {
  let component = shallow(<App /> );
  exportAllDeclaration(component.find('span').exists()).toBeTruthy();
})

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})
