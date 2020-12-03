import React from 'react';
import renderer from 'react-test-renderer';
import GoalsScreen from '../components/GoalsScreen';

test('renders correctly', () => {
    const tree = renderer.create(<GoalsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
