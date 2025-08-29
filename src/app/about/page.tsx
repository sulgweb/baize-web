import SectionTitle from "@/components/Common/SectionTitle";
import type { Metadata } from "next";
import { gitHubUrl } from "@/utils/textHelper";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "关于白泽开源团队：使命、愿景与社区参与方式，致力于通过开源推动技术进步。",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "关于白泽开源团队",
    description:
      "关于白泽开源团队：使命、愿景与社区参与方式，致力于通过开源推动技术进步。",
    images: [
      {
        url: "/images/logo/icon.png",
        width: 600,
        height: 600,
        alt: "白泽开源团队",
      },
    ],
  },
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <SectionTitle
              title="关于白泽开源团队"
              paragraph="我们是一支致力于开源技术创新的团队，专注于开发高质量的工具和解决方案，为开发者社区贡献力量。"
              center={true}
              mb="60px"
            />
            <div className="mb-8">
              <p className="text-body-color text-lg md:text-xl">
                白泽，传说中的神兽，能辨善恶，通晓万物。我们以此为名，寓意着团队对技术本质的深刻理解和对开源精神的坚定信念。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-28 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full md:mx-0">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  我们的使命
                </h3>
                <p className="text-body-color leading-relaxed">
                  通过开源技术创新，降低开发门槛，提升开发效率，让更多开发者能够专注于创造价值，推动整个技术生态的进步。
                </p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full md:mx-0">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  我们的愿景
                </h3>
                <p className="text-body-color leading-relaxed">
                  成为开源技术领域的引领者，构建一个开放、协作、创新的技术社区，让开源精神惠及每一个热爱技术的开发者。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[600px] text-center">
            <SectionTitle
              title="加入我们"
              paragraph="如果你喜欢折腾各种技术，想要为开发者社区贡献力量，欢迎加入白泽开源团队！"
              center={true}
              mb="40px"
            />

            <div className="bg-primary/5 border-primary/20 rounded-lg border p-8">
              <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
                如何参与
              </h4>
              <div className="text-body-color space-y-4">
                <p>🌟 关注我们的GitHub项目，提出Issue和Pull Request</p>
                <p>💬 加入我们的技术讨论群，分享你的想法</p>
                <p>📚 贡献代码、文档或翻译</p>
                <p>🚀 参与项目开发和维护</p>
              </div>

              <div className="mt-6">
                <a
                  href={gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-lg px-6 py-3 text-white transition-colors"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  访问GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
