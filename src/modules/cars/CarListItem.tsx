import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import {Card} from '~/src/components/card/Card';
import {DefaultCardLoader} from '~/src/components/list/DefaultCardLoader';
import {RowValue} from '~/src/components/row-value/RowValue';
import {Screens} from '~/src/stacks/Screens';
import {CarDto} from './CarDto';

/**
 * This component is being shown while list is looking for first time
 * content to be loaded, update the card with general structure of the card
 */
export function CarListItemLoader() {
  return <DefaultCardLoader />;
}

/**
 * Each list item of the flat list, equal to renderItem prop on flatlist
 * with some minor modifications
 */
export function CarListItem({
  item,
  onPress,
  onLongPress,
}: {
  item: CarDto.DTO;
  onPress: (item: CarDto.DTO) => void;
  onLongPress: (event: GestureResponderEvent) => void;
}) {
  const navigation = useNavigation<any>();

  return (
    <Card
      onPress={() => navigation.navigate(Screens.CarSingle, {item})}
      onLongPress={() => navigation.navigate(Screens.CarForm, {item})}
      // onPress={() => onPress(item)}
    >
      <RowValue label={'Name'} value={item?.name} />
      <RowValue label={'Miles_per_Gallon'} value={item?.miles_per_gallon} />
      <RowValue label={'Cylinders'} value={item?.cylinders} />
      <RowValue label={'Displacement'} value={item?.displacement} />
      <RowValue label={'Horsepower'} value={item?.horsepower} />
      <RowValue label={'Weight_in_lbs'} value={item?.weight_in_lbs} />
      <RowValue label={'Acceleration'} value={item?.acceleration} />
      <RowValue label={'Year'} value={item?.year} />
      <RowValue label={'Origin'} value={item?.origin} />
    </Card>
  );
}

const styles = StyleSheet.create({});
