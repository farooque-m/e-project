import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import React, { useEffect, useState } from "react";

import ShopProvider from "./context/shopcontext";

import Homepage from "./pages/homepage";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();


function App() {
  
  return (
    <ShopProvider>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Homepage />
  </StyletronProvider>
  </ShopProvider>
  );
}

export default App;
