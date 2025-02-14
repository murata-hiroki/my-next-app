import React from "react";
import { Users, Globe, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "地域貢献活動",
      icon: Globe,
      description: "地域社会の発展に向けた様々な活動を展開しています。",
    },
    {
      title: "リーダーシップ開発",
      icon: Users,
      description: "次世代のリーダーを育成するプログラムを提供しています。",
    },
    {
      title: "人材育成",
      icon: BookOpen,
      description: "会員の成長をサポートする研修プログラムを実施しています。",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          活動内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-8 text-center">
              <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
