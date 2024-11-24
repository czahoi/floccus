export const actions = {
  LOAD_LOCKED: 'LOAD_LOCKED',
  UNLOCK: 'UNLOCK',
  SET_KEY: 'SET_KEY',
  UNSET_KEY: 'UNSET_KEY',
  LOAD_ACCOUNTS: 'LOAD_ACCOUNTS',
  SELECT_ACCOUNT: 'SELECT_ACCOUNT',
  LOAD_TREE: 'LOAD_TREE',
  LOAD_TREE_FROM_DISK: 'LOAD_TREE_FROM_DISK',
  CREATE_BOOKMARK: 'CREATE_BOOKMARK',
  EDIT_BOOKMARK: 'EDIT_BOOKMARK',
  DELETE_BOOKMARK: 'DELETE_BOOKMARK',
  SHARE_BOOKMARK: 'SHARE_BOOKMARK',
  CREATE_FOLDER: 'CREATE_FOLDER',
  EDIT_FOLDER: 'EDIT_FOLDER',
  DELETE_FOLDER: 'DELETE_FOLDER',
  IMPORT_BOOKMARKS: 'IMPORT_BOOKMARKS',
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  IMPORT_ACCOUNTS: 'IMPORT_ACCOUNTS',
  EXPORT_ACCOUNTS: 'EXPORT_ACCOUNTS',
  DELETE_ACCOUNT: 'DELETE_ACCOUNT',
  RESET_ACCOUNT: 'RESET_ACCOUNT',
  STORE_ACCOUNT: 'STORE_ACCOUNT',
  TRIGGER_SYNC: 'TRIGGER_SYNC',
  TRIGGER_SYNC_ALL: 'TRIGGER_SYNC_ALL',
  TRIGGER_SYNC_UP: 'TRIGGER_SYNC_UP',
  TRIGGER_SYNC_DOWN: 'TRIGGER_SYNC_DOWN',
  CANCEL_SYNC: 'CANCEL_SYNC',
  DOWNLOAD_LOGS: 'DOWNLOAD_LOGS',
  EXPORT_BOOKMARKS: 'EXPORT_BOOKMARKS',
  TEST_WEBDAV_SERVER: 'TEST_WEBDAV_SERVER',
  TEST_NEXTCLOUD_SERVER: 'TEST_NEXTCLOUD_SERVER',
  TEST_LINKWARDEN_SERVER: 'TEST_LINKWARDEN_SERVER',
  START_LOGIN_FLOW: 'START_LOGIN_FLOW',
  STOP_LOGIN_FLOW: 'STOP_LOGIN_FLOW',
  REQUEST_NETWORK_PERMISSIONS: 'REQUEST_NETWORK_PERMISSIONS',
  COUNT_BOOKMARK_CLICK: 'COUNT_BOOKMARK_CLICK',
  REQUEST_HISTORY_PERMISSIONS: 'REQUEST_HISTORY_PERMISSIONS',
  SET_SORTBY: 'SET_SORTBY',
}

export const mutations = {
  LOADING_START: 'LOADING_START',
  LOADING_END: 'LOADING_END',
  SET_LOCKED: 'SET_LOCKED',
  LOAD_ACCOUNTS: 'LOAD_ACCOUNTS',
  STORE_ACCOUNT_DATA: 'STORE_ACCOUNT_DATA',
  REMOVE_ACCOUNT: 'REMOVE_ACCOUNT',
  LOAD_TREE: 'LOAD_TREE',
  SET_LOGIN_FLOW_STATE: 'SET_LOGIN_FLOW_STATE',
  SET_LAST_FOLDER: 'SET_LAST_FOLDER',
}
