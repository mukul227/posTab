import { combineReducers } from 'redux';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { authReducer } from './AuthReducer';
import { retailReducer } from '@/reducers/RetailReducer';
import { deliveryReducer } from '@/reducers/DeliveryReducer';
import { shippingReducer } from '@/reducers/ShippingReducer';
import { analyticsReducer } from '@/reducers/AnalyticsReducer';
import { customersReducer } from '@/reducers/CustomersReducer';
import { walletReducer } from '@/reducers/WalletReducer';
import { cashTrackingReducer } from '@/reducers/CashTrackingReducer';
import { rewardReducer } from '@/reducers/RewardReducer';
import { appointmentReducer } from '@/reducers/AppointmentReducer';
import { dashboardReducer } from '@/reducers/DashboardReducer';
import { settingReducer } from '@/reducers/SettingReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  auth: authReducer,
  retail: retailReducer,
  delivery: deliveryReducer,
  shipping: shippingReducer,
  analytics: analyticsReducer,
  customers: customersReducer,
  wallet: walletReducer,
  cashTracking: cashTrackingReducer,
  reward: rewardReducer,
  appointment: appointmentReducer,
  dashboard: dashboardReducer,
  setting: settingReducer,
});
