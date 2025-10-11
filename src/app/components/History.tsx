import Image from "next/image";
import Link from "next/link";

const History = () => {
  return (
    <div className="bg-white">
      <div className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 lg:grid-cols-2">
              {/* モバイルで画像を先に表示 */}
              <div className="relative w-full h-64 sm:h-80 lg:h-auto rounded-lg overflow-hidden lg:order-2">
                <Image
                  src="/history-image.jpg"
                  alt="松原青年会議所の活動"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              {/* テキストコンテンツ */}
              <div className="relative lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  松原青年会議所について
                </h2>
                <div className="mt-6 text-lg leading-8 text-gray-600">
                  <p>
                    松原青年会議所は、地域社会の発展を目指し、1965年に設立されました。
                    以来、青少年育成や地域貢献活動を通じて、多くの人々に影響を与えてきました。
                  </p>
                  <ul className="mt-8 space-y-2">
                    <li>• 地域との連携を大切にしています。</li>
                    <li>
                      • 活動を通じてメンバーの自己成長ができる環境を提供します。
                    </li>
                    <li>• 未来を見据えた取り組みを行っています。</li>
                  </ul>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link href="/about">
                      <button className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-bold w-full">
                        詳細はこちら
                      </button>
                    </Link>
                    <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50">
                      参加する
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
