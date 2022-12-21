import React from 'react';

import {BookEditForm} from './BookEditForm';
import {BookEntity} from './BookEntity';
import {BookListItem, BookListItemLoader} from './BookListItem';
import {BooksInteractionPool} from './BookInteractionPool';
import {AdvancedList} from '../../components/list/AdvancedList';
import {BookFilterForm} from './BookFilterForm';
import {BookFilterValidator} from './BookFilterValidator';
import {BookDto} from './BookDto';

export const BooksListScreen = ({}: {}) => {
  return (
    <AdvancedList
      keyExtractor={BookDto.getPrimaryKey}
      filtersValidationSchema={BookFilterValidator}
      RenderItem={BookListItem}
      RenderPlaceHolder={BookListItemLoader}
      queryKey="Books"
      EditForm={BookEditForm}
      FilterForm={BookFilterForm}
      EntityManager={BookEntity}
      title={'Books'}
      description={'Manage all of the Books here'}
      interactionPool={BooksInteractionPool}
    />
  );
};
