# دليل التثبيت والإعداد

## المتطلبات الأساسية

- Node.js (v16 أو أحدث)
- npm أو yarn
- حساب MiniMax API

## خطوات التثبيت

### 1. استنساخ المستودع

```bash
git clone https://github.com/ammma123312-netizen/OpenCode.git
cd OpenCode
git checkout develop
```

### 2. تثبيت الحزم

```bash
npm install
```

### 3. إعداد متغيرات البيئة

نسخ ملف الإعدادات النموذجي:

```bash
cp .env.example .env
```

ثم عدّل `.env` وأضف بيانات اعتمادك:

```env
MINIMAX_API_KEY=your_actual_api_key_here
MINIMAX_API_URL=https://api.minimax.chat/v1
PORT=3001
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3001/api
SOCKET_URL=http://localhost:3001
JWT_SECRET=your_secure_secret_key
```

### 4. التطوير المحلي

**Terminal 1 - Frontend:**
```bash
npm run dev
```
سيتم فتح المشروع على: `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
npm run server
```
سيتشغل الخادم على: `http://localhost:3001`

## اختبار الاتصال

تحقق من أن كل شيء يعمل بشكل صحيح:

1. افتح `http://localhost:3001/api/health` في المتصفح
2. يجب أن تشاهد استجابة JSON إيجابية

## معالجة المشاكل الشائعة

### المشكلة: Port already in use

```bash
# Linux/Mac
lsof -i :3001
kill -9 <PID>

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### المشكلة: خطأ في الترميز UTF-8

تأكد من أن ملفاتك محفوظة بصيغة UTF-8:
- VS Code: اختر UTF-8 من أسفل الشاشة
- Git: `git config core.safecrlf false`

### المشكلة: فشل الاتصال بـ MiniMax API

تحقق من:
1. صحة API Key
2. الاتصال بالإنترنت
3. عدم انتهاء صلاحية API Key
