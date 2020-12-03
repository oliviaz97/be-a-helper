import React from 'react';
import renderer from 'react-test-renderer';
import DonationScreen from '../components/DonationScreen';

test('renders correctly', () => {
    const tree = renderer.create(<DonationScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
