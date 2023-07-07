import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SW, SH, SF, ShadowStyles } from '@/theme';
import { Fonts } from '@/assets';
import { verticalScale } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.darkGray,
  },
  text: {
    color: COLORS.black,
  },
  verifyContainer: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.65,
    // borderWidth: 1,
    borderColor: 'grey',
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: COLORS.faded_grey,
    ...ShadowStyles.shadow2,
    marginBottom: 100,
  },
  header: {
    fontSize: SF(24),
    color: COLORS.dark_grey,
    fontFamily: Fonts.MaisonBold,
  },
  selectedText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SF(16),
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    width: SW(110),
    height: SH(60),
    alignItems: 'center',
    justifyContent: 'center',
    //  width: windowWidth * 0.30,
    //  height: windowHeight * 0.10,
    borderRadius: 10,
  },
  profilePic: {
    width: SH(110),
    height: SH(110),
    borderRadius: 100,
    resizeMode: 'contain',
  },
  darksmallText: {
    fontSize: SF(16),
    color: COLORS.solid_grey,
    fontFamily: Fonts.SemiBold,
  },
  lightsmallText: {
    fontSize: SF(12),
    color: COLORS.solid_grey,
    fontFamily: Fonts.Regular,
  },
  cross: {
    width: SW(10),
    height: SW(10),
    resizeMode: 'contain',
  },
  role: {
    fontSize: SH(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
  },
});
