import React from "react";
//import React, { useState, useEffect, useContext } from "react";

import useGlobalHook from "use-global-hook";

import * as actions from "./actions";

const initialState = {
  //false by default
  isLogged: false,
  //not use
  isLoading: {
    login: false,
  },
  //turn stateChanges to "true" in order to watch the state on each change
  debug: { stateChanges: true },
};

export const useGlobal = useGlobalHook(React, initialState, actions);
