import React from "react";
import { repoUrl, baseParams } from "@/utils/githubHelper";
import PageInfo from "../Common/PageInfo";
import Download from "./download";
import { gitHubUrl } from "@/utils/textHelper";

export const data = {
  title: "白泽工具箱",
  description:
    "白泽工具箱是一款功能强大的多媒体工具，为用户提供了多种多样的多媒体处理功能。无论您是需要对音视频转码、提取音频/视频/字幕、文字转语音(TTS)、屏幕录制、截图，还是对音视频图片进行压缩，这个工具都能轻松实现。",
};
export const dynamic = "force-dynamic";

export default async function BaizeToolboxInfo() {
  async function init() {
    const [repoInfoRes, repoReleasesRes, contributorsRes] = await Promise.all([
      fetch(repoUrl, baseParams),
      fetch(`${repoUrl}/releases`, baseParams),
      fetch(`${repoUrl}/contributors`, baseParams),
    ]);
    return {
      repoInfo: await repoInfoRes.json(),
      repoReleases: await repoReleasesRes.json(),
      contributors: await contributorsRes.json(),
    };
  }

  const { repoInfo, repoReleases, contributors } = await init();

  return (
    <div className="container">
      <PageInfo title={data?.title} description={data?.description} />

      {/* <AppGithubStatus repoInfo={repoInfo} contributors={contributors} /> */}

      <div className="mt-16 flex items-center justify-center gap-x-6">
        <Download repoReleases={repoReleases} />
        <a
          href={`${gitHubUrl}/baize-toolbox/releases`}
          target="_blank"
          className="text-sm leading-6 font-semibold text-gray-400 hover:text-gray-600"
        >
          查看更多版本 <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
