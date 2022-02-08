import renderHTML from "html-react-parser";
import Link from "next/link";
import { Badge } from "reactstrap";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
    const showBlogCategories = (blog) =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <Badge color="primary" pill className="mx-1">
                    {c.name}
                </Badge>
            </Link>
        ));

    const showBlogTags = (blog) =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <Badge color="info" pill className="mx-1">
                    {t.name}
                </Badge>
            </Link>
        ));

    return (
        <div className="card mb-3 big-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={`${API}/blog/photo/${blog.slug}`}
                        className="img-fluid rounded-start img"
                        alt={blog.title}
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link href={`/blogs/${blog.slug}`}>
                            <a>
                                <h5 className="card-title">{blog.title}</h5>
                            </a>
                        </Link>
                        <p className="card-text">
                            {renderHTML(`${blog.excerpt}`)}
                            <Link href={`/blogs/${blog.slug}`}>
                                <a>Read more</a>
                            </Link>
                        </p>
                        {showBlogCategories(blog)}
                        {showBlogTags(blog)}
                        <p className="card-text">
                            <small className="text-muted">
                                Written by{" "}
                                <Link
                                    href={`/profile/${blog?.postedBy?.username}`}
                                >
                                    <a>{blog?.postedBy?.name}</a>
                                </Link>{" "}
                                | Published {moment(blog?.updatedAt).fromNow()}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
