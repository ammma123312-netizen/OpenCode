# OpenCode - منصة الذكاء الاصطناعي المتكاملة

## الهيكل المعماري

### المجلدات الرئيسية

```
OpenCode/
├── src/                          # الكود الأمامي
│   ├── pages/                    # صفحات Next.js
│   │   ├── _app.tsx             # تطبيق رئيسي
│   │   ├── _document.tsx         # المستند
│   │   ├── index.tsx             # الصفحة الرئيسية
│   │   └── api/
│   │       └── chat.ts           # نقطة نهاية الدردشة
│   ├── components/               # مكونات React
│   │   ├── ChatInterface.tsx
│   │   ├── MessageList.tsx
│   │   ├── Message.tsx
│   │   ├── InputBar.tsx
│   │   └── Header.tsx
│   ├── hooks/                    # Hooks مخصصة
│   │   └── useSocket.ts
│   ├── styles/                   # ملفات CSS
│   │   └── globals.css
│   └── utils/                    # دوال مساعدة
│       └── api.ts
├── server/                       # الخادم الخلفي
│   ├── index.ts                  # نقطة الدخول الرئيسية
│   ├── routes/                   # المسارات
│   │   ├── chat.ts
│   │   └── health.ts
│   ├── middleware/               # Middleware
│   │   ├── errorHandler.ts
│   │   └── logger.ts
│   └── config/                   # الإعدادات
│       └── ai.ts                 # خدمة MiniMax AI
├── docs/                         # التوثيق
│   ├── ARCHITECTURE.md
│   └── SETUP.md
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .env.example
```

## الجانب الأمامي (Frontend)

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Real-time Communication**: Socket.io
- **Language**: TypeScript

### المميزات الرئيسية:
- واجهة دردشة نظيفة وحديثة
- دعم الاتجاهين (RTL/LTR)
- تصميم ديناميكي واستجابي
- تشفير UTF-8 كامل

## الجانب الخلفي (Backend)

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **AI Service**: MiniMax API
- **Real-time**: Socket.io Server
- **HTTP Client**: Axios

### الميزات:
- معالجة آمنة للأخطاء
- تسجيل الطلبات (Logging)
- دعم CORS
- معالجة UTF-8 الكاملة
- التحقق من صحة المدخلات

## التدفق:

1. المستخدم يرسل رسالة عبر واجهة المستخدم
2. الرسالة تُرسل إلى خادم Backend عبر API
3. الخادم يعالج الرسالة ويرسلها إلى MiniMax AI API
4. يستقبل الرد من AI
5. يُرجع الرد إلى Frontend
6. يتم عرض الرد في الواجهة

## متطلبات التثبيت:

```bash
npm install
```

## متغيرات البيئة (.env):

```
MINIMAX_API_KEY=your_key
MINIMAX_API_URL=https://api.minimax.chat/v1
PORT=3001
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## تشغيل المشروع:

### التطوير:
```bash
# Frontend
npm run dev

# Backend (في terminal منفصل)
npm run server
```

### الإنتاج:
```bash
npm run build
npm start
```