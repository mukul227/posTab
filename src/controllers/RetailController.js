import {
  USER_URL,
  PRODUCT_URL,
  ApiProductInventory,
  ApiUserInventory,
  ORDER_URL,
  ApiOrderInventory,
  ApiWalletInventory,
  WALLET_URL,
} from '@/utils/APIinventory';
import { strings } from '@/localization';
import { HttpClient } from './HttpClient';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { store } from '@/store';

export class RetailController {
  static async getCategory(sellerID) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.getCategory +
        `?page=1&limit=20&seller_id=${sellerID}&main_category=true`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            text2: 'catgory error',
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error((strings.valiadtion.error = error.msg)));
        });
    });
  }

  static async getSubCategory(sellerID, selectedId) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.getSubCategory +
        `?page=1&limit=20&category_id=${selectedId}&seller_id=${sellerID}&main_category=false`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            text2: 'Sub-Category not found',
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }

  static async getBrand(sellerID, selectedId) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.getBrand +
        `?page=1&limit=10&seller_id=${sellerID}&category_id=${selectedId}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            text2: 'Brands not found',
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }

  static async getProduct(
    selectedId,
    subSelectedId,
    brandSelectedId,
    sellerID
  ) {
    const urlAccCat = (
      selectedId,
      subSelectedId,
      brandSelectedId,
      sellerID
    ) => {
      if (selectedId && sellerID && !subSelectedId && !brandSelectedId) {
        return (
          PRODUCT_URL +
          ApiProductInventory.getProduct +
          `?app_name=pos&delivery_options=3&page=1&limit=10&seller_id=${sellerID}&category_ids=${selectedId}`
        );
      } else if (selectedId && subSelectedId && sellerID && !brandSelectedId) {
        return (
          PRODUCT_URL +
          ApiProductInventory.getProduct +
          `?app_name=pos&delivery_options=3&page=1&limit=10&sub_category_ids=${subSelectedId}&seller_id=${sellerID}&category_ids=${selectedId}`
        );
      } else if (selectedId && subSelectedId && brandSelectedId && sellerID) {
        return (
          PRODUCT_URL +
          ApiProductInventory.getProduct +
          `?app_name=pos&delivery_options=3&page=1&limit=10&sub_category_ids=${subSelectedId}&brand_id=${brandSelectedId}&seller_id=${sellerID}&category_ids=${selectedId}`
        );
      }
    };
    return new Promise((resolve, reject) => {
      const endpoint = urlAccCat(
        selectedId,
        subSelectedId,
        brandSelectedId,
        sellerID
      );
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            text2: 'Product not found',
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }

  static async getProductDefault(sellerID) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.getProduct +
        `?app_name=pos&delivery_options=3&seller_id=${sellerID}&page=1&limit=10`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          // Toast.show({
          //   text2: 'def product error',
          //   position: 'bottom',
          //   type: 'error_toast',
          //   visibilityTime: 1500,
          // });
          reject(error);
        });
    });
  }

  static async getSearchProduct(search, sellerID) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.getProduct +
        `?app_name=pos&delivery_options=3&search=${search}&seller_id=${sellerID}`;
      HttpClient.get(endpoint)
        .then(response => {
          if (response.status === 204) {
            resolve([]);
          }
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            text2: error.msg,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error((strings.valiadtion.error = error.msg)));
        });
    });
  }

  static async getAllCart() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getAllCart;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static async clearAllCart() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.clearAllCart;
      HttpClient.delete(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static async clearOneCart(data) {
    return new Promise((resolve, reject) => {
      const endpoint =
        ORDER_URL +
        ApiOrderInventory.clearAllCart +
        `/` +
        `${data.cartId}` +
        `/` +
        `${data.productId}`;
      const body = {
        cartId: data.cartId,
        productId: data.productId,
      };
      HttpClient.delete(endpoint, body)
        .then(response => {
          if (response?.status_code === 200) {
            Toast.show({
              position: 'bottom',
              type: 'success_toast',
              text2: response?.msg,
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: error?.msg,
            visibilityTime: 2000,
          });
          reject(error.msg);
        });
    });
  }

  static async addTocart(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.addTocart;
      // let supplyID = data.supplyId.toString();
      // let supplyPriceID = data.supplyPriceID.toString();
      // let variantId = data.supplyVariantId.toString();
      const body = data?.supplyVariantId
        ? {
            seller_id: data.seller_id,
            service_id: data.service_id,
            product_id: data.product_id,
            qty: data.qty,
            supply_id: data.supplyId.toString(),
            supply_price_id: data.supplyPriceID.toString(),
            supply_variant_id: data.supplyVariantId.toString(),
          }
        : {
            seller_id: data.seller_id,
            service_id: data.service_id,
            product_id: data.product_id,
            qty: data.qty,
            supply_id: data.supplyId.toString(),
            supply_price_id: data.supplyPriceID.toString(),
          };
      HttpClient.post(endpoint, body)
        .then(response => {
          // if (response?.msg === 'PosCart created successfully') {
          //   Toast.show({
          //     position: 'bottom',
          //     type: 'success_toast',
          //     text2: response?.msg,
          //     visibilityTime: 2000,
          //   });
          // }
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: error.msg,
            visibilityTime: 2000,
          });
          reject(error.msg);
        });
    });
  }
  static async addNotes(data) {
    return new Promise((resolve, reject) => {
      const endpoint =
        ORDER_URL + ApiOrderInventory.addNotes + `/${data.cartId}`;
      const body = {
        notes: data.notes,
      };
      HttpClient.put(endpoint, body)
        .then(response => {
          if (response?.msg === 'PosCart updated!') {
            Toast.show({
              text2: 'Notes add succesfully',
              position: 'bottom',
              type: 'success_toast',
              visibilityTime: 1500,
            });
            resolve(response);
          }
        })
        .catch(error => {
          Toast.show({
            text2: error.msg,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(error.msg);
        });
    });
  }

  static async addDiscountToCart(data) {
    return new Promise((resolve, reject) => {
      const endpoint =
        ORDER_URL + ApiOrderInventory.addNotes + `/${data.cartId}`;
      const orderAmountstrfy = JSON.stringify(data.orderAmount);
      const discountInput = data.amountDis
        ? data.amountDis
        : data.percentDis
        ? data.percentDis
        : data.discountCode;
      const body = {
        discount_value: discountInput,
        discount_flag: data.value,
        order_amount: orderAmountstrfy,
        discount_desc: data.descriptionDis,
      };

      HttpClient.put(endpoint, body)
        .then(response => {
          if (response?.msg === 'PosCart updated!') {
            Toast.show({
              text2: 'Discount add succesfully',
              position: 'bottom',
              type: 'success_toast',
              visibilityTime: 1500,
            });
            resolve(response);
          }
        })
        .catch(error => {
          Toast.show({
            text2: error.msg,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(error.msg);
        });
    });
  }

  static async getProductBundle(id) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiOrderInventory.getProductBundle +
        '?product_id=' +
        `${id}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static async getUserDetail(customerPhoneNo) {
    return new Promise((resolve, reject) => {
      const endpoint =
        WALLET_URL +
        ApiWalletInventory.getUserDetail +
        `?page=1&limit=10&search=${customerPhoneNo}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          // Toast.show({
          //   text2: error.msg,
          //   position: 'bottom',
          //   type: 'error_toast',
          //   visibilityTime: 1500,
          // });
          reject(new Error((strings.valiadtion.error = error.msg)));
        });
    });
  }

  static async sendInvitation(data) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.sendInvitation;
      const body = {
        firstName: data.userFirstname,
        // lastName: data.userLastName,
        email: data.userEmailAdd,
        phone: data.userPhoneNo,
      };
      HttpClient.post(endpoint, body)
        .then(response => {
          if (response?.status_code === 200) {
            Toast.show({
              position: 'bottom',
              type: 'success_toast',
              text2: 'successfully send invitation on your email',
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: error.msg,
            visibilityTime: 2000,
          });
          reject(error.msg);
        });
    });
  }

  static async createOrder(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.createOrder;
      const body = {
        cart_id: data.cartid,
        user_id: data.userId,
        // shipping: 'Pickup',
        // app_name: 'Pos',
        tips: data.tips,
        mode_of_payment: data.modeOfPayment,
      };

      HttpClient.post(endpoint, body)
        .then(response => {
          if (response?.msg === 'Order placed successfully!') {
            Toast.show({
              position: 'bottom',
              type: 'success_toast',
              text2: response?.msg,
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: error.msg,
            visibilityTime: 2000,
          });
          reject(error.msg);
        });
    });
  }

  static async getWalletId(sellerID) {
    return new Promise((resolve, reject) => {
      const endpoint =
        WALLET_URL + ApiWalletInventory.getWallet + `${sellerID}`;
      console.log('endpoint-----------------', endpoint);
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static async walletGetByPhone(walletIdInp) {
    return new Promise((resolve, reject) => {
      const endpoint =
        WALLET_URL +
        ApiWalletInventory.walletGetByPhone +
        `?search=${walletIdInp}`;
      HttpClient.get(endpoint)
        .then(response => {
          if (response?.msg === 'api wallets found') {
            Toast.show({
              position: 'bottom',
              type: 'success_toast',
              text2: 'Wallet found successfully',
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch(error => {
          if (error?.error === 'emptyContent') {
            Toast.show({
              position: 'bottom',
              type: 'error_toast',
              text2: 'Wallet not found',
              visibilityTime: 2000,
            });
          }
          reject(error);
        });
    });
  }

  static async requestMoney(data) {
    return new Promise(async (resolve, reject) => {
      const token = store.getState().auth?.merchantLoginData?.token;
      const endpoint = WALLET_URL + ApiWalletInventory.requestMoney;
      const body = {
        amount: data.amount,
        reciever_address: data.wallletAdd,
      };
      console.log('---------------body', body);
      HttpClient.post(endpoint, body)
        .then(response => {
          if (response?.msg === 'Payment request sent success!') {
            Toast.show({
              text2: 'Request send successfully',
              position: 'bottom',
              type: 'success_toast',
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: error?.msg,
            visibilityTime: 2000,
          });
          reject(error);
        });
    });
  }

  static async requestCheck(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint =
        WALLET_URL + ApiWalletInventory.requestCheck + `${data.requestId}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static async getTips(sellerID) {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getTips + `${sellerID}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static async getOneProduct(sellerID, productId) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.getProduct +
        `/${productId}?app_name=pos&seller_id=${sellerID}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: error.msg,
            visibilityTime: 2000,
          });
          reject(error.msg);
        });
    });
  }

  static async checkSuppliedVariant(data) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL +
        ApiProductInventory.checkSuppliedVariant +
        `?attribute_value_ids=${data.sizeId},${data.colorId}&supply_id=${data.supplyId}`;
      HttpClient.get(endpoint)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast.show({
            position: 'bottom',
            type: 'error_toast',
            text2: 'No Combination, Select Other Variant ',
            visibilityTime: 2000,
          });
          reject(error.msg);
        });
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}
