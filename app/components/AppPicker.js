import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/style";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import AppButton from "./AppButton";

function AppPicker({
  icon,
  items,
  numberOfLines,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyles.colors.mBlue}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text} numberOfLines={1}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mBlue}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide" style={{ flex: 0 }}>
        <Screen style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={30}
              color={colors.mBlue}
              style={styles.closeIcon}
            />
          </TouchableOpacity>

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            ItemSeparatorComponent={ListItemSeparator}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                // label={item.label}
                numberOfLines={numberOfLines}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
                style={styles.pickerItem}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  closeIcon: {
    alignSelf: "flex-end",
    paddingRight: 10,
    paddingTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  modalContainer: {
    backgroundColor: colors.white,
    // height: "50%",
  },
  placeholder: {
    color: defaultStyles.colors.mBlue,
    flex: 1,
  },
  pickerItem: {
    paddingLeft: 15,
  },
  text: {
    color: colors.mBlue,
    flex: 1,
  },
});

export default AppPicker;
