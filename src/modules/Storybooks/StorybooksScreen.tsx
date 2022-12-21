import React from 'react';
import {View} from 'react-native';
import {Map} from '~/src/components/map/MapView';
import {PageTitle} from '~/src/components/page-title/PageTitle';

export const StorybooksScreen = ({}: {}) => {
  return (
    <View style={{flex: 1}}>
      <PageTitle title={'story book'} description={'Our reusable components'} />

      <Map />
    </View>
  );
};
