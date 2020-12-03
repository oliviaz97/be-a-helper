import React from 'react';
import renderer from 'react-test-renderer';
import FriendActivityScreen from '../components/FriendActivityScreen';

test('renders correctly', () => {
    const tree = renderer.create(<FriendActivityScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
