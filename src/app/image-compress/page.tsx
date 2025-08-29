import Introduce from "@/components/Common/Introduce";
import PageInfo from "@/components/Common/PageInfo";
import SelectImage from "@/components/ImageCompress/SelectImage";
import Link from "next/link";
import type { Metadata } from "next";
import { baseUrl, gitHubUrl } from "@/utils/textHelper";

export const metadata: Metadata = {
  title: "图片压缩",
  description:
    "白泽团队开源的专业图片压缩工具，支持 JPG、JPEG、WebP、PNG 格式，采用队列 + 并发处理技术，提供高效的批量压缩服务。拖拽上传即可开始压缩，实时显示压缩进度和效果对比。",
  openGraph: {
    title: "图片压缩 - 白泽开源团队",
    description:
      "专业开源图片压缩工具，支持 JPG/JPEG/WebP/PNG 格式，高效批量压缩，拖拽上传即刻使用。",
    url: `${baseUrl}/image-compress`,
    siteName: "白泽开源团队",
    images: [
      {
        url: "/images/logo/icon.png",
        width: 600,
        height: 600,
        alt: "白泽开源团队 Logo",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "图片压缩 - 白泽开源团队",
    description:
      "开源免费图片压缩工具，支持 JPG/JPEG/WebP/PNG 格式，高效批量压缩。",
    images: ["/images/logo/icon.png"],
  },
};

const ImageCompress = () => {
  const introduceList = [
    {
      title: "免费",
      description: "网站也好，NPM包也好，全部免费用！",
    },
    {
      title: "高性能",
      description:
        "采用了队列+并发的协同处理，结合高效传输机制，保障系统高性能运行",
    },
    {
      title: "NPM",
      description: (
        <Link
          href={`${gitHubUrl}/baize-package/blob/master/packages/baize-compress-image/README.md`}
          target="_blank"
          className="text-primary hover:text-primary/80 transition-colors duration-200"
        >
          查看使用方式
        </Link>
      ),
    },
  ];

  const pageInfo = {
    title: "图片压缩",
    description:
      "白泽团队开源的专业图片压缩工具，支持JPG、JPEG、WebP、PNG格式，采用队列+并发处理技术，提供高效的批量压缩服务。拖拽上传即可开始压缩，实时显示压缩进度和效果对比。",
  };

  return (
    <>
      <PageInfo title={metadata.title} description={metadata.description} />
      <SelectImage />
      <Introduce introduceList={introduceList} />
    </>
  );
};

export default ImageCompress;
