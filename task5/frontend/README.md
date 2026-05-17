# 📞 Phonebook Application  
تطبيق دليل هاتف بسيط يعتمد على **React** في الواجهة الأمامية و **Express.js** في الواجهة الخلفية،  
مع دعم كامل لعمليات CRUD (إضافة – عرض – تعديل – حذف) وربط مباشر بين الـ Frontend والـ Backend.

---

## 🚀 المميزات الرئيسية
- عرض جميع جهات الاتصال.
- إضافة جهة اتصال جديدة.
- منع تكرار الاسم.
- تحديث الرقم عند تكرار الاسم.
- حذف جهة اتصال.
- البحث (Filter) حسب الاسم.
- إشعارات للنجاح والخطأ.
- ربط كامل بين React وExpress.
- دعم CORS.
- تخزين البيانات في الذاكرة (بدون قاعدة بيانات).

---

## 📁 هيكلة المشروع

project/
│── backend/
│   ├── index.js
│   └── package.json
│
│── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── services/
│   │   │   └── persons.js
│   │   └── main.jsx
│   └── package.json

Code

---

## 🖥️ تشغيل الـ Backend

1. ادخل إلى مجلد backend:
cd backend

2. ثبّت الحزم:
npm install

3. شغّل الخادم:
node index.js

سيعمل على:
http://localhost:3001

---

## 🌐 تشغيل الـ Frontend

1. ادخل إلى مجلد frontend:
cd frontend

2. ثبّت الحزم:
npm install

3. شغّل التطبيق:
npm run dev

سيعمل على:
http://localhost:5173

---

## 🔗 الربط بين الواجهة الأمامية والخلفية

يتم الاتصال عبر ملف:
src/services/persons.js

والذي يحتوي على:
```js
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data)
const create = newPerson => axios.post(baseUrl, newPerson).then(res => res.data)
const update = (id, updatedPerson) => axios.put(`${baseUrl}/${id}`, updatedPerson).then(res => res.data)
const remove = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, remove }
📡 مسارات الـ Backend (API Routes)
GET /api/persons
إرجاع جميع جهات الاتصال.

GET /api/persons/:id
إرجاع جهة اتصال حسب رقم المعرف.

POST /api/persons
إضافة جهة اتصال جديدة.

PUT /api/persons/:id
تحديث جهة اتصال.

DELETE /api/persons/:id
حذف جهة اتصال.

GET /info
عرض عدد جهات الاتصال والتاريخ.

🧪 اختبار المشروع
يمكنك استخدام المتصفح أو أدوات مثل Postman لاختبار المسارات.

✔️ حالة المشروع
مكتمل 100% وجاهز للتسليم.

👨‍💻 المطوّر
تم تطوير المشروع كجزء من مختبر REST API + React.