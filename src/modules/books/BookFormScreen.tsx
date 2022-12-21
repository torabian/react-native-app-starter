import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Card} from '~/src/components/card/Card';

import {PageTitle} from '~/src/components/page-title/PageTitle';
import {Screens} from '~/src/stacks/Screens';
import {BookEntity} from './BookEntity';

export const BookFormScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <PageTitle title="Book edit/create" />
      <ScrollView style={{flex: 1}}>
        <Card>
          <BookEntity
            fnClose={() => {
              navigation.navigate(Screens.BooksList);
            }}
          />
        </Card>
      </ScrollView>
    </>
  );
};
