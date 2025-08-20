"use client";
import React, { useState } from "react";
import { InboxOutlined, DownloadOutlined } from "@ant-design/icons";
import { Upload, Button } from "antd";
import { compressImagesWorker, CompressBackInfo } from "baize-compress-image";

const { Dragger } = Upload;

interface ImageItem {
  id: string;
  originalFile: File;
  compressedFile?: File;
  originalSize: number;
  compressedSize?: number;
  compressRate?: number;
  compressTime?: number;
  status: "pending" | "compressing" | "completed" | "error";
  error?: string;
}

export default function SelectImage() {
  const [imageList, setImageList] = useState<ImageItem[]>([]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleMultipleFileChange = async (e: any) => {
    const files = Array.from(e.fileList || [e.file]);

    // 添加新图片到列表
    const newImages: ImageItem[] = files.map((file: File) => ({
      id: Math.random().toString(36).substr(2, 9),
      originalFile: file,
      originalSize: file.size,
      status: "pending",
    }));

    setImageList((prev) => [...prev, ...newImages]);

    // 自动压缩新添加的图片
    for (const image of newImages) {
      await compressImage(image);
    }
  };

  const compressImage = async (imageItem: ImageItem) => {
    try {
      setImageList((prev) =>
        prev.map((img) =>
          img.id === imageItem.id ? { ...img, status: "compressing" } : img,
        ),
      );

      const results = await compressImagesWorker([imageItem.originalFile], {
        quality: 0.7,
      });

      const result = results[0];
      if (result.status === "fulfilled") {
        const { compressInfo, file } = result.value;
        const compressedSize = file.size;
        const compressRate =
          ((imageItem.originalSize - compressedSize) / imageItem.originalSize) *
          100;

        setImageList((prev) =>
          prev.map((img) =>
            img.id === imageItem.id
              ? {
                  ...img,
                  compressedFile: file,
                  compressedSize,
                  compressRate,
                  compressTime: compressInfo.time,
                  status: "completed",
                }
              : img,
          ),
        );
      } else {
        setImageList((prev) =>
          prev.map((img) =>
            img.id === imageItem.id
              ? {
                  ...img,
                  status: "error",
                  error: result.reason?.toString() || "压缩失败",
                }
              : img,
          ),
        );
      }
    } catch (error) {
      setImageList((prev) =>
        prev.map((img) =>
          img.id === imageItem.id
            ? {
                ...img,
                status: "error",
                error: error?.toString() || "压缩失败",
              }
            : img,
        ),
      );
    }
  };

  const downloadImage = (imageItem: ImageItem) => {
    if (imageItem.compressedFile) {
      const url = URL.createObjectURL(imageItem.compressedFile);
      const a = document.createElement("a");
      a.href = url;
      a.download = `compressed_${imageItem.originalFile.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "compressing":
        return "text-blue-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "已完成";
      case "compressing":
        return "压缩中...";
      case "error":
        return "压缩失败";
      default:
        return "压缩中...";
    }
  };

  return (
    <div className="container pt-16 md:pt-20 lg:pt-28">
      <div className="mx-auto">
        {/* 上传区域 */}
        <div className="mb-8">
          <Dragger
            showUploadList={false}
            accept="image/jpg,image/jpeg,image/webp,image/png"
            customRequest={handleMultipleFileChange}
            multiple
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined className="text-4xl text-blue-500" />
            </p>
            <p className="ant-upload-text text-lg font-semibold">
              点击或拖拽图片到此区域进行压缩
            </p>
            <p className="ant-upload-hint text-gray-500">
              支持单张或批量压缩，支持 JPG、JPEG、WebP、PNG 格式
            </p>
          </Dragger>
        </div>

        {/* 操作按钮 */}
        {imageList.length > 0 && (
          <div className="mb-6 flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-300">
              共 {imageList.length} 张图片
            </div>
          </div>
        )}

        {/* 图片列表 */}
        {imageList.length > 0 && (
          <div className="space-y-4">
            {imageList.map((imageItem) => (
              <div
                key={imageItem.id}
                className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-start space-x-4">
                  {/* 图片预览 */}
                  <div className="flex-shrink-0">
                    <img
                      src={URL.createObjectURL(imageItem.originalFile)}
                      alt={imageItem.originalFile.name}
                      className="h-24 w-24 rounded-lg border object-cover"
                    />
                  </div>

                  {/* 图片信息 */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="truncate text-lg font-medium text-gray-900 dark:text-gray-100">
                        {imageItem.originalFile.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(imageItem.status)} ${
                            imageItem.status === "completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : imageItem.status === "compressing"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : imageItem.status === "error"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {imageItem.status === "compressing" && (
                            <div className="mr-2 h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                          )}
                          {getStatusText(imageItem.status)}
                        </span>
                      </div>
                    </div>

                    {/* 文件信息 */}
                    <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          原始大小
                        </p>
                        <p className="font-medium dark:text-gray-200">
                          {formatFileSize(imageItem.originalSize)}
                        </p>
                      </div>
                      {imageItem.compressedSize && (
                        <>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              压缩后大小
                            </p>
                            <p className="font-medium dark:text-gray-200">
                              {formatFileSize(imageItem.compressedSize)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              压缩率
                            </p>
                            <p className="font-medium text-green-600 dark:text-green-400">
                              {imageItem.compressRate?.toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              压缩耗时
                            </p>
                            <p className="font-medium dark:text-gray-200">
                              {imageItem.compressTime}ms
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex items-center space-x-3">
                      {imageItem.status === "completed" &&
                        imageItem.compressedFile && (
                          <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            onClick={() => downloadImage(imageItem)}
                          >
                            下载压缩后图片
                          </Button>
                        )}

                      {imageItem.status === "error" && (
                        <Button onClick={() => compressImage(imageItem)}>
                          重试
                        </Button>
                      )}
                    </div>

                    {/* 错误信息 */}
                    {imageItem.error && (
                      <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                        {imageItem.error}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 统计信息 */}
        {imageList.length > 0 && (
          <div className="mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              压缩统计
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {imageList.length}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  总图片数
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {imageList.filter((img) => img.status === "completed").length}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  压缩完成
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {imageList.filter((img) => img.status === "pending").length}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  压缩中
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {imageList.filter((img) => img.status === "error").length}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  压缩失败
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
