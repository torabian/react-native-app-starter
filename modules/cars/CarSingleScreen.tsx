import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from '~/components/card/Card';
import {CarDto} from './CarDto';

import {useQuery} from 'react-query';
import {PageTitle} from '~/components/page-title/PageTitle';
import {CarsInteractionPool} from './CarInteractionPool';
import {RowValue} from '~/components/row-value/RowValue';

type ParamList = {
  Detail: {
    item: CarDto.DTO;
  };
};

export const CarSingleScreen = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Detail'>>();
  const item = params.item;
  const id = CarDto.getPrimaryKey(item);
  const [userRefreshed, setUserRefreshed] = useState<boolean>(false);

  const {data, refetch, isRefetching} = useQuery(
    `Car_${id}`,
    () => CarsInteractionPool?.getOne(id),
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
      <PageTitle title="Car detail" />

      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={userRefreshed} onRefresh={onRefresh} />
        }>
        <Card>
          <RowValue label={'Name'} value={data?.name} />
          <RowValue label={'Miles_per_Gallon'} value={data?.miles_per_gallon} />
          <RowValue label={'Cylinders'} value={data?.cylinders} />
          <RowValue label={'Displacement'} value={data?.displacement} />
          <RowValue label={'Horsepower'} value={data?.horsepower} />
          <RowValue label={'Weight_in_lbs'} value={data?.weight_in_lbs} />
          <RowValue label={'Acceleration'} value={data?.acceleration} />
          <RowValue label={'Year'} value={data?.year} />
          <RowValue label={'Origin'} value={data?.origin} />
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {fontWeight: 'bold'},
});
