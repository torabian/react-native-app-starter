import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {Card} from '~/src/components/card/Card';
import {BookDto} from './BookDto';

import {useQuery} from 'react-query';
import {PageTitle} from '~/src/components/page-title/PageTitle';
import {BooksInteractionPool} from './BookInteractionPool';
import {RowValue} from '~/src/components/row-value/RowValue';

type ParamList = {
  Detail: {
    item: BookDto.DTO;
  };
};

export const BookSingleScreen = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Detail'>>();
  const item = params.item;
  const id = BookDto.getPrimaryKey(item);
  const [userRefreshed, setUserRefreshed] = useState<boolean>(false);

  const {data, refetch, isRefetching} = useQuery(
    `Book_${id}`,
    () => BooksInteractionPool?.getOne(id),
    {
      initialData: item,
      cacheTime: 0,
    },
  );

  const onRefresh = () => {
    setUserRefreshed(true);
    refetch();
  };

  useEffect(() => {
    if (!isRefetching) {
      setUserRefreshed(false);
    }
  }, [isRefetching]);

  useEffect(() => {
    refetch();
  }, [item]);

  return (
    <>
      <PageTitle title="Book detail" />

      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={userRefreshed} onRefresh={onRefresh} />
        }>
        <Card>
          <RowValue label={'Author'} value={data?.author} />
          <RowValue label={'Country'} value={data?.country} />
          <RowValue label={'Image Link'} value={data?.imageLink} />
          <RowValue label={'Language'} value={data?.language} />
          <RowValue label={'Under Age Access'} value={data?.underAgeAccess} />
          <RowValue label={'Link'} value={data?.link} />
          <RowValue
            label={'First Release Date'}
            value={data?.firstReleaseDate}
          />
          <RowValue label={'Pages'} value={data?.pages} />
          <RowValue label={'Cover Color'} value={data?.coverColor} />
          <RowValue label={'Title'} value={data?.title} />
          <RowValue label={'Year'} value={data?.year} />
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {fontWeight: 'bold'},
});
