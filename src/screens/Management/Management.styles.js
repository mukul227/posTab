import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SW, SH, SF, ShadowStyles } from '@/theme';
import { COLORS } from '@/theme';
import { Fonts } from '@/assets';
import { verticalScale, moderateScale } from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerMainView: {
    width: windowWidth - 10,
    paddingHorizontal: SW(16),
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingVertical: SH(18),
    flexDirection: 'row',
  },
  textInputStyle: {
    width: SW(45),
    marginLeft: 10,
    fontFamily: Fonts.Italic,
    fontSize: SF(15),
  },
  truckStyle: {
    width: SH(32),
    height: SH(32),
    resizeMode: 'contain',
  },
  deliveryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryText: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.solid_grey,
    fontSize: SF(20),
    paddingLeft: SW(4),
  },
  searchView: {
    borderWidth: 1,
    width: SW(65),
    height: SH(43),
    borderRadius: 20,
    borderColor: COLORS.row_grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImage: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
    left: 3,
  },
  cashDrawerView: {
    width: windowWidth - 100,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(25),
    paddingVertical: SH(25),
    backgroundColor: COLORS.textInputBackground,
    borderRadius: 10,
  },
  cashDrawerText: {
    fontFamily: Fonts.SemiBold,
    // color: COLORS.solid_grey,
    fontSize: SF(15),
  },
  drawerIdText: {
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
    fontSize: SF(14),
  },
  trackingButtonView: {
    width: SW(70),
    height: SH(55),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  trackingButtonText: {
    fontFamily: Fonts.Medium,
    color: COLORS.white,
    fontSize: SF(12),
  },
  viewSessionButtonView: {
    width: SW(50),
    height: SH(60),
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  viewSessionButtonText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: SF(12),
  },
  sessionHistoryView: {
    width: windowWidth - 100,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    borderRadius: 10,
    paddingVertical: SH(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(25),
  },
  sessionHistoryText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
    fontSize: SF(15),
  },
  rightIconStyle: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
  },
  modalMainView: {
    backgroundColor: COLORS.white,
    width: SW(160),
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    minHeight: windowHeight - 200,
    // borderWidth:10
  },
  headerView: {
    backgroundColor: COLORS.primary,
    width: SW(160),
    height: SH(60),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  crossIconStyle: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  countCashView: {
    width: SW(130),
     alignSelf: 'center',
    height:"70%"
  },
  countCashText: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
    fontSize: SF(22),
  },
  amountCountedText: {
    fontFamily: Fonts.Medium,
    color: COLORS.darkGray,
    fontSize: SF(14),
  },
  inputStyle: {
    marginTop: 4,
    height: SH(60),
    borderRadius: 5,
    fontFamily: Fonts.Regular,
    fontSize: SF(24),
    color: COLORS.solid_grey,
    paddingLeft: SW(5),
    paddingVertical: SH(5),
    backgroundColor: COLORS.textInputBackground,
  },
  noteInputStyle: {
    marginTop: 4,
    width: SW(130),
    height: SH(60),
    borderRadius: 5,
    fontFamily: Fonts.Italic,
    fontSize: SF(13),
    color: COLORS.solid_grey,
    paddingLeft: SW(5),
    paddingVertical: SH(5),
    backgroundColor: COLORS.textInputBackground,
  },
  buttonText: {
    fontSize: SF(16),
    color: COLORS.darkGray,
    textAlign: 'center',
    fontFamily: Fonts.Medium,
  },
  saveButton: {
    alignSelf: 'center',
    width: windowWidth * 0.28,
    height: SH(60),
    zIndex: -999,
  },
  sessionMainView: {
    width: windowWidth - 110,
    alignSelf: 'center',
    borderRadius: 10,
    paddingTop: SH(10),
    backgroundColor: COLORS.textInputBackground,
  },
  sessionView: {
    width: windowWidth - 140,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.textInputBackground,
  },
  usdText: {
    fontSize: SF(38),
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: Fonts.SemiBold,
  },
  buttonView: {
    justifyContent: 'space-between',
    width: windowWidth - 140,
    alignSelf: 'center',
  },
  addCashView: {
    width: SW(144),
    height: SH(90),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue_shade,
  },
  removeCashView: {
    width: SW(144),
    height: SH(90),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.silver_solid,
  },
  cashPaymentsText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(24),
    color: COLORS.black,
  },
  paymentOptionsView: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.solidGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SH(20),
    paddingBottom: SH(15),
  },
  paymentBodyCon: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.solidGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(7),
    paddingHorizontal: moderateScale(12),
  },
  buttonStyle: {
    width: windowWidth - 110,
    height: SH(90),
    alignSelf: 'center',
  },

  // summary history css start
  summaryHeaderCon: {
    height: SH(100),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
  },
  backButtonCon: {
    backgroundColor: COLORS.textInputBackground,
    borderRadius: 3,
    width: windowWidth * 0.08,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButtonArrow: {
    width: SW(12),
    height: SW(8),
    resizeMode: 'contain',
    tintColor: COLORS.dark_grey,
  },
  backTextStyle: {
    color: COLORS.dark_grey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingVertical: verticalScale(5),
  },
  summaryText: {
    color: COLORS.black,
    fontFamily: Fonts.MaisonBold,
    fontSize: SF(18),
  },
  bodyContainer: {
    width: windowWidth * 0.88,
    height: windowHeight * 0.68,
    alignSelf: 'center',
  },
  bodyContainer2: {
    width: windowWidth * 0.88,
    height: windowHeight * 0.84,
    alignSelf: 'center',
  },
  allCashText: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(20),
  },
  totalCashHeader: {
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(6),
    marginTop: 15,
  },
  totalCashData: {
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(10),
  },
  sectionListHeader: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(17),
  },
  sectionListData: {
    color: COLORS.dark_grey,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  netPaymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(6),
    marginTop: 15,
  },
  cashActivity: {
    color: COLORS.darkGray,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(20),
  },
  cashActivityCon: {
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
    paddingVertical: verticalScale(3),
    marginTop: 5,
  },
  cashActivityDarkText: {
    color: COLORS.solid_grey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
  },
  cashActivityLightText: {
    color: COLORS.solid_grey,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  cashActivityRedText: {
    color: COLORS.orange,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  senEmailButton: {
    alignSelf: 'center',
    width: windowWidth * 0.88,
    height: SH(70),
  },
  // summary history css end
  // summary history css start
  sessionHistory: {
    color: COLORS.black,
    fontFamily: Fonts.MaisonBold,
    fontSize: SF(18),
    paddingHorizontal: moderateScale(12),
  },
  datePickerContainer: {
    height: SH(63),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(12),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.solidGrey,
  },
  datepickerConatiner: {
    borderWidth: 1,
    height: SH(35),
    width: SW(45),
    borderRadius: 3,
    borderColor: COLORS.solidGrey,
    paddingHorizontal: moderateScale(7),
    justifyContent: 'center',
  },
  calendarStyle: {
    width: SW(5),
    height: SW(5),
    resizeMode: 'contain',
    tintColor: COLORS.darkGray,
  },
  datePlaceholder: {
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
    fontSize: SF(12),
    paddingHorizontal: moderateScale(5),
  },
  dropDownIcon: {
    width: SW(4),
    height: SW(4),
    resizeMode: 'contain',
  },
  dropdown: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    zIndex: Platform.OS === 'ios' ? 100 : 0,
  },
  containerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: COLORS.solidGrey,
    backgroundColor: COLORS.textInputBackground,
    height: SH(60),
    borderRadius: 5,
    fontFamily: Fonts.Regular,
    fontSize: SF(24),
    color: COLORS.solid_grey,
  },
  dropDownContainerStyle: {
    borderColor: COLORS.solidGrey,
    borderRadius: 7,
    ...ShadowStyles.shadow2,
    backgroundColor: COLORS.white,
    // top: Platform.OS === 'android' ? 50 : 15,
    zIndex: Platform.OS === 'ios' ? 999 : 1,
  },
  listItemLabelStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  labelStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  selectedItemLabelStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  placeholderStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
  },
  userTableHead: {
    height: SH(50),
    backgroundColor: '#E1E3E4',
    textAlign: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  text: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
    fontSize: SF(14),
    textAlign: 'center',
  },
  usertableRowStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.solidGrey,
    paddingVertical: SH(18),
  },
  usertableRowText: {
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
    fontSize: SF(12),
    textAlign: 'center',
  },
  tableMainView: {
    zIndex: -10,
  },
  tableDataHeaderCon: {
    height: SH(50),
    backgroundColor: '#E1E3E4',
    textAlign: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'center',
  },
  tableDataCon: {
    height: SH(55),
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  allienpic: {
    width: SW(6),
    height: SW(6),
    borderRadius: 50,
    resizeMode: 'contain',
  },

  // summary history css end

  trackingBodyCon: {
    width: SW(110),
    alignSelf: 'center',
    height: windowHeight * 0.62,
  },
  absoluteZero: {
    position: 'absolute',
    top: 0,
  },
  centerSw: {
    width: SW(145),
    alignItems: 'center',
  },
  amountExpect: {
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
    fontSize: SF(18),
  },
  removerDarkText: {
    textAlign: 'center',
    fontFamily: Fonts.Bold,
    fontSize: SF(25),
    color: COLORS.solid_grey,
  },
  removerDarkTextRegular: {
    textAlign: 'center',
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.solid_grey,
  },
  dateTimeAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.65,
    paddingRight: 50,
  },
  dateHeadAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.65,
  },
  paymentBodyText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(10),
    color: COLORS.dark_grey,
  },
  scrolCon: {
    // borderWidth:1,
    height: windowHeight * 0.28,
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  datePickerCon: {
    borderWidth: 1,
    height: SH(38),
    width: SW(45),
    borderRadius: 7,
    borderColor: COLORS.solidGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(7),
  },
  calendarStyle: {
    width: SW(5),
    height: SW(5),
    resizeMode: 'contain',
  },
  txtInput: {
    flex: 1,
    justifyContent: 'center',
    fontSize: SF(11),
    top: 2,
    color: COLORS.solid_grey,
  },
  selectAmountCon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SW(45),
    height: SH(50),
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    borderRadius: 5,
    marginRight: moderateScale(8),
  },
  selectAmountText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.solid_grey,
    fontSize: SF(15),
    color: COLORS.solid_grey,
  },
  selectAmountText2: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
    fontSize: SF(15),
  },
  selectAmountCon2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SW(45),
    height: SH(50),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    marginRight: moderateScale(8),
  },
  userNotFound: {
    color: COLORS.primary,
    fontFamily: Fonts.MaisonRegular,
    fontSize: SF(20),
    alignSelf: 'center',
  },
  addCashDrop: {
    flex: Platform.OS === 'android' ? 1 : 0,
  },
});