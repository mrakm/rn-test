import { MaterialIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ANIMATION, APPLICATION_NAME, MENU_LABELS, STATUSBAR_HEIGHT, TIMING_CONFIG, width } from "./constants";
import { styles } from "./styles";
import { DeckMenuProps } from "./types";
import { COLORS } from "@/constants/colors";

const DeckMenu: React.FC<DeckMenuProps> = ({ children, menuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const slideAnimation = useSharedValue<number>(0);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = (): void => {
    const toValue = isOpen ? 0 : 1;
    slideAnimation.value = withTiming(toValue, TIMING_CONFIG);
    setIsOpen(!isOpen);
  };

  const navigateTo = (route: string): void => {
    router.push(route as any);
    toggleMenu();
  };

  const handleSignOut = () => {
    // Handle sign out logic here
    console.log("Sign out pressed");
  };

  const mainContainerStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      slideAnimation.value,
      [0, 1],
      [0, ANIMATION.ROTATION_ANGLE]
    );
    const scale = interpolate(
      slideAnimation.value,
      [0, 1],
      [1, ANIMATION.SCALE_FACTOR],
      "clamp"
    );
    const widthTab = interpolate(
      slideAnimation.value,
      [0, 1],
      [0, width * ANIMATION.WIDTH_MULTIPLIER],
      "clamp"
    );

    return {
      transform: [
        { perspective: ANIMATION.PERSPECTIVE },
        { rotate: `-${rotate}deg` },
        { scale },
      ],
      left: widthTab,
    };
  });

  const menuContainerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      slideAnimation.value,
      [0, ANIMATION.OPACITY_THRESHOLD],
      [0, 1],
      "clamp"
    );

    const translateY = interpolate(
      slideAnimation.value,
      [0, 1],
      [-STATUSBAR_HEIGHT/2, 0],
      "clamp"
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

   // Get current screen name from pathname
   const currentScreen = pathname === '/' ? 'index' : pathname.slice(1);
   const menuName = MENU_LABELS[currentScreen] || MENU_LABELS.index;
 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={[styles.menuContainer, menuContainerStyle]}>
        <View style={styles.menuContent}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderText}>{APPLICATION_NAME}</Text>
          </View>
          <View>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.route}
                style={[
                  styles.menuItem,
                  item.isActive && styles.activeMenuItem,
                ]}
                onPress={() => navigateTo(item.route)}
              >
                <MaterialIcons name={item.icon} size={24} color={COLORS.WHITE} />
                <Text
                  style={[
                    styles.menuItemText,
                    item.isActive && styles.activeMenuItemText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
            </View>
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={handleSignOut}
            >
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.mainContainer, mainContainerStyle]}>
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuIconButton}>
              <MaterialIcons name="menu" size={28} color={COLORS.PRIMARY} />
            </TouchableOpacity>
            <Text style={styles.headerText}>
              {menuName}
            </Text>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default DeckMenu;
