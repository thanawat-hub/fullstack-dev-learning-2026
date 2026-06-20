# 🚀 วิธีรัน Next.js Project (Local)

## สิ่งที่ต้องมี (Prerequisites)

| เครื่องมือ | เวอร์ชันขั้นต่ำ | ตรวจสอบ |
|-----------|---------------|---------|
| Node.js | v18+ | `node -v` |
| npm | v9+ | `npm -v` |

> ถ้ายังไม่มี Node.js → ดาวน์โหลดได้ที่ https://nodejs.org (แนะนำ LTS)

---

## 🔀 nvm (Node Version Manager)

### nvm คืออะไร?

เครื่องมือสำหรับ **สลับเวอร์ชัน Node.js** ในเครื่องเดียวกันได้อย่างง่ายดาย โดยไม่ต้อง uninstall/reinstall

### จำเป็นต้องใช้ไหม?

**ไม่จำเป็น** สำหรับการเริ่มต้น — แต่ **แนะนำอย่างยิ่ง** ถ้าเริ่มทำหลาย project

| สถานการณ์ | ต้องใช้ nvm ไหม |
|-----------|----------------|
| มี project เดียว, Node เวอร์ชันตรง | ❌ ไม่ต้อง |
| มีหลาย project ใช้ Node คนละเวอร์ชัน | ✅ ควรใช้ |
| ทำงานในทีมที่ lock Node version ไว้ | ✅ ควรใช้ |
| อยากทดลอง Node เวอร์ชันใหม่โดยไม่เสี่ยง | ✅ ควรใช้ |

### ข้อดีของ nvm

1. **สลับเวอร์ชันได้ทันที** — ไม่ต้อง uninstall แล้วลงใหม่
2. **แยก Node version ต่อ project** — project A ใช้ Node 18, project B ใช้ Node 20 ได้พร้อมกัน
3. **ป้องกัน version conflict** — ไม่ต้องกังวลว่า update Node แล้ว project เก่าจะพัง
4. **ใช้ `.nvmrc` ล็อคเวอร์ชัน** — ทีมทุกคนใช้ Node version เดียวกัน
5. **ลองของใหม่ได้ปลอดภัย** — อยากลอง Node 22 ก็ลงเพิ่มได้ ไม่กระทบตัวเดิม

### วิธีติดตั้ง nvm (macOS/Linux)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

ปิดแล้วเปิด terminal ใหม่ จากนั้นตรวจสอบ:

```bash
nvm --version
```

### วิธีใช้งาน nvm

```bash
# ดูเวอร์ชันที่มีให้ลง
nvm ls-remote

# ติดตั้ง Node เวอร์ชันที่ต้องการ
nvm install 20

# สลับไปใช้เวอร์ชันที่ลงไว้
nvm use 20

# ตั้งเป็น default
nvm alias default 20

# ดูเวอร์ชันที่ลงไว้ในเครื่อง
nvm ls
```

### ใช้ .nvmrc ล็อคเวอร์ชันให้ project

สร้างไฟล์ `.nvmrc` ไว้ใน root ของ project:

```bash
echo "20" > .nvmrc
```

ครั้งต่อไปเข้า project แล้วรัน:

```bash
nvm use
```

nvm จะอ่านจาก `.nvmrc` แล้วสลับให้อัตโนมัติ

### สำหรับ project นี้

Next.js 16 ต้องการ **Node.js 18+** ดังนั้น:

```bash
nvm install 20    # ลง Node 20 (LTS)
nvm use 20        # สลับมาใช้
node -v           # ตรวจสอบ → v20.x.x
```

---

## โครงสร้างโปรเจกต์

```
my-app/
├── app/              ← โฟลเดอร์หลักของ App Router
│   ├── layout.tsx    ← Layout หลัก (ครอบทุกหน้า)
│   ├── page.tsx      ← หน้าแรก (route: /)
│   ├── globals.css   ← CSS ทั้งโปรเจกต์
│   └── favicon.ico
├── public/           ← ไฟล์ static (รูป, SVG)
├── next.config.ts    ← ตั้งค่า Next.js
├── tsconfig.json     ← ตั้งค่า TypeScript
├── postcss.config.mjs ← ตั้งค่า PostCSS (Tailwind)
├── package.json      ← รายการ dependencies + scripts
└── .env.local        ← ไฟล์ environment variables (สร้างเอง)
```

---

## ขั้นตอนรัน

### 1. เข้าโฟลเดอร์โปรเจกต์

```bash
cd learn-js-2026/next/my-app
```

### 2. ติดตั้ง dependencies

```bash
npm install
```

> คำสั่งนี้จะอ่าน `package.json` แล้วดาวน์โหลด library ทั้งหมดมาใส่โฟลเดอร์ `node_modules/`

### 3. สร้างไฟล์ Environment Variables (ถ้าต้องการ)

```bash
touch .env.local
```

ตัวอย่างเนื้อหาใน `.env.local`:

```env
# ใส่ค่า config ที่ใช้เฉพาะเครื่อง local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

> **หมายเหตุ:**
> - ตัวแปรที่ขึ้นต้นด้วย `NEXT_PUBLIC_` → ใช้ได้ทั้งฝั่ง client + server
> - ตัวแปรที่ไม่มี prefix → ใช้ได้เฉพาะฝั่ง server เท่านั้น
> - ไฟล์ `.env.local` จะ **ไม่ถูก commit** ขึ้น git (อยู่ใน .gitignore แล้ว)

### 4. รันโหมด Development

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ → **http://localhost:3000**

> โหมด dev จะ auto-reload เมื่อแก้ไขไฟล์ ไม่ต้อง restart server

---

## คำสั่งอื่นที่มีให้ใช้

| คำสั่ง | ใช้ทำอะไร |
|--------|----------|
| `npm run dev` | รัน development server (port 3000) |
| `npm run build` | build โปรเจกต์สำหรับ production |
| `npm run start` | รัน production server (ต้อง build ก่อน) |
| `npm run lint` | ตรวจสอบ code style ด้วย ESLint |

---

## Tech Stack

| เทคโนโลยี | เวอร์ชัน | หน้าที่ |
|-----------|---------|--------|
| Next.js | 16.2.9 | React framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS |
| ESLint | ^9 | Linting |

---

## FAQ

**Q: `npm install` แล้วเจอ error เกี่ยวกับ node version?**
A: ตรวจสอบว่าใช้ Node.js v18 ขึ้นไป → `node -v`

**Q: Port 3000 ถูกใช้อยู่แล้ว?**
A: รันด้วย port อื่นได้ → `npm run dev -- -p 3001`

**Q: อยากรัน production mode?**
A: ทำ 2 ขั้นตอน:
```bash
npm run build
npm run start
```

---

## สรุปสั้น (Quick Start)

```bash
cd learn-js-2026/next/my-app
npm install
npm run dev
# เปิด http://localhost:3000
```
