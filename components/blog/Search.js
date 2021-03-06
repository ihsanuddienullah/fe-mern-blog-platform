import { useState, useEffect } from "react";
import renderHTML from "html-react-parser";
import Link from "next/link";
import { listSearch } from "../../actions/blog";

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: "",
    });

    const { search, results, searched, message } = values;

    const searchSubmit = (e) => {
        e.preventDefault();
        listSearch({ search }).then((data) => {
            setValues({
                ...values,
                results: data,
                searched: true.valueOf,
                message: `${data.length} blogs found`,
            });
        });
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            search: e.target.value,
            searched: false,
            results: [],
        });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div
                className="p-2 bg-white searched-blogs my-2"
                style={{ borderRadius: "0.25rem" }}
            >
                {message && (
                    <p className="pt-2 text-muted font-italic">{message}</p>
                )}

                {results.map((blog, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => {
        return (
            <form onSubmit={searchSubmit}>
                <div className="row">
                    <div className="col-md-8">
                        <input
                            type="search"
                            className="form-control mb-2"
                            placeholder="Search blogs"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <button
                            className="btn btn-block btn-outline-primary"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    };

    return (
        <div className="container-fluid mb-3">
            <div className="pt-3 pb-2">{searchForm()}</div>
            {searched && <div>{searchedBlogs(results)}</div>}
        </div>
    );
};
export default Search;
