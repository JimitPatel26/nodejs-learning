## Question 4 — Async Read & Display

Read `notes.txt` **asynchronously** and print its content.
If the file doesn't exist, print `"File not found!"`.

**Expected Output (file exists):**
```
Your notes content here...
```

**Expected Output (file missing):**
```
File not found!
```

**Hints:**
- Use `fs.readFile()`
- Check the `err` parameter in the callback
- Don't forget `"utf-8"` encoding