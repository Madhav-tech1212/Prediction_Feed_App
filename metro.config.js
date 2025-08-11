const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

// Extract the string value into a reusable constant
const GLOBAL_CSS_PATH = "./app/globals.css";


module.exports = withNativeWind(config,{input: "GLOBAL_CSS_PATH"})