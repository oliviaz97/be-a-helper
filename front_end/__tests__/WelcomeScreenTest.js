import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../components/WelcomeScreen';

test('renders correctly', () => {
    const tree = renderer.create(<WelcomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
