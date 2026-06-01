import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import AboutUs from "../Components/AboutUs";
import HomePage from "../Components/HomePage";
import BlogPage from "../Components/BlogPage";
import StoriesPage from "../Components/StoriesPage";
import CreateContent from "../Components/CreateContent";
import PublicationPage from "../Components/PublicationPage"
import Content from "../Components/Content";

export default function routes() {
    const router = createBrowserRouter([
        {
            path: "/", element: <Layout />,
            children: [
                { path: "", element: <HomePage /> },
                { path: "admin/createContent", element: <CreateContent/>},
                { path: "about", element: <AboutUs /> },
                { path: "category/blog", element: <BlogPage />},
                { path: "category/story", element: <StoriesPage />},
                { path: "category/publication", element: <PublicationPage />},
                { path: "content/:id", element: <Content />}
            ]
        }
    ]);
    return router;
}

