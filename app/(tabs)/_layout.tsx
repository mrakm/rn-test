import DeckMenu from "@/components/DeckMenu";
import { MENU_ICONS, MENU_LABELS } from "@/components/DeckMenu/constants";
import { MenuItemType } from "@/components/DeckMenu/types";
import { Stack, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";

const RootLayout = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    // Create menu items based on available routes
    const routes = Object.keys(MENU_ICONS).map((route) => ({
      icon: MENU_ICONS[route],
      label: MENU_LABELS[route],
      route: route === "index" ? "/" : `/${route}`,
      isActive: pathname === (route === "index" ? "/" : `/${route}`),
    }));

    setMenuItems(routes);
  }, [pathname]);

  return (
    
      <DeckMenu menuItems={menuItems}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="Favourites"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="YourCart"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="YoutOrders"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
        </Stack>
      </DeckMenu>

  );
};

export default RootLayout;
