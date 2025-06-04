import { Route, Routes } from "react-router";
import { routes } from "./routes";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout ?? React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
