import React, {useEffect, useState} from 'react';

import {Alert, FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {useQuery} from 'react-query';
import {CommonFlatListEmptyComponent} from '~/src/components/list/CommonFlatListEmptyComponent';
import {useListFiltering} from '~/src/components/list/ListFilteringCommon';
import {openDialg} from '~/src/components/modal/Modal';
import {PageTitle} from '~/src/components/page-title/PageTitle';
import {TagsList} from '~/src/components/tags-list/TagsList';
import colors from '~/src/constants/colors';
import {AdvancedListInteractionPool} from '~/src/interfaces/Lists';

export interface AdvancedListProps {
  title?: string;
  description?: string;
  EditForm: any;
  EntityManager: any;
  RenderPlaceHolder: any;
  FilterForm: any;
  interactionPool?: AdvancedListInteractionPool<any>;
  RenderItem: any;
  filtersValidationSchema?: any;
  queryKey: string;
  keyExtractor: (t: any) => any;
}

export const AdvancedList = ({
  EditForm,
  EntityManager,
  title,
  description,
  RenderPlaceHolder,
  RenderItem,
  filtersValidationSchema,
  queryKey,
  interactionPool,
  FilterForm,
  keyExtractor,
}: AdvancedListProps) => {
  const [userRefreshed, setUserRefreshed] = useState<boolean>(false);

  const {FilterBtn, filtersList, filters} = useListFiltering({
    Form: FilterForm,
    initialFilters: {},
    validationSchema: filtersValidationSchema,
  });

  const {data, isLoading, refetch, isRefetching} = useQuery(
    queryKey,
    () => interactionPool?.query(filters),
    {
      cacheTime: 1000,
    },
  );

  useEffect(() => {
    refetch();
  }, [filters]);

  const onLongPress = () => {
    Alert.alert('Long');
  };

  const onRefresh = () => {
    setUserRefreshed(true);
    refetch();
  };

  useEffect(() => {
    if (isRefetching === false) {
      setUserRefreshed(false);
    }
  }, [isRefetching]);

  const onPress = (item: any) => {
    openDialg({
      title: item.title || '',
      data: item,
      Component: (props: any) => <EntityManager {...props} />,
    });
  };

  const showSkeleton = (isRefetching && !data) || isLoading;

  return (
    <>
      <PageTitle
        SideAction={FilterForm && FilterBtn}
        title={title}
        description={description}>
        <TagsList items={filtersList} setValue={() => {}} value={'bye'} />
      </PageTitle>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={userRefreshed} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={keyExtractor}
        style={styles.flatList}
        ListEmptyComponent={<CommonFlatListEmptyComponent response={data} />}
        data={data}
        renderItem={
          showSkeleton
            ? RenderPlaceHolder
            : props => (
                <RenderItem
                  {...props}
                  onPress={onPress}
                  onLongPress={onLongPress}
                />
              )
        }
        ListFooterComponent={() => <View style={{paddingBottom: 80}} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 15},
  contentContainerStyle: {
    paddingBottom: 10,
  },
  flatList: {flex: 1, padding: 10, backgroundColor: colors.gray},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {fontWeight: 'bold'},
});
