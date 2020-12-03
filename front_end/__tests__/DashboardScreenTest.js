import React from 'react';
import renderer from 'react-test-renderer';
import DashboardScreen from '../components/DashboardScreen';

test('renders correctly', () => {
    const tree = renderer.create(<DashboardScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
