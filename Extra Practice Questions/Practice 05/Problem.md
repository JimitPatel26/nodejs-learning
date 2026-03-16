## Question 3 — File Copy

Read `source.txt` synchronously and write its content into a new
file `copy.txt`. Print `"File copied!"` when done.

**Expected Output:**
```
File copied!
```

**Hints:**
- Use `fs.readFileSync()` to read
- Use `fs.writeFileSync()` to write
- No need for callbacks — it's all sync