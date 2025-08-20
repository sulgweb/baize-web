import Introduce from "@/components/Common/Introduce";
import SelectImage from "@/components/ImageCompress/SelectImage";

const AboutPage = () => {
  const introduceList = [
    {
      title: "免费",
      description: "网站也好，SDK也好，全部免费用！",
    },
    {
      title: "高性能",
      description:
        "采用了队列+并发的协同处理，结合高效传输机制，保障系统高性能运行",
    },
  ];
  return (
    <>
      <SelectImage />
      <Introduce introduceList={introduceList} />
    </>
  );
};

export default AboutPage;
