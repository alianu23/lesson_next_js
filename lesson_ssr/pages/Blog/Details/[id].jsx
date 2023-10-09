import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate, getData } from "@/utils/functions";
import Loader from "@/components/Loader";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogDetailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("Router", id);

  const getBlogDetail = async () => {
    try {
      const data = await getData(`https://dev.to/api/articles/${id}
    `);
      console.log("data", data);
      setDetailData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError("There is an error try again");
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <div className="container mx-auto mt-24 max-w-4xl">
      {isLoading && <Loader />}
      {error && <h1 className="text-red-700 text-3xl">{error}</h1>}
      {!isLoading && (
        <div>
          {blogDetailData ? (
            <>
              <div>
                <h1 className="text-4xl font-semibold text-slate-900 ">
                  {blogDetailData.title}
                </h1>
                <div className="flex items-center mt-5 gap-5">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={blogDetailData.user.profile_image}
                      alt="avatar"
                    />
                    <h4 className="ml-2 text-lg text-gray-500">
                      {blogDetailData.user.name}
                    </h4>
                  </div>
                  <p className="text-lg text-gray-500">
                    {formatDate(blogDetailData.created_at)}
                  </p>
                </div>
              </div>
              <div className="my-8">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: blogDetailData.body_html,
                  }}
                ></div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
