import React from "react";
import PageInfo from "@/components/Common/PageInfo";
import GithubLink from "@/components/Common/GithubLink";
import { gitHubUrl } from "@/utils/textHelper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webpack CDN插件",
  description:
    "这是一个在 webpack 中使用公共 cdn 的库，包括了 unpkg, jsdelivr 等多个 cdn 资源，如加载失败会自动切换下一个 cdn 进行加载。",
};

export default function WebpackCdn() {
  return (
    <div>
      <PageInfo title={metadata.title} description={metadata.description} />
      <GithubLink
        href={`${gitHubUrl}/baize-package/blob/master/packages/webpack-add-cdn-script/README.md`}
      />
    </div>
  );
}
