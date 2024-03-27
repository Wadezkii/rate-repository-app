import React, {useState
} from 'react';
import { FlatList, View, StyleSheet, Text, Pressable, Picker, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  headerContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({ sort, setSort, setSearchKeyword }) => {
  const handleSortChange = (itemValue, itemIndex) => {
    setSort(JSON.parse(itemValue));
  };

  return (
    <View style={styles.headerContainer}>
      <TextInput
        onChangeText={setSearchKeyword}
        placeholder="Search..."
        style={styles.searchInput}
      />
      <Picker
        selectedValue={JSON.stringify(sort)}
        onValueChange={handleSortChange}
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="Latest repositories" value={JSON.stringify({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })} />
        <Picker.Item label="Highest rated repositories" value={JSON.stringify({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' })} />
        <Picker.Item label="Lowest rated repositories" value={JSON.stringify({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })} />
      </Picker>
    </View>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
    />
  );
};


const RepositoryList = () => {
  const [sort, setSort] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);
  const { repositories } = useRepositories(sort.orderBy, sort.orderDirection, debouncedSearchKeyword);
  const navigate = useNavigate();

  return (
    <FlatList
      ListHeaderComponent={
        <RepositoryListHeader
          sort={sort}
          setSort={setSort}
          setSearchKeyword={setSearchKeyword}
        />
      }
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
    />
  );
};
export default RepositoryList;
