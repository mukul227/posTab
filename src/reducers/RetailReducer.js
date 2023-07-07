import { TYPES } from '@/Types/Types';

const INITIALSTATE = {
  categoryList: [],
  subCategories: [],
  brands: {},
  products: [],
  SeaProductList: [],
  getAllCart: [],
  productbunList: [],
  getUserDetail: [],
  getWallet: {},
  walletGetByPhone: [],
  getTips: {},
  getProductDefault: [],
  getOneProduct: {},
  checkSuppliedVariant: [],
  requestMoney: {},
  requestCheck: {},
};

export const retailReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.CLEAR_CHECK_STORE:
      return {
        ...state,
        requestCheck: {},
      };
    case TYPES.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: payload.categoryList,
      };
    case TYPES.GET_CATEGORY_RESET:
      return {
        ...state,
        categoryList: [],
      };

    case TYPES.GET_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategories: payload.subCategoryList?.payload?.data ?? [],
      };
    case TYPES.GET_SUB_CATEGORY_RESET:
      return {
        ...state,
        subCategories: [],
      };

    case TYPES.GET_BRAND_SUCCESS:
      return {
        ...state,
        brands: payload.brandList?.payload?.data ?? [],
      };
    case TYPES.GET_BRAND_RESET:
      return {
        ...state,
        brands: [],
      };

    case TYPES.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload?.productList?.payload?.data ?? [],
      };
    case TYPES.GET_PRODUCT_RESET:
      return {
        ...state,
        products: [],
      };
    case TYPES.GET_PRODUCTDEF_RESET:
      return {
        ...state,
        products: [],
      };

    case TYPES.GET_PRODUCTDEF_SUCCESS:
      return {
        ...state,
        products: payload?.productList?.payload?.data ?? [],
      };

    case TYPES.GET_SEAPRODUCT_SUCCESS:
      return {
        ...state,
        SeaProductList: payload?.SeaProductList?.payload?.data ?? [],
      };
    case TYPES.GET_ALL_CART_SUCCESS:
      return {
        ...state,
        getAllCart: payload?.getAllCart?.payload ?? [],
      };
    case TYPES.GET_ALL_CART_RESET:
      return {
        ...state,
        getAllCart: [],
      };
    case TYPES.GET_BUNDLEOFFER_SUCCESS:
      return {
        ...state,
        productbunList: payload?.productbunList?.payload?.data ?? [],
      };
    case TYPES.GET_BUNDLEOFFER_RESET:
      return {
        ...state,
        productbunList: [],
      };
    case TYPES.GET_USERDETAIL_SUCCESS:
      return {
        ...state,
        getUserDetail: payload?.getUserDetail?.payload?.data ?? [],
      };
    case TYPES.GET_USERDETAIL_RESET:
      return {
        ...state,
        getUserDetail: [],
      };
    case TYPES.GET_WALLET_SUCCESS:
      return {
        ...state,
        getWallet: payload?.getWallet?.payload,
      };
    case TYPES.GET_WALLET_RESET:
      return {
        ...state,
        getWallet: [],
      };

    case TYPES.GET_WALLET_PHONE_SUCCESS:
      return {
        ...state,
        walletGetByPhone: payload?.walletGetByPhone,
      };
    case TYPES.GET_WALLET_PHONE_RESET:
      return {
        ...state,
        walletGetByPhone: [],
      };

    case TYPES.GET_TIPS_SUCCESS:
      return {
        ...state,
        getTips: payload?.getTips?.payload,
      };
    case TYPES.GET_TIPS_RESET:
      return {
        ...state,
        getTips: [],
      };

    case TYPES.GET_PRODUCT_DEF_SUCCESS:
      return {
        ...state,
        getProductDefault: payload?.getProductDefault,
      };
    case TYPES.GET_PRODUCT_DEF_RESET:
      return {
        ...state,
        getProductDefault: [],
      };

    case TYPES.GET_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        getOneProduct: payload?.getOneProduct,
      };

    case TYPES.CHECK_SUPPLIES_VARIANT_SUCCESS:
      return {
        ...state,
        checkSuppliedVariant: payload?.checkSuppliedVariant,
      };
    case TYPES.CHECK_SUPPLIES_VARIANT_RESET:
      return {
        ...state,
        checkSuppliedVariant: [],
      };

    case TYPES.REQUEST_MONEY_SUCCESS:
      return {
        ...state,
        requestMoney: payload?.requestMoney,
      };
    case TYPES.REQUEST_CHECK_SUCCESS:
      return {
        ...state,
        requestCheck: payload,
      };

    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};
