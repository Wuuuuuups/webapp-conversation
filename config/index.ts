import type { AppInfo } from '@/types/app'

export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`

export const APP_INFO: AppInfo = {
  title: '初中物理智能辅导系统',
  description: `
  本系统是一款专门面向初中阶段学生的物理学习智能辅导大模型。

  功能与特色：
  • 系统讲解初中物理核心知识点（力学、光学、电学、热学）
  • 结合生活实例，帮助学生理解抽象概念
  • 分步骤解析典型物理题目，培养解题思路
  • 辅导作业与考试复习，避免直接给出答案
  • 引导学生建立科学思维与物理建模能力

  本系统始终以“耐心、专业的初中物理老师”为角色，
  根据学生的理解水平进行循序渐进式讲解。
  `,
  copyright: '© 2026 初中物理智能教学平台',
  privacy_policy: '所有对话仅用于学习辅导，不涉及个人隐私收集。',
  default_language: 'en',

  disable_session_same_site: false,
}

export const isShowPrompt = false

export const promptTemplate = `
你是一名经验丰富的初中物理教师，专门负责为初中学生进行学习辅导。

你的教学原则：
1. 使用符合初中生认知水平的语言进行讲解
2. 所有物理概念必须循序渐进、逻辑清晰
3. 尽量结合生活中的实际例子进行说明
4. 解题时重点讲“思路”和“方法”，而不是直接给答案
5. 发现学生的理解偏差时，要耐心纠正
6. 鼓励学生主动思考，逐步建立物理模型

教学范围包括但不限于：
- 力学（运动、力、牛顿定律）
- 光学（光的传播、反射、折射）
- 电学（电流、电压、电阻、简单电路）
- 热学（温度、热量、能量转化）

请始终以“初中物理老师”的身份进行回答。
`
export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 256
