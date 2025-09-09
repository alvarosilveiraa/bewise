export default {
  expo: {
    owner: "bewise",
    name: "BeWise",
    slug: "bewise",
    scheme: "bewise",
    version: "0.1.0",
    platforms: ["android", "ios"],
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      backgroundColor: "#ffffff",
    },
    android: {
      edgeToEdgeEnabled: true,
      softwareKeyboardLayoutMode: "resize",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      permissions: [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
      ],
      package: "app.bewise",
      versionCode: 1,
    },
    ios: {
      supportsTablet: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        NSLocationWhenInUseUsageDescription:
          "We'll use your location to ensure accurate deliveries and to make the address registration process quicker.",
      },
      bundleIdentifier: "app.bewise",
      buildNumber: "1",
    },
    orientation: "default",
    assetBundlePatterns: ["**/*"],
    userInterfaceStyle: "automatic",
    plugins: [
      [
        "expo-router",
        {
          root: "./src/routes",
        },
      ],
      [
        "react-native-edge-to-edge",
        {
          enforceNavigationBarContrast: false,
        },
      ],
    ],
    // extra: {
    //   eas: {
    //     projectId: process.env.PROJECT_ID,
    //   },
    // },
    runtimeVersion: {
      policy: "appVersion",
    },
    // updates: {
    //   url: `https://u.expo.dev/${process.env.PROJECT_ID}`,
    // },
    newArchEnabled: true,
  },
};
