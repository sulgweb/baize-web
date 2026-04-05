import Image from "next/image";

interface IIntroducProps {
  introduceList: {
    title: React.ReactNode;
    description: React.ReactNode;
  }[];
}

const Introduce = (props: IIntroducProps) => {
  const { introduceList } = props;

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                priority
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                priority
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {introduceList?.map((item) => (
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                    {item.title}
                  </h3>
                  {typeof item.description === "string" ||
                  typeof item.description === "number" ? (
                    <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                      {item.description}
                    </p>
                  ) : (
                    <div className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
