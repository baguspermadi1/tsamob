import configs from '@configs';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

const TextInput = ({
  valueText,
  placeholder,
  placeholderActive,
  isError,
  errorInfo,
  onChangeText,
  style,
  keyboardType,
}) => {
  const [isFocus, setisFocus] = useState(false);

  return (
    <>
      <View
        style={{
          ...styles.containerComponentInput,
          borderColor:
            isFocus && !isError
              ? configs.colors.primary.Sapphire.base
              : isError
              ? configs.colors.secondary.Ruby.light
              : configs.colors.neutral.White.base,
          ...style,
        }}>
        <Input
          label={valueText || isFocus ? placeholder : ''}
          labelStyle={{
            color: configs.colors.neutral.Grey.dark,
            fontSize: configs.sizes.Text.S,
            fontFamily: configs.fonts.OpenSans.Regular,
          }}
          inputStyle={{
            fontSize: configs.sizes.Text.M,
            fontFamily: configs.fonts.OpenSans.Regular,
          }}
          value={valueText}
          placeholder={valueText || isFocus ? placeholderActive : placeholder}
          containerStyle={{
            height: valueText || isFocus ? '70%' : '60%',
          }}
          inputContainerStyle={styles.inputContainer}
          keyboardType={keyboardType ? keyboardType : 'default'}
          onFocus={(e) => setisFocus(true)}
          onBlur={(e) => setisFocus(false)}
          onChangeText={(text) => {
            onChangeText(text);
          }}
        />
      </View>
      {isError && <Text style={styles.errorInfo}>{errorInfo}</Text>}
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  containerComponentInput: {
    height: RFValue(64),
    width: '100%',
    backgroundColor: configs.colors.neutral.White.base,
    borderRadius: RFValue(6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RFValue(8),
    borderWidth: RFValue(1),
    marginBottom: RFValue(4),
  },
  containerInput: {
    height: '70%',
  },
  inputContainer: {borderBottomWidth: 0},
  errorInfo: {
    color: configs.colors.secondary.Ruby.light,
    fontSize: configs.sizes.Text.S,
    fontFamily: configs.fonts.OpenSans.Regular,
    alignSelf: 'flex-end',
  },
});
