import React from "react";
//import React, { useState, useEffect, useContext } from "react";

import useGlobalHook from "use-global-hook";

import * as actions from "./actions";

// i'm creating a store just as an example. This is a super-simplified version of REDUX
const initialState = {
  //false by default
  isLogged: false,
  user: {},
  //not use
  isLoading: {
    login: false, // i'm not even using this but it is an example of how i like to organize the isLoading variables
  },
};

export const useGlobal = useGlobalHook(React, initialState, actions);
