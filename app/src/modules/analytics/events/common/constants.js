export const AUTH = {
  SIGNUP: {
    ATTEMPTED: "signup_attempted",
    FAILED: "signup_failed",
    SUCCESS: "signup_success",
  },

  LOGIN: {
    ATTEMPTED: "login_attempted",
    REQUESTED: "login_requested",
    SUCCESS: "login_success",
    FAILED: "login_failed",
  },

  RESET_PASSWORD: {
    ATTEMPTED: "reset_password_attempted",
    SUCCESS: "reset_password_success",
    FAILED: "reset_password_failed",
  },

  FORGOT_PASSWORD: {
    ATTEMPTED: "forgot_password_attempted",
    SUCCESS: "forgot_password_success",
    FAILED: "forgot_password_failed",
  },

  EMAIL_VERIFICATION: {
    SEND_ATTEMPTED: "email_verification_send_attempted",
    SEND_SUCCESS: "email_verification_send_success",
    SEND_FAILED: "email_verification_send_failed",
    SUCCESS: "email_verification_success",
    FAILED: "email_verification_failed",
  },

  VERIFY_OOBCODE: {
    ATTEMPTED: "verify_oobcode_attempted",
    FAILED: "verify_oobcode_failed",
    SUCCESS: "verify_oobcode_success",
  },
  AUTH_MODAL: {
    SHOWN: "auth_modal_shown",
  },

  SOURCE: {
    NAVBAR: "navbar",
    GETTING_STARTED: "getting_started",
    CREATE_FILE_MOCK: "create_file_mock",
    CREATE_NEW_RULE: "create_new_rule",
    CREATE_API_MOCK: "create_api_mock",
    CREATE_NEW_APP: "create_new_app",
    SESSION_RECORDING: "session_recording",
    UPLOAD_FILES: "upload_file_to_server",
    UPLOAD_RULES: "upload_rules",
    SHARE_RULES: "share_rules",
    EXPORT_RULES: "export_rules",
    IMPORT_SHARED_LIST: "import_shared_list",
    ACCESS_SHARED_LIST: "access_shared_list",
    SAVE_DRAFT_SESSION: "save_draft_session",
    ENABLE_SYNC: "enable_syncing",
    ENABLE_BACKUP: "enable_backup",
    LOGIN_CTA: "login_cta",
    SIGNUP_CTA: "signup_cta",
    DELETE_RULE: "delete_rule",
    COMMAND_BAR: "command_bar",
    WORKSPACE_SIDEBAR: "workspace_sidebar",
    RULES_LIST: "rules_list",
  },
  POPOVER: {
    SHOWN: "popover_at_signup_shown",
    CANCELLED: "popover_at_signup_cancelled",
    CONTINUED: "Popover_at_signup_continued",
  },
};

export const RULES = {
  RULE_CREATED: "rule_created",
  RULE_EDITED: "rule_edited",
  RULE_DELETED: "rule_deleted",
  RULE_ACTIVATED: "rule_activated",
  RULE_DEACTIVATED: "rule_deactivated",
  RULE_DUPLICATED: "rule_duplicated",
  RULE_PIN_TOGGLED: "rule_pin_toggled",
  RULE_EXPORTED: "rule_exported",
  RULE_PAIR_CREATED: "rule_pair_created",
  RULE_FILTER_MODIFIED: "rule_filter_modified",
  RULE_FILTER_MODAL_TOGGLED: "rule_filter_modal_toggled",
  RULE_EXECUTED: "rule_executed",

  RULES_EXPORTED: "rules_exported",
  RULES_DELETED: "rules_deleted",
  RULES_TRASHED: "rules_trashed",
  RULES_UNGROUPED: "rules_ungrouped",
  RULE_CREATION_WORKFLOW_STARTED: "rule_creation_workflow_started",
  RULE_TUTORIAL_MODAL_SHOWN: "rule_tutorial_modal_shown",
  RULE_FEATURE_USAGE: "rule_feature_usage",
  ERROR_IN_RULE_CREATION: "error_in_rule_creation",
  RULE_EDITOR_CLOSED: "rule_editor_closed",
  RULE_EDITOR_HEADER_CLICKED: "rule_editor_header_clicked",
  NEW_RULE_BUTTON_CLICKED: "new_rule_button_clicked",
  RULE_TYPE_SWITCHED: "rule_type_switched",
  RULE_DEMO_VIDEO_CLICKED: "rule_demo_video_clicked",
  GETTING_STARTED_VIDEO_PLAYED: "getting_started_video_played",
  RULE_SIMULATOR_TRIED: "rule_simulator_tried",
};

export const GROUPS = {
  GROUP_CHANGED: "group_changed",
  GROUP_CREATED: "group_created",
  GROUP_STATUS_TOGGLED: "group_status_toggled",
  GROUP_DELETED: "group_deleted",
};

export const ONBOARDING = {
  INSTALL_EXTENSION_LINK_CLICKED: "install_extension_link_clicked",
  SIDEBAR_CLICKED: "sidebar_clicked",
  HEADER_CLICKED: "header_clicked",
  HELPDESK_CLICKED: "helpdesk_clicked",
};

export const TEAMS = {
  WORKSPACE_SWITCHED: "workspace_switched",
  INVITE_TEAMMATES_CLICKED: "invite_teammates_clicked",
  INVITE_TEAMMATES_BANNER_CLICKED: "invite_teammates_banner_clicked",
  INVITE_MORE_TEAMMATES_BUTTON_CLICKED: "invite_more_teammates_button_clicked",
  CREATE_NEW_WORKSPACE_LINK_CLICKED: "create_new_workspace_link_clicked",
  CREATE_NEW_WORKSPACE_BUTTON_CLICKED: "create_new_workspace_button_clicked",
  NEW_WORKSPACE_CREATED: "new_workspace_created",
  ADD_MEMBER_CLICKED: "add_member_clicked",
  REQUEST_TEAM_PLAN_CARD_SHOWN: "request_team_plan_card_shown",
  REQUEST_TEAM_PLAN_CARD_CLICKED: "request_team_plan_card_clicked",
  TEAM_PLAN_INTEREST_CAPTURED: "team_plan_interest_captured",
};
