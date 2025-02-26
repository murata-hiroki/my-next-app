"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Members = () => {
  return (
    <section className="w-full pt-32 bg-white flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold mb-4">青年会議所のメンバー</h2>
        <p className="text-gray-600 text-lg mb-12">
          私たちのメンバーをご紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
              <p className="font-semibold">山田太郎</p>
              <p className="text-gray-500 text-sm">理事長</p>
              <p className="text-sm mt-2">地域社会の発展に尽力しています。</p>
              <div className="flex gap-3 mt-4">
                <Link href="https://linkedin.com">
                  <Image
                    src="/Facebook_Logo.png"
                    alt="Linkedin"
                    width={18}
                    height={18}
                  />
                </Link>
                <Link href="https://twitter.com">
                  <Image src="/x_logo.png" alt="X" width={18} height={18} />
                </Link>
                <Link href="https://instagram.com">
                  <Image
                    src="/Instagram_Logo.png"
                    alt="Instagram"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
