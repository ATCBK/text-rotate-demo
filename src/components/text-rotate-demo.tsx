'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'

const exampleImages = [
  {
    url: '/转场图片/01.png',
    link: '/转场图片/01.png',
  },
  {
    url: '/转场图片/02.png',
    link: '/转场图片/02.png',
  },
  {
    url: '/转场图片/03.png',
    link: '/转场图片/03.png',
  },
  {
    url: '/转场图片/04.png',
    link: '/转场图片/04.png',
  },
  {
    url: '/转场图片/05.png',
    link: '/转场图片/05.png',
  },
  {
    url: '/转场图片/06.png',
    link: '/转场图片/06.png',
  },
]

const learningFeatures = [
  {
    number: '01',
    label: '学习者动态画像与科学学习路径构建',
    title: '先理解学生，再为他规划真正适合的学习过程',
    points: [
      ['个性化创新', '融合目标、基础、偏好与薄弱点，构建动态学习画像'],
      ['科学路径', '结合掌握学习与最近发展区，拆解阶段任务与学习节奏'],
      ['知识组织', '通过知识图谱与课程知识库，定位前置关系和薄弱节点'],
      ['实用价值', '解决高校学生“资源很多，却不知道先学什么”的问题'],
    ],
  },
  {
    number: '02',
    label: '讯飞能力驱动的全模态学习资源生成',
    title: '围绕当前学习任务，生成真正可以使用的学习资源',
    points: [
      ['讯飞集成', '接入星火、智文与语音能力，参与核心资源生成流程'],
      ['全模态生成', '支持文档、PPT、视频、播客、代码与思维导图'],
      ['智能体协同', '完成需求分析、知识检索、内容生成与质量评审'],
      ['工程落地', '资源可预览、评估、记录笔记、下载并持续进入学习'],
    ],
  },
  {
    number: '03',
    label: '智能评测、个性化辅导与学习数据闭环',
    title: '从学习、练习到反馈，让每一次行为都优化下一步学习',
    points: [
      ['智能评测', '围绕当前路径生成练习，支持判题、解析、错题与收藏'],
      ['个性辅导', '学习伙伴结合画像与上下文，持续讲解并调用浏览器工具'],
      ['资源回流', '外部内容、网页资料与社区帖子均可沉淀到个人资源库'],
      ['数据闭环', '笔记、练习和报告持续更新画像，实现“越用越懂学生”'],
    ],
  },
  {
    number: '04',
    label: '多智能体协同、工具扩展与可信学习空间',
    title: '让AI从回答问题，升级为能够协同、执行并可信交付的智能体',
    points: [
      ['角色化辅导', '通过角色工坊快速创建Tutor，适配不同学习任务与风格'],
      ['前沿交互', '结合Skills、AG-UI与A2UI，生成可执行的学习任务卡'],
      ['工具扩展', '通过联网搜索与MCP接入本地工具、HTTP服务和外部能力'],
      ['可信可控', '采用RAG引用、置信度标注与防幻觉机制保障回答质量'],
    ],
  },
  {
    number: '05',
    label: '统一画像驱动的多端连续学习体系',
    title: '让同一个学生在不同终端中，继续同一段学习过程',
    points: [
      ['多端矩阵', '覆盖网页、桌面、飞书、微信小程序与浏览器插件'],
      ['统一状态', '画像、记忆、资源、任务和练习记录在不同终端持续同步'],
      ['协同触达', '支持九类渠道接入，学习提醒与智能体服务融入日常场景'],
      ['工程价值', '体现多端开发、系统可移植性、易推广与完整产品能力'],
    ],
  },
  {
    number: '06',
    label: '教师课程建设、学情干预与平台治理',
    title: '让教师参与教学，让管理员保障平台真实运行',
    points: [
      ['课程建设', '教师可上传资料、创建知识库并自主扩展不同高校学科'],
      ['教学干预', '结合学生详情、AI诊断和通知分发开展精准教学支持'],
      ['数据决策', '通过学习报告、排行榜与教学大屏掌握班级整体学情'],
      ['平台治理', '学生、教师、管理员三角色协同，支持权限、审核与审计'],
    ],
  },
]

function Item({
  index,
  image,
  link,
  onInView,
}: {
  index: number
  image: string
  link: string
  onInView: (inView: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: '-45% 0px -45% 0px',
  })

  useEffect(() => {
    onInView(isInView)
  }, [isInView, onInView])

  return (
    <section
      ref={ref}
      className="flex h-full w-1/2 snap-center items-center justify-center"
      aria-label={`Photo ${index + 1}`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block size-24 overflow-hidden rounded-md shadow-sm sm:size-36 md:size-44"
      >
        <img
          src={image}
          alt={`Example ${index + 1}`}
          className="size-full object-cover"
        />
      </a>
    </section>
  )
}

function FeatureCopyPanel({ index }: { index: number }) {
  const feature = learningFeatures[index] ?? learningFeatures[0]

  return (
    <section
      className="w-full max-w-3xl px-6 py-8 text-left sm:px-10 lg:px-14"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={feature.number}
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -22, filter: 'blur(8px)' }}
          transition={{ type: 'spring', duration: 0.72, bounce: 0 }}
          className="flex flex-col gap-7"
        >
          <div className="flex items-start gap-4">
            <span className="shrink-0 font-mono text-4xl font-semibold leading-none text-muted-foreground sm:text-5xl">
              {feature.number}
            </span>
            <div className="min-w-0 pt-1">
              <p className="text-lg font-semibold leading-8 tracking-normal text-foreground sm:text-xl">
                {feature.label}
              </p>
              <h1 className="mt-4 max-w-2xl text-lg font-semibold leading-tight tracking-normal text-foreground sm:text-xl">
                {feature.title}
              </h1>
            </div>
          </div>

          <div className="grid gap-3">
            {feature.points.map(([name, description]) => (
              <p
                key={name}
                className="text-base leading-8 tracking-normal text-foreground sm:text-lg"
              >
                <strong className="font-semibold">{name}｜</strong>
                <span className="text-muted-foreground">{description}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

function Preview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slicedImages = exampleImages

  const handleInView = useCallback((index: number, inView: boolean) => {
    if (inView) {
      setActiveIndex(index)
    }
  }, [])

  return (
    <main className="h-screen w-full overflow-hidden bg-background text-foreground">
      <div className="relative h-full w-full">
        <div className="sticky top-0 flex h-screen w-full items-center justify-end bg-background">
          <div className="flex w-full justify-end sm:w-2/3">
            <FeatureCopyPanel index={activeIndex} />
          </div>
        </div>
        <div className="absolute inset-0 hidden overflow-auto snap-y snap-mandatory sm:block">
          {slicedImages.map((image, index) => (
            <Item
              key={image.url}
              index={index}
              image={image.url}
              link={image.link}
              onInView={(inView) => handleInView(index, inView)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export { Preview }
