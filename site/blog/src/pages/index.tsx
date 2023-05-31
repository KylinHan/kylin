import Head from "next/head";

import { Icon, addIcon } from "@iconify/react";
import Layout from "../components/Layout";
import Seo from "@/components/Seo";

import projects from "../resource/projects";

addIcon("antdmobile", {
  body: `<defs>
  <linearGradient x1="55.2905824%" y1="30.2400227%" x2="5.8956238%" y2="78.3822166%" id="linearGradient-1">
      <stop stop-color="#29CDFF" offset="0%"></stop>
      <stop stop-color="#148EFF" offset="36.2446377%"></stop>
      <stop stop-color="#0A60FF" offset="100%"></stop>
  </linearGradient>
  <linearGradient x1="87.3789235%" y1="27.8488943%" x2="25.8257448%" y2="80.2051011%" id="linearGradient-2">
      <stop stop-color="#FA816E" offset="0%"></stop>
      <stop stop-color="#F74A5C" offset="48.0123264%"></stop>
      <stop stop-color="#F51D2C" offset="100%"></stop>
      <stop stop-color="#F51D2C" offset="100%"></stop>
      <stop stop-color="#F51D2C" offset="100%"></stop>
  </linearGradient>
  <linearGradient x1="50%" y1="-22.9977195%" x2="50%" y2="100%" id="linearGradient-3">
      <stop stop-color="#FA8E7D" offset="0%"></stop>
      <stop stop-color="#F74A5C" offset="49.6339425%"></stop>
      <stop stop-color="#F51D2C" offset="100%"></stop>
  </linearGradient>
  <linearGradient x1="50%" y1="0%" x2="32.8245806%" y2="116.815793%" id="linearGradient-4">
      <stop stop-color="#4285EB" offset="0%"></stop>
      <stop stop-color="#2EC7FF" offset="100%"></stop>
  </linearGradient>
</defs>
<g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g id="图形" transform="translate(-220.000000, -1186.000000)">
      <g id="logo-square-transparent" transform="translate(220.000000, 1186.000000)">
          <rect id="矩形" x="0" y="0" width="200" height="200"></rect>
          <g id="图形" transform="translate(20.000000, 20.000000)">
              <rect id="蒙版" x="0" y="0" width="160" height="160"></rect>
              <g transform="translate(4.000000, 34.000000)">
                  <path d="M47.5487749,2.32095337 C55.330265,-2.15684064 65.2683783,0.521334142 69.7461723,8.30282418 L69.7461723,8.30282418 L110.010941,78.2747559 C112.507454,82.6131853 111.035571,88.1532061 106.714971,90.6804515 C106.70106,90.6885884 106.687127,90.696688 106.673173,90.7047501 C102.371199,93.1901663 96.8689331,91.7175558 94.3835169,87.4155824 L94.3835169,87.4155824 L58.1482265,24.6964072 C57.8806198,24.2332105 57.4958197,23.8486016 57.0324901,23.5812252 C55.5744919,22.7398494 53.710481,23.2397207 52.8691052,24.6977189 L52.8691052,24.6977189 L16.5871433,87.5697898 C16.5736951,87.5930938 16.5601408,87.6163363 16.5464808,87.6395167 C14.0638539,91.8524078 8.63606414,93.255064 4.42317305,90.7724372 C0.158828816,88.2594893 -1.2871543,82.781618 1.18137323,78.491407 L1.18137323,78.491407 L41.566565,8.30341354 C42.9976641,5.81621541 45.0616367,3.7521565 47.5487749,2.32095337 Z" id="形状结合" fill="url(#linearGradient-1)"></path>
                  <path d="M108.14407,4.51739317 C108.147347,4.52301923 108.150619,4.52864881 108.153885,4.5342819 L135.691801,52.0361125 C138.219257,56.3958759 136.742954,61.9787099 132.390806,64.5192565 C128.05595,67.0497084 122.490519,65.5869504 119.960067,61.2520952 C119.955329,61.2439774 119.950603,61.2358522 119.945889,61.2277197 L92.4047651,13.7096675 C89.8792897,9.35234078 91.3575208,3.77299489 95.709165,1.23774055 C100.04862,-1.29041247 105.615917,0.177938025 108.14407,4.51739317 Z" id="形状结合" fill="url(#linearGradient-2)"></path>
                  <path d="M142.907411,91.7231751 C147.929109,91.7231751 152,87.6595745 152,82.6468691 C152,77.6341637 147.929109,73.5705632 142.907411,73.5705632 C137.885712,73.5705632 133.814822,77.6341637 133.814822,82.6468691 C133.814822,87.6595745 137.885712,91.7231751 142.907411,91.7231751 Z" id="椭圆形备份-7" fill="url(#linearGradient-3)"></path>
                  <path d="M65.5665433,14.7074499 C70.6076588,14.7074499 74.3768737,16.6653921 76.8741881,20.5812766 L76.8741881,20.5812766 L110.011075,78.2619791 C112.506334,82.6054252 111.024504,88.1486949 106.694776,90.6676817 C106.682394,90.6748855 106.669994,90.6820598 106.657578,90.6892045 C102.343438,93.1716628 96.8337062,91.6867914 94.3512478,87.3726513 L94.3512478,87.3726513 L63.4352337,33.6452585 L58.1345871,24.684268 C57.8608166,24.2214462 57.469477,23.8392893 57.0002864,23.5765832 C55.5314978,22.7541891 53.6741272,23.2781953 52.851733,24.7469839 L52.851733,24.7469839 L52.8127546,24.816599 C56.274165,18.0771663 60.5254279,14.7074499 65.5665433,14.7074499 Z" id="形状结合" fill="url(#linearGradient-4)"></path>
              </g>
          </g>
      </g>
  </g>
</g>`,
  width: 200,
  height: 200,
});

const Index = () => {
  return (
    <Layout>
      <Seo title="主页" />

      <h1 className="mt-4 text-xl text-slate-900 tracking-tight max-w-5xl">
        前端开发工程师一枚，早年从事UI设计工作，现以前端开发为主，有丰富的ToB系统开发架构经验。喜欢工程化方面领域，喜欢交互设计。
      </h1>
      <ul className="mt-4 text-slate-500 font-light">
        <li>
          🎉 技术栈包括:
          NodeJs、React、Typescript、Electron、Antd、Sass、NextJs等。
        </li>
        <li>🌱 目前正在学习前端自动化测试方面知识。</li>
        <li>
          💬 如何联系我: 微信搜索 AsQhan 或邮箱：
          <a className="text-brand" href="mailto:whenhan@foxmail.com">
            whenhan@foxmail.com
          </a>
        </li>
      </ul>
      <h2 className="mb-8 mt-12 pb-2 text-xl text-slate-500 tracking-tight border-b border-slate-100">
        项目经历
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((proj) => (
          <div
            key={proj.key}
            className="relative rounded-xl p-6 text-sm leading-6 transition bg-slate-50 hover:bg-slate-100"
          >
            <h2>
              <button className="flex gap-2 transition items-center">
                <span className="absolute inset-0 rounded-xl"></span>
                <span className="font-semibold text-slate-900">
                  {proj.name}
                </span>
                <span className="text-slate-400 flex gap-1 items-center grayscale">
                  {proj.icons?.map((c) => (
                    <Icon
                      key={c}
                      icon={c}
                      {...(c.includes("echarts")
                        ? { fontSize: 16 }
                        : { fontSize: 18 })}
                    />
                  ))}
                </span>
              </button>
            </h2>
            <p className="mt-1 text-slate-500">{proj.desc}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
