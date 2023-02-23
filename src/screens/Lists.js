import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import { flatList, sectionListData } from '../../models/flatList';
import globalStyles from '../styles/global';
import { variables } from '../styles/variable';

const ListDisplay = ({ value, styles }) => <Text style={styles}>{value}</Text>;

const sectionKeyExtractor = (item, index) => item.id + index;

const Lists = () => {
  return (
    <View style={[globalStyles.pageWrapper, styles.pageWrapper]}>
      <Text style={styles.pageHeading}>FlatList: List of categories</Text>
      <FlatList
        data={flatList}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ListDisplay value={item.item.title} styles={styles.item} />}
      />
      <Text style={styles.pageHeading}>SectionList: List of members within sections</Text>
      <SectionList
        sections={sectionListData}
        keyExtractor={sectionKeyExtractor}
        renderSectionHeader={({ section }) => (
          <ListDisplay styles={styles.header} value={section.title} />
        )}
        renderItem={({ item }) => <ListDisplay styles={styles.item} value={item.value} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  pageHeading: {
    fontSize: 20,
    paddingBottom: 5,
    marginTop: 15,
  },
  header: {
    fontSize: 16,
    padding: 5,
    backgroundColor: variables.colors.headerBg,
  },
  item: {
    borderBottomColor: variables.colors.borderBtmColor,
    borderBottomWidth: 1,
    padding: 5,
  },
});

export default Lists;
