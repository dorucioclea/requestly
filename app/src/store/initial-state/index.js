import APP_CONSTANTS from "config/constants";
import { CONSTANTS as GLOBAL_CONSTANTS } from "@requestly/requestly-core";
// SUB
const appListJson = require("./sub/appsList.json");

const INITIAL_STATE = {
  /* User */
  user: {
    loggedIn: false,
    details: null,
  },

  userPersona: {
    page: 0,
    persona: "",
    useCases: [],
    referralChannel: "",
    isSurveyCompleted: false,
  },

  /* App Mode */
  appMode: GLOBAL_CONSTANTS.APP_MODES.EXTENSION,

  /* App Theme */
  appTheme: APP_CONSTANTS.THEMES.DARK,

  /* Rules */
  rules: {
    allRules: {
      rules: [],
      groups: [],
    },
    currentlySelectedRule: {
      data: false,
      config: false,
      hasUnsavedChanges: false,
      errors: {},
    },
    rulesToPopulate: [],
    groupwiseRulesToPopulate: {},
    selectedRules: {},
    lastBackupTimeStamp: "",
  },

  /* Search */
  search: {
    rules: "",
    files: "",
    sharedLists: "",
    marketplace: "",
  },

  /* To force re-render a component */
  pendingRefresh: {
    rules: false,
    sharedLists: false,
    sessionRecordingConfig: false,
  },

  /* To force re-render a component */
  pendingHardRefresh: {
    rules: false,
  },

  /* Shared Lists */
  sharedLists: {
    selectedLists: false,
  },

  /* Toggle and Configure Modals Globally */
  activeModals: {
    loadingModal: {
      isActive: false,
      props: {},
    },
    authModal: {
      isActive: false,
      props: {},
    },
    renameGroupModal: {
      isActive: false,
      props: {},
    },
    extensionModal: {
      isActive: false,
      props: {},
    },
    freeTrialExpiredModal: {
      isActive: false,
      props: {},
    },
    syncConsentModal: {
      isActive: false,
      props: {},
    },
    personaSurveyModal: {
      isActive: false,
      props: {},
    },
  },

  /* Marketplace */
  marketplace: {
    ruleStatus: {},
  },

  desktopSpecificDetails: {
    isBackgroundProcessActive: false,
    isProxyServerRunning: false,
    proxyPort: 8080,
    appsList: appListJson,
    availableAppsScanned: false, // @nsr remove completely, as it is now async
    proxyIp: "127.0.0.1",
  },

  // country of current user
  country: "",

  // if trial part
  trialModeEnabled: false,

  mobileDebugger: {
    app: {
      id: null,
      name: null,
      platform: null,
    },
    interceptor: {
      deviceId: null,
    },
  },

  initializations: {
    auth: false,
  },

  userPreferences: {
    isRedirectRuleTutorialModalShown: false,
  },
};

export default INITIAL_STATE;
