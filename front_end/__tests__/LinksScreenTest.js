import React from 'react';
import renderer from 'react-test-renderer';
import LinksScreen from '../components/LinksScreen';

test('renders correctly', () => {
    const tree = renderer.create(<LinksScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
