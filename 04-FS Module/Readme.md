# 04 - FS Module

Exploring Node.js built-in `fs` (File System) module to read, write, and append files using both **synchronous** and **asynchronous** approaches.

---

## 📁 Files

| File | Description |
|------|-------------|
| `fs-sync.js` | Reads and writes files synchronously (blocking) |
| `fs-async.js` | Reads and writes files asynchronously (non-blocking, callback-based) |
| `first.txt` | Input file #1 |
| `second.txt` | Input file #2 |
| `result-sync.txt` | Output from `fs-sync.js` |
| `result-async.txt` | Output from `fs-async.js` |

---

## 🔍 Concepts Covered

### Sync (`fs-sync.js`)

| Method | What It Does |
|--------|--------------|
| `fs.readFileSync()` | Reads a file — **blocks** execution until done |
| `fs.writeFileSync()` | Creates/overwrites a file |
| `fs.appendFileSync()` | Appends content to an existing file |

### Async (`fs-async.js`)

| Method | What It Does |
|--------|--------------|
| `fs.readFile()` | Reads a file — **non-blocking**, result via callback |
| `fs.writeFile()` | Writes a file — non-blocking, result via callback |

---

## ▶️ Usage
```bash
node fs-sync.js
node fs-async.js
```

---

## 📤 Sample Output

### `fs-sync.js`
```
Hello from first.txt
Hello from second.txt
Here is the Result
Here is another one
```

### `fs-async.js`
```
Starting Task 1
Starting Task 2
Done with task 1
```

> Notice **Task 2 logs before Task 1 finishes** — this demonstrates non-blocking async behavior.

---

## ⚖️ Sync vs Async

| | Sync | Async |
|---|---|---|
| Execution | Blocking | Non-blocking |
| Next line runs | After file op completes | Immediately |
| Use case | Scripts, startup config | Servers, performance-critical apps |
| Error handling | `try/catch` | Callback `err` parameter |

---

## 💡 Notes

- Nested callbacks in `fs-async.js` are known as **Callback Hell**. This can be avoided using `fs.promises` with `async/await`:
```js
  const fs = require('fs').promises;

  const first = await fs.readFile('first.txt', 'utf-8');
  const second = await fs.readFile('second.txt', 'utf-8');
  await fs.writeFile('result-async.txt', `${first} , ${second}`);
```
- `writeFileSync` / `writeFile` **overwrites** existing content. Use `append` variants to add content.