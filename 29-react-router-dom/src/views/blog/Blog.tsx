import React, { useEffect, useState } from "react";
import {useParams, useSearchParams}  from 'react-router-dom';
import { PostModel } from "../../models/PostModel";
interface BlogProps {

}

export const Blog: React.FC<BlogProps> = ({}: BlogProps) => {

    let {idBlog} = useParams();

    const [searchParams, setSearchParam] = useSearchParams();

    const [blog, setBlog] = useState<PostModel> ({
        id: 0,
        text: '',
        date: '',
    });

    useEffect(()=> {
        setBlog({...blog, text: searchParams.get('text')!, date: searchParams.get('date')! });

    },[searchParams])
    return <>
        <h1>Blog {idBlog}</h1>
        <p>
            {blog.text}
        </p>
        <small>
            {blog.date}
        </small>
    </>
}