import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Card} from '~/src/components/card/Card';

import {PageTitle} from '~/src/components/page-title/PageTitle';
import {Screens} from '~/src/stacks/Screens';
import {CarEntity} from './CarEntity';

export const CarFormScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <PageTitle title="Car edit/create" />
      <ScrollView style={{flex: 1}}>
        <Card>
          <CarEntity
            fnClose={() => {
              navigation.navigate(Screens.CarsList);
            }}
          />
        </Card>
      </ScrollView>
    </>
  );
};
