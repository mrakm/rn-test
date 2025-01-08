import { Dimensions, Platform, StatusBar } from "react-native";
import { Easing } from "react-native-reanimated";
import { AnimationConfigType } from "./types";

export const { width, height } = Dimensions.get("window");

export const STATUSBAR_HEIGHT = Platform.select({
  ios: 47,
  android: StatusBar.currentHeight ?? 0,
  default: 0,
});

export const TIMING_CONFIG: AnimationConfigType = {
  duration: 600,
  easing: Easing.bezier(0.4, 0, 0.6, 1),
};

// Menu icons mapping
export const MENU_ICONS: Record<string, any> = {
  "index": "home",
  "Favourites": "favorite",
  "YourCart": "shopping-cart",
  "YoutOrders": "receipt-long",
};

// Menu labels mapping
export const MENU_LABELS: Record<string, string> = {
  "index": "Home",
  "Favourites": "Favourites",
  "YourCart": "Your Cart",
  "YoutOrders": "Your Orders",
};

// Animation constants
export const ANIMATION = {
  ROTATION_ANGLE: 9,
  SCALE_FACTOR: 1.05,
  WIDTH_MULTIPLIER: 4 / 6,
  OPACITY_THRESHOLD: 0.4,
  PERSPECTIVE: 1000,
} as const;

export const APPLICATION_NAME="Beka";