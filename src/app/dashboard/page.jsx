"use client"

import React, { useEffect, useState } from "react";
import useSWR from 'swr'

const Dashboard = () => {
   // const [data, setData] = useState([]);
   // const [isLoading, setIsLoading] = useState(false);
   // const [err, setErr] = useState(false);

   // useEffect(()=>{
   //    const getData=async () => {
   //       setIsLoading(true);
   //       const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });
   //       if(!res.ok){
   //          setErr(true)
   //       }
   //       const data = await res.json()
   //       setData(data);
   //       setIsLoading(false);
   //    };
   //    getData();
   // }, []);
   const fetcher = (...args) => fetch(...args).then(res => res.json())

   const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
   if (error) return <div>failed to load</div>
   if (!data) return <div>loading...</div>
   return <div>hello {data.name}!</div>
}

export default Dashboard;