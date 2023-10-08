import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import PostsPage from "../pages/PostsPage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts">
        {
          routes.map((route) => 
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          )
        }
      </Route>
      <Route path="/*" element={<PostsPage />} />
    </Routes>
  )
}