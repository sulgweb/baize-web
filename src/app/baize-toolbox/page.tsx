import React from "react";
import BaizeToolboxInfo from "@/components/BaizeToolbox/BaizeToolboxInfo";
import Introduce from "@/components/Common/Introduce";

export default function BaizeToolBox() {
  const introduceList = [
    {
      title: "免费",
      description: "下载安装后即可免费使用",
    },
    {
      title: "多功能",
      description: (
        <>
          <ul>
            <li>音视频转码</li>
            <li>提取音频/视频/字幕</li>
            <li>文字转语音(TTS)</li>
            <li>屏幕录制、截图</li>
            <li>压缩音视频和图片</li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div>
      <BaizeToolboxInfo />
      <Introduce introduceList={introduceList} />
    </div>
  );
}
