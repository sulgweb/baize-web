import React from "react";
import { repoUrl, baseParams } from "@/utils/githubHelper";
import { projectInfo } from "@/utils/textHelper";
import Download from "./download";

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

  console.log(repoInfo, repoReleases, contributors);

  return (
    <div className="container pt-16 md:pt-20 lg:pt-28">
      <div className="mx-auto max-w-2xl pt-4 lg:pt-32">
        <div className="mb-8 text-center">
          <h1
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            {projectInfo?.title}
          </h1>
          <p className="mt-6 text-left indent-10 text-lg leading-8 text-gray-600">
            {projectInfo?.description}
          </p>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <Download repoReleases={repoReleases} />
            <a
              href="/version"
              className="text-sm leading-6 font-semibold text-gray-400 hover:text-gray-600"
            >
              查看更多版本 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        {/* <AppGithubStatus repoInfo={repoInfo} contributors={contributors} /> */}
      </div>
    </div>
  );
}
