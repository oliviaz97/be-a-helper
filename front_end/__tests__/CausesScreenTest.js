import React from 'react';
import renderer from 'react-test-renderer';
import CausesScreen from '../components/CausesScreen';

test('renders correctly', () => {
    const tree = renderer.create(<CausesScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
