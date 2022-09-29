import {Navigate, Redirect, Route, Routes} from "react-router-dom"
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import Login from "./Page/Login";
import history from "./history"
import {useRecoilState} from "recoil";
import {TOKEN_KEY, tokenAtom} from "./Store/userObject";
import {useWatch} from "./Utils/Hooks/useWatch"
import Tab from "./Page/Tab";
import Main from "./Page/Main";
import Registration from "./Page/Registration";
import ListСompanies from "./Page/ListСompanies";
import PageCompanie from "./Page/PageCompanie";
let initialRoute = history.location.pathname !== "/login" ? history.location.pathname : "/"

function App() {
  const [token, setToken] = useRecoilState(tokenAtom)

  useWatch(token, (token, prevToken) => {
    if (token === null && prevToken) {
      localStorage.setItem(TOKEN_KEY, "")
    } else if (token && prevToken === null) {
      localStorage.setItem(TOKEN_KEY, token)
      initialRoute = undefined
    }
  })
  return (
    <div className="flex-container">
      <Routes>
        <Route
          path='/tab/*'
          element={<Tab />}
        />
        <Route
          path='/login'
          element={<Login onSubmit={setToken} initialRoute={initialRoute}/>}
        />
        <Route
          path="/registration"
          element={<Registration />}
        />
        <Route
          path="*"
          element={<Navigate to="/tab"/>}
        />
        <Route
          path="/tab/"
          element={<Main />}
        />
        <Route
          path="/tab/"
          element={<ListСompanies />}
        />
        <Route
          path="/tab/company"
          element={<PageCompanie />}
        />

      </Routes>
    </div>
  );
}

export default App;
