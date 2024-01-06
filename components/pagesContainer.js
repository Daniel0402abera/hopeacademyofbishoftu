'use client'
import React from "react";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import { sanitize } from "isomorphic-dompurify";

const PagesContainer = (props) => {

  return (
    <div className="bg-white">
    <div className="relative bg-[#f8f9fa]">
      <img
        alt="Banner Image"
        className="w-full h-[400px] object-cover"
        height="100"
        src={props?.props?.data?.attributes?.banner?.data?.attributes?.formats?.small?.url}
        style={{
          aspectRatio: "100/50",
          objectFit: "contain",
        }}
        width="100%"
      />
      
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-16">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          {props?.title}
        </h2>
        <div className="mt-4">
          <div className="inline-block h-1 w-24 bg-[darkBlue]" />
        </div>
      </div>
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {sanitize(props?.props?.data?.attributes?.content)}
          </ReactMarkdown>
          
        {/* <ReactMarkdown >{data?.data?.attributes?.content}</ReactMarkdown> */}
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img
            alt="Student focused"
            className="w-full h-[300px] object-cover"
            height="300"
            src={props?.props?.data?.attributes?.banner?.data?.attributes?.formats?.small?.url}
            style={{
              aspectRatio: "500/300",
              objectFit: "contain",
            }}
            width="500"
          />
          <img
            alt="Students collaborating"
            className="w-full h-[300px] object-cover"
            height="100"
            src={props?.props?.data?.attributes?.banner?.data?.attributes?.formats?.small?.url}
            style={{
              aspectRatio: "500/200",
              objectFit: "contain",
            }}
            width="500"
          />
        </div>
      </div>
    </div>
  </div>
  );
}
export default PagesContainer;