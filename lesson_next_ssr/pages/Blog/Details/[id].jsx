import React from "react";
import { formatDate } from "@/utils/functions";

const BlogDetail = ({ article }) => {
  return (
    <div className="container lg:mx-auto mx-5 mt-24 max-w-3xl ">
      <div>
        {article ? (
          <>
            <div className="flex flex-col content-center">
              <img
                className="mb-3 lg:w-[770px] md:w-[750px] w-[365px] "
                src={article.cover_image}
                alt=""
              />
              <div className="flex lg:items-center items-start lg:flex-row flex-col my-5 gap-5">
                <div className="flex items-center ">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={article.user.profile_image}
                    alt="avatar"
                  />
                  <h4 className="ml-2 text-lg text-gray-500">
                    {article.user.name}
                  </h4>
                </div>
                <p className="text-lg text-gray-500">
                  {formatDate(article.created_at)}
                </p>
              </div>
            </div>
            <h1 className="lg:text-2xl md:text-xl text-lg font-semibold text-slate-900 ">
              {article.title}
            </h1>
            <div className="my-8 w-auto">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: article.body_html,
                }}
              ></div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();

  return {
    props: { article },
    revalidate: 110,
  };
}
export async function getStaticPaths() {
  const res = await fetch(`https://dev.to/api/articles/?per_page=5`);
  const articles = await res.json();
  const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
  const articles2 = await res1.json();
  const ids = articles.map((article) => article.id);
  const ids2 = articles2.map((article) => article.id);
  ids.concat(ids2);
  console.log("ids2", ids2);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
}
