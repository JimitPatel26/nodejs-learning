# 03 - OS & Path Module

Exploring Node.js built-in `os` and `path` modules to access system-level information and handle file paths across platforms.

---

## 📁 Files

| File | Description |
|------|-------------|
| `path-demo.js` | Demonstrates the `path` module methods |
| `os-info.js` | Reads OS and hardware details using the `os` module |

---

## 🔍 Concepts Covered

### `path` Module (`path-demo.js`)

| Method | What It Does |
|--------|--------------|
| `path.sep` | Returns the platform-specific path separator (`/` on Unix, `\` on Windows) |
| `path.join()` | Joins path segments using the OS separator |
| `path.basename()` | Extracts the filename from a full path |
| `path.resolve()` | Builds an absolute path from `__dirname` + segments |
| `path.extname()` | Returns the file extension (e.g., `.html`) |

### `os` Module (`os-info.js`)

| Method | What It Does |
|--------|--------------|
| `os.userInfo()` | Returns current user info (username, home dir, shell, etc.) |
| `os.uptime()` | System uptime in seconds since last boot |
| `os.type()` | OS name — `Windows_NT`, `Linux`, `Darwin` |
| `os.release()` | OS version/release string |
| `os.totalmem()` | Total RAM in bytes |
| `os.freemem()` | Available (free) RAM in bytes |

---

## ▶️ Usage
```bash
node path-demo.js
node os-info.js
```

## 💡 Notes

- `path.join()` is **relative** — joins segments cleanly.
- `path.resolve()` is **absolute** — anchors from `__dirname`.
- Memory values are in **bytes**. Convert to GB:
```js
  console.log((os.totalmem() / (1024 ** 3)).toFixed(2) + " GB");
```
- `os.uptime()` returns seconds — divide by `3600` for hours.