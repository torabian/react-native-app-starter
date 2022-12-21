import React from 'react';

import {CarEditForm} from './CarEditForm';
import {CarEntity} from './CarEntity';
import {CarListItem, CarListItemLoader} from './CarListItem';
import {CarsInteractionPool} from './CarInteractionPool';
import {AdvancedList} from '../../components/list/AdvancedList';
import {CarFilterForm} from './CarFilterForm';
import {CarFilterValidator} from './CarFilterValidator';
import {CarDto} from './CarDto';

export const CarsListScreen = ({}: {}) => {
  return (
    <AdvancedList
      keyExtractor={CarDto.getPrimaryKey}
      filtersValidationSchema={CarFilterValidator}
      RenderItem={CarListItem}
      RenderPlaceHolder={CarListItemLoader}
      queryKey="Cars"
      EditForm={CarEditForm}
      FilterForm={CarFilterForm}
      EntityManager={CarEntity}
      title={'Cars'}
      description={'Manage all of the Cars here'}
      interactionPool={CarsInteractionPool}
    />
  );
};
