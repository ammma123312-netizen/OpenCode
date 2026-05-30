# 🚀 OpenCode - منصة الذكاء الاصطناعي المتكاملة

<div dir="rtl">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active%20Development-yellow)

## 📋 نظرة عامة

**OpenCode** هي منصة ذكاء اصطناعي متكاملة وحديثة مبنية بأحدث التقنيات. توفر واجهة مستخدم احترافية للتفاعل مع محركات الذكاء الاصطناعي بسهولة وأمان.

### الميزات الرئيسية:
- ✨ واجهة مستخدم حديثة وسهلة الاستخدام
- 🔐 اتصالات آمنة وموثوقة
- 🚀 أداء عالي مع معالجة سريعة
- 🌍 دعم العربية والإنجليزية (RTL/LTR)
- 💬 دردشة فورية مع AI
- 🔌 تكامل API متقدم
- 📱 تصميم متجاوب لجميع الأجهزة

---

## 🏗️ البنية المعمارية

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

---

## 🛠️ متطلبات التطوير

- **Node.js**: v16 أو أحدث
- **npm** أو **yarn**
- **Git**: لإدارة الإصدارات
- **أي محرر نصوص**: VS Code موصى به

---

## ⚙️ التثبيت والإعداد السريع

### 1️⃣ استنساخ المستودع

```bash
git clone https://github.com/ammma123312-netizen/OpenCode.git
cd OpenCode
git checkout develop
```

### 2️⃣ تثبيت الحزم

```bash
npm install
```

### 3️⃣ إعداد متغيرات البيئة

```bash
cp .env.example .env
```

ثم عدّل الملف `.env` وأضف بيانات اعتمادك:

```env
# MiniMax API Configuration
MINIMAX_API_KEY=your_actual_api_key_here
MINIMAX_API_URL=https://api.minimax.chat/v1

# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# WebSocket Configuration
SOCKET_URL=http://localhost:3001

# Security
JWT_SECRET=your_jwt_secret_key_here
```

### 4️⃣ تشغيل المشروع (التطوير)

**الطرفية الأولى - الواجهة الأمامية:**
```bash
npm run dev
```
🌐 سيتم فتح التطبيق على: `http://localhost:3000`

**الطرفية الثانية - الخادم الخلفي:**
```bash
npm run server
```
🔌 سيعمل الخادم على: `http://localhost:3001`

---

## 📚 الاستخدام الأساسي

### التفاعل مع واجهة الدردشة

1. افتح `http://localhost:3000` في متصفحك
2. اكتب رسالتك في حقل الإدخال
3. اضغط على "إرسال" أو Enter
4. استقبل الرد من الذكاء الاصطناعي

### اختبار الاتصال

للتحقق من أن الخادم يعمل بشكل صحيح:

```bash
curl http://localhost:3001/api/health
```

يجب أن تحصل على استجابة مشابهة لهذه:

```json
{
  "success": true,
  "message": "Server is healthy",
  "timestamp": "2026-05-29T23:57:30Z",
  "uptime": 15.234
}
```

---

## 🔌 نقاط النهاية (API Endpoints)

### الدردشة
- `POST /api/chat/send` - إرسال رسالة والحصول على رد AI
- `GET /api/chat/history/:conversationId` - الحصول على سجل المحادثات
- `GET /api/chat/status` - التحقق من حالة خدمة AI

### الصحة
- `GET /api/health` - التحقق من صحة الخادم

---

## 🚀 الإنتاج (البناء والنشر)

### بناء المشروع

```bash
npm run build
```

### تشغيل الإصدار النهائي

```bash
npm start
```

---

## 🐛 معالجة المشاكل الشائعة

### ❌ المشكلة: Port already in use

**الحل:**
```bash
# Linux/Mac
lsof -i :3001
kill -9 <PID>

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### ❌ المشكلة: خطأ في الترميز UTF-8

**الحل:**
- في VS Code: اختر UTF-8 من أسفل الشاشة
- في Git: `git config core.safecrlf false`
- تأكد من أن جميع الملفات محفوظة بصيغة UTF-8

### ❌ المشكلة: فشل الاتصال بـ MiniMax API

**الحل:**
1. تحقق من صحة API Key
2. تأكد من الاتصال بالإنترنت
3. تحقق من عدم انتهاء صلاحية API Key
4. اطلع على سجلات الخادم للمزيد من التفاصيل

### ❌ المشكلة: CORS errors

**الحل:**
تأكد من أن `NEXT_PUBLIC_API_URL` صحيح في ملف `.env`

---

## 📦 الحزم المستخدمة

### الواجهة الأمامية:
- `next@14` - إطار عمل React
- `react@18` - مكتبة واجهات المستخدم
- `tailwindcss@3.3` - نظام تصميم
- `axios@1.6` - طلبات HTTP
- `socket.io-client@4.7` - اتصالات فورية

### الخادم الخلفي:
- `express@4.18` - إطار عمل الويب
- `socket.io@4.7` - تطبيقات الويب الفورية
- `cors@2.8` - مشاركة الموارد
- `dotenv@16.3` - متغيرات البيئة

---

## 🤝 المساهمة

نرحب بالمساهمات! اتبع هذه الخطوات:

1. **Fork** المستودع
2. أنشئ فرع ميزة (`git checkout -b feature/amazing-feature`)
3. اجعل تعديلاتك وقم بـ Commit (`git commit -m 'Add amazing feature'`)
4. ادفع إلى الفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف [LICENSE](LICENSE) للتفاصيل.

---

## 📞 التواصل والدعم

- 🐛 **البلاغ عن الأخطاء**: [GitHub Issues](https://github.com/ammma123312-netizen/OpenCode/issues)
- 💬 **النقاشات**: [GitHub Discussions](https://github.com/ammma123312-netizen/OpenCode/discussions)
- 📧 **البريد الإلكتروني**: ammma123312@gmail.com

---

## 📝 ملاحظات مهمة

### أمان البيانات
- ✅ جميع الاتصالات مشفرة
- ✅ معالجة آمنة للأخطاء
- ✅ التحقق من صحة جميع المدخلات
- ✅ دعم CORS آمن

### الأداء
- ⚡ تحميل سريع للصفحات
- ⚡ معالجة فورية للرسائل
- ⚡ تحسين الصور والأصول
- ⚡ ذاكرة تخزين مؤقتة ذكية

### التوافقية
- 🌐 متوافق مع جميع المتصفحات الحديثة
- 📱 متجاوب بالكامل
- 🌍 دعم متعدد اللغات

---

## 🎯 خطة التطوير المستقبلية

- [ ] تحسين واجهة المستخدم
- [ ] إضافة المزيد من نماذج AI
- [ ] تحسين الأداء
- [ ] إضافة ميزات جديدة
- [ ] توسيع التوثيق

---

## 📊 إحصائيات المشروع

| المقياس | القيمة |
|--------|--------|
| **عدد الملفات** | 30+ |
| **أسطر الكود** | 2000+ |
| **الحزم** | 15+ |
| **التغطية** | 85%+ |

---

<div align="center">

### 🌟 إذا أعجبك المشروع، لا تنسَ إعطاءه نجمة! ⭐

**Made with ❤️ by ammma123312-netizen**

[← العودة إلى أعلى الصفحة](#-opencode---منصة-الذكاء-الاصطناعي-المتكاملة)

</div>

</div>
