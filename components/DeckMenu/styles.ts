import { StyleSheet } from "react-native";
import { height, width } from "./constants";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
  menuContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.PRIMARY,
    zIndex: 0,
    height,
    width,
  },
  menuContent: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 80,
    width: width / 2,
  },
  menuHeader: {
    marginBottom: 40,
    width: width / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  menuHeaderText: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: "600",
  },
  menuItem: {
    height: 50,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: COLORS.WHITE,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "400",
  },
  activeMenuItem: {
    backgroundColor: COLORS.ACCENT,
    borderRadius: 10,
  },
  activeMenuItemText: {
    color: COLORS.WHITE,
    fontWeight: "600",
  },
  signOutButton: {
    height: 50,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  signOutText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: "400",
    paddingHorizontal: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    shadowColor: COLORS.DARK_ACCENT,
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backfaceVisibility: "hidden",
  },
  hamburgerButton: {
    padding: 16,
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dividerContainer: {
    height: 50,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.SECONDARY,
    marginVertical: 20,
    marginHorizontal: 20,
    opacity: 0.1,
  },
  headerContainer: {
    padding: 16,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconButton: {
    padding: 4,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '300',
    letterSpacing:3,
    marginLeft: 16,
    color: COLORS.PRIMARY,
  },
});