
Mobile Application Project - README

Overview

This project is a mobile application developed using React Native. The application consists of three screens and a bottom navigation menu. It includes features such as IP detection, ISP provider lookup, image selection and display, and real-time market data display for a cryptocurrency ticker.

Features

IP Detection and ISP Provider Lookup

On the first screen, the app detects the user's IP address and ISP provider upon opening.
Users can enter any IP address in a form field to get the corresponding ISP provider and location.
Utilizes the ipwho.is service for IP-based location and ISP information.
Image Slider and Selection

Below the IP form field on the first screen, a slider displays multiple images stored locally or accessible from a specified location.
Clicking on an image passes it to the second screen.
Display Selected Image and IP Data

The second screen shows the IP data and the image selected from the first screen.
Real-Time Market Data

The third screen displays real-time market data for a chosen cryptocurrency ticker (e.g., BTCUSDT).
Utilizes the Binance WebSocket stream for real-time data updates.
Technologies Used

React Native (version >= 0.72)
React Navigation (version >= 6)
TypeScript
WebSockets for real-time data
Additional Libraries

Jest for writing component tests (optional, but recommended)
Getting Started

Follow these instructions to get a copy of the project running on your local machine.

Prerequisites
Node.js (LTS version recommended)
npm or yarn
Android Studio (for running on Android emulator or device)
Installation
Clone the repository:

sh
Copy code
git clone <repository-link>
cd <repository-directory>
Install dependencies:

sh
Copy code
npm install
or

sh
Copy code
yarn install
Run the application:

sh
Copy code
npx react-native run-android
Building APK
Generate APK:
sh
Copy code
cd android
./gradlew assembleRelease
The APK will be generated in android/app/build/outputs/apk/release/.
Usage

First Screen: Displays the user's IP address and ISP provider. Users can enter a different IP address to get related data. An image slider allows users to select an image.
Second Screen: Shows the IP data and the selected image from the first screen.
Third Screen: Displays real-time market data for a chosen cryptocurrency ticker.
Configuration

IP Lookup Service: The app uses ipwho.is for IP-based information. No additional configuration is required.
Real-Time Data Source: The app uses Binance WebSocket stream for real-time market data. This is pre-configured and does not require a key.
Testing

If tests are included, they can be run using:

sh
Copy code
npm test
or

sh
Copy code
yarn test
Notes

The application is designed to work in portrait orientation only.
Landscape orientation is disabled.
If a different stack or architecture was used, the justification and details are provided in the repository.
Links

Repository: GitHub Repository
APK Build: Download APK
Contact

For any questions or issues, please contact [Your Name] at [your-email@example.com].
