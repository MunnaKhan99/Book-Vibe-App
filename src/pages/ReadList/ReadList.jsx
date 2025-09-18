import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Books/Book';
import './readlist.css'

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        console.log(convertedStoredBooks);

        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList);
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if (type === "pages"){
            const sortedByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            console.log(sortedByPage);
        }
        if (type === "ratings"){
            const sortedByRatings = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByRatings);
            console.log(sortedByRatings);
        }
    }

    return (
        <div>
            <h2 className='drop-down-title drop-down'>Books</h2>
            <div className=" drop-down dropdown dropdown-bottom dropdown-center">
                <div tabIndex={0} role="button" className=" sort-btn">sort by {sort ? sort : ""}< RiArrowDropDownLine style={{fontSize:'30px'}}/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")} className='text-xl'>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")} className='text-xl'>Rating</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Book list</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>

                    <div className='readlist-container'>
                        {
                            readList.map((b) => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;