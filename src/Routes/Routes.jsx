import { createBrowserRouter }  from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                loader:()=>fetch('/bookData.json'),
                Component: Home
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:'readList',
                loader:()=>fetch('/bookData.json'),
                Component:ReadList
            },
            {
              
                path:'/bookDetails/:id',
                loader:async ({params}) =>{
                    const res = await fetch('/bookData.json');
                    const books = await res.json();
                    const book = books.find(b=>b.bookId === parseInt(params.id));
                    return book;
                },
                Component:BookDetails,

            },
        ]
    },
]);