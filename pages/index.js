import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import SmallCard from "../components/blog/SmallCard";

const Index = ({ blogs }) => {
  const showNewestBlog = () => {
    return blogs?.map((blog, i) => {
      return (
        <div className="col-md-4 my-2" key={i}>
          <article>
            <SmallCard blog={blog} />
          </article>
        </div>
      );
    });
  };

  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <h1 className="display-5 font-weight-bold">
                PROGRAMMING AND RANDOM BLOGS
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">
                Random blogs to read. All about programming, career, selfnotes,
                self development, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>Newest Blog</h3>
          <div className="row">{showNewestBlog()}</div>
        </div>
      </article>
    </Layout>
  );
};

Index.getInitialProps = () => {
  let skip = 0;
  let limit = 3;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data?.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data?.blogs,
      };
    }
  });
};

export default withRouter(Index);
