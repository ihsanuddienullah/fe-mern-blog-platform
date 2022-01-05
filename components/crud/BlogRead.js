import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removeBlog } from "../../actions/blog";
import moment from "moment";

const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState("");
    const token = getCookie("token");

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = (slug) => {
        removeBlog(slug, token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs(data);
            }
        });
    };

    const deleteConfirm = (slug) => {
        let answer = window.confirm(
            "Are you sure you want to delete this blog?"
        );
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = (blog) => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <a
                    href={`/user/crud/${blog.slug}`}
                    className="ml-2 btn btn-sm btn-warning"
                >
                    Update
                </a>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <a
                    href={`/admin/crud/${blog.slug}`}
                    className="ml-2 btn btn-sm btn-warning"
                >
                    Update
                </a>
            );
        }
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="pb-5">
                    <h3>{blog.title}</h3>
                    <p className="mark ml-1 pt-2 pb-2">
                        Written by{" "}
                        <Link href={`/profile/${blog?.postedBy?.username}`}>
                            <a>{blog?.postedBy?.name}</a>
                        </Link>{" "}
                        | Published {moment(blog?.updatedAt).fromNow()}
                    </p>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteConfirm(blog.slug)}
                    >
                        Delete
                    </button>
                    {showUpdateButton(blog)}
                </div>
            );
        });
    };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    {message && (
                        <div className="alert alert-warning">{message}</div>
                    )}
                    {showAllBlogs()}
                </div>
            </div>
        </>
    );
};

export default BlogRead;
