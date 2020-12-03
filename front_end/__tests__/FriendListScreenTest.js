import React from 'react';
import renderer from 'react-test-renderer';
import FriendListScreen from '../components/FriendListScreen';

test('renders correctly', () => {
    const tree = renderer.create(<FriendListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
