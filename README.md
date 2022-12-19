# App Starter
This project is a React Native boilerplate aims to reduce our client onboarding time in many perpectives.

## Key features

- Main features:

    - An easy to copy project to build a new react native project (duplicate)
    - Text input
    - Text area input
    - Switch input
    - Currency input
    - Phone input
    - Select
    - Modal with neccessary buttons and template (delete, confirm)
    - Map select
    - Attachment select
    - Login/Signup form (Only Google/FaceBook/SMS and Email)
    - User Settings screen (Update user name, last name, phone, and profile photo)
    - Basic theme strategy
    - Module generation and structure (to list, edit, view, delete and filtering the entities)
    - Script necessary for the deploying app, docs to publish app

- Set of components
    - Login/Signup/ResetPassword full process
    - Integrate the Google/Facebook with the app
    - SMS Login
    - Forms (Text inputs, Selection, Map Selector, Gallery of Images)
    - Filtering mechanism
    - File downloading
    - Avanced input components
        - Currency input
        - Date picker input
        - Date Range input
        - Color picker input
    - Advanced modals
    - Advanced lists
    - Wizard
    - Camera operations, recording, taking pictures, filters
    - Bluetooth interactions module
    - SKIA Animations samples
    - Music player
    - Video player
    - Fingerprint and faceID

- Set of logics
    - Advanced form validation principles using FE/BE
    - Http Requests
    - TestIDs for e2e
    - Socket support
    - GRPC support
    - Animations in the app
    - Naivgations



## Bugfix:


function dependencyConfig(folder, userConfig = {}) {
  if (userConfig === null) {
    return null;
  }

  const podspecPath = (0, _findPodspec.default)(folder);

  if (!podspecPath) {
    return null;
  }

  return {
    podspecPath,
    configurations: userConfig.configurations || [],
    scriptPhases: userConfig.scriptPhases || []
  };
}

/Users/ali/work/appstarter/node_modules/react-native-macos/node_modules/@react-native-community/cli-platform-ios/build/config/index.js