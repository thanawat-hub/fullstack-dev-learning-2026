---
inclusion: always
---

# Commit Message Convention \

> **Version:** 1.1  
> **Last Updated:** 2026-06-13  
> **Applies to:** learn-js-2026 React/Vite/Tailwind learning project 

---

## 1. Purpose

เอกสารนี้กำหนดข้อตกลงการเขียน Commit Message สำหรับ การเรียนรู้ FullStack เพื่อให้:

- เข้าใจ History ได้รวดเร็ว
- แยกแยะสาเหตุการเปลี่ยนแปลง (bug fix vs. feature vs. refactor)
- ใช้ข้อมูลจาก Commit History ในการ track progress ได้

---

## 2. Commit Message Format

```
Tag(filename): สิ่งที่เปลี่ยนในไฟล์นั้น
```

### กฎทั่วไป

- ขึ้นต้นด้วย **Tag ตัวใหญ่** ตามด้วย **(ชื่อไฟล์)** ไม่ต้องใส่นามสกุล
- หลัง `:` เว้น 1 space แล้วอธิบายสิ่งที่เปลี่ยน
- เขียนเป็น **บรรทัดเดียว**
- เขียนภาษาไทยหรืออังกฤษก็ได้ แต่ **technical terms ใช้ภาษาอังกฤษ**
- ถ้าเกี่ยวข้องหลายไฟล์ ใช้ชื่อหลักที่เปลี่ยนมากที่สุด หรือใช้ชื่อ module/folder

---

## 3. Tags Reference

| Tag | ใช้เมื่อ | ตัวอย่างสถานการณ์ |
|-----|---------|-----------------|
| `Created` | สร้างไฟล์ใหม่ (component, page, helper, config, test) | สร้าง `Users` component หรือ `Card` component |
| `Added` | เพิ่ม logic, function, component, UI element ในไฟล์เดิม | เพิ่ม `clickHandler` หรือเพิ่ม Tailwind class ใน component |
| `Edited` | Refactor / improve code quality โดย behavior ไม่เปลี่ยน | ปรับโครงสร้าง JSX, extract helper function, rename variable |
| `Fixed` | แก้ bug ใน code | แก้ event handler, แก้ props passing ผิด, แก้ syntax error |
| `Updated` | ปรับ code ตาม requirement / design change | เปลี่ยน UI layout ให้ใช้ responsive grid หรือ update data rendering logic |
| `Deleted` | ลบไฟล์ออก พร้อมระบุเหตุผล | ลบ `card.jsx` legacy เพราะใช้ `Card.jsx` ใหม่แทน |
| `Config` | แก้ config, env, dependencies, infra | เพิ่ม Tailwind plugin ใน `vite.config.js` หรือแก้ `package.json` |
| `Test` | เพิ่ม/แก้ test files | เพิ่ม unit test หรือ integration test ให้ React component |
| `Docs` | เพิ่ม/แก้เอกสาร (README, specs, learning notes) | อัปเดต README หรือ note project setup |
| `Migration` | เปลี่ยนแปลง database schema | (ไม่ค่อยใช้ใน project นี้ ถ้าเป็น backend database layer) |

### การแยกความแตกต่างระหว่าง `Edited`, `Fixed`, และ `Updated`

- **`Edited`** — Refactor / code quality improvement โดย behavior ไม่เปลี่ยน
- **`Fixed`** — แก้ bug ที่ทำให้ระบบทำงานผิด
- **`Updated`** — ปรับ code ตาม requirement/design ที่เปลี่ยน

---

## 4. Examples

### `Created` — สร้างไฟล์ใหม่

```
Created(Users): add Users component rendering mock user cards with button actions
```

### `Added` — เพิ่ม logic / UI / component ไปในไฟล์เดิม

```
Added(Users): add event handlers and button interaction logic for user cards
```

```
Added(Card): add children support and props mapping for reusable card layout
```

### `Edited` — Refactor โดย behavior ไม่เปลี่ยน

```
Edited(App): refactor App to use Users and Counter components with cleaner structure
```

### `Fixed` — แก้ bug

```
Fixed(Users): fix mouse event handlers and correct props names for button interactions
```

### `Updated` — ปรับตาม requirement / design change

```
Updated(index): add Tailwind import to CSS entrypoint for Vite and load base styles
```

### `Deleted` — ลบไฟล์

```
Deleted(card): remove legacy lowercase Card component replaced by Card.jsx
```

### `Config` — แก้ config/dependencies

```
Config(vite.config): add Tailwind plugin and React plugin configuration for Vite
```

### `Test` — เพิ่ม/แก้ test

```
Test(Users): add tests for user card rendering and button interaction behavior
```

### `Docs` — เอกสาร

```
Docs(README): add Vite setup and Tailwind usage instructions for learn-js-2026 project
```

### `Migration` — DB schema change

```
Migration(database): update schema changes for backend data model if project includes database work
```

---

## 5. Commit Guidelines

- **หนึ่ง commit = หนึ่ง tag** — ถ้าต้องใช้หลาย tag ให้แยก commits
- **Commit บ่อย** — ทำเสร็จแต่ละ task ก็ commit ได้เลย
- **อ้างอิง Requirement** (optional) — ใส่ `(Req X)` ท้าย message ถ้าต้องการ trace กลับ

```
Added(database): get_user_subjects() function — filter เฉพาะ active subjects + 3-month window (Req 4, 5)
```

---

## 6. Quick Reference Card

```
Created(filename):   สร้างไฟล์ใหม่สำหรับ...
Added(filename):     เพิ่ม function/route/component ...
Edited(filename):    Refactor/improve ... (behavior ไม่เปลี่ยน)
Fixed(filename):     แก้ bug ... (อธิบายว่าผิดอะไร)
Updated(filename):   ปรับตาม requirement/design change...
Deleted(filename):   ลบเนื่องจาก...
Config(filename):    แก้ config/env/deps ...
Test(filename):      เพิ่ม/แก้ test ...
Docs(filename):      เพิ่ม/แก้เอกสาร ...
Migration(filename): เปลี่ยน DB schema ...
```

**ทุก commit ต้องระบุ:** ชื่อไฟล์ (ไม่มีนามสกุล) + รายละเอียดว่าทำอะไร

---

## 7. Auto-Commit Summary Rule (สำหรับ Kiro)

**กฎ MANDATORY**: เมื่อ Kiro ทำงานเรื่องหนึ่งเสร็จสิ้น (เช่น จบ wave, จบ task group, หรือ user บอก "done") Kiro ต้อง:

1. **สรุป commits ที่ควรทำ** — แสดง list ของ commit messages ที่แนะนำ ตาม convention นี้
2. **จัดกลุ่มตาม tag** — แยก commits ตามไฟล์/เรื่อง (ไม่รวมทุกอย่างเป็น commit เดียว)
3. **แสดงให้ user copy ได้เลย** — format เป็น code block ที่ user รันได้ทันที

### ตัวอย่าง output หลังทำเสร็จ:

```
📝 แนะนำ commits สำหรับงานที่เสร็จ:

git add src/App.jsx
git commit -m "Updated(App): update App layout to use learning components Users and Counter"

git add src/components/Users.jsx
git commit -m "Created(Users): add Users component rendering mock user cards with button interactions"

git add src/components/Card.jsx
git commit -m "Created(Card): add reusable Card component with props and children support"

git add src/index.css
git commit -m "Updated(index): add Tailwind import to CSS entrypoint for Vite"
```

### กฎเพิ่มเติม:
- ถ้างานเกี่ยวข้องกับหลายไฟล์ที่ต่าง tag → แยก commits
- ถ้างานเกี่ยวข้องกับไฟล์เดียวแต่หลาย tag → ใช้ tag ที่ "ใหญ่ที่สุด" (เช่น `Migration` > `Added`)
- สรุปทุกครั้งที่จบ wave หรือจบ task group โดยไม่ต้องให้ user ถาม
