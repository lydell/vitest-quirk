# vitest code coverage quirk

1. Clone this repo

2. `npm cit`

   ```
   added 92 packages, and audited 93 packages in 597ms

   18 packages are looking for funding
     run `npm fund` for details

   found 0 vulnerabilities

   > test
   > vitest


    DEV  v0.34.6 /Users/simon/stuff/vitest-quirk
         Coverage enabled with v8

    ✓ test1.test.ts (1)
    ✓ test2.test.ts (1)

    Test Files  2 passed (2)
         Tests  2 passed (2)
      Start at  22:43:18
      Duration  133ms (transform 24ms, setup 0ms, collect 20ms, tests 4ms, environment 0ms, prepare 88ms)

    % Coverage report from v8
   ----------|---------|----------|---------|---------|-------------------
   File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
   ----------|---------|----------|---------|---------|-------------------
   All files |     100 |      100 |     100 |     100 |
    index.ts |     100 |      100 |     100 |     100 |
   ----------|---------|----------|---------|---------|-------------------

    PASS  Waiting for file changes...
          press h to show help, press q to quit
   ```

   ✅ 100 % code coverage.

3. In another terminal, run `touch test1.test.ts`

   ```
    RERUN  test1.test.ts x1

    ✓ test1.test.ts (1)
      ✓ myFunction1

    Test Files  1 passed (1)
         Tests  1 passed (1)
      Start at  22:44:57
      Duration  9ms

    % Coverage report from v8
   ----------|---------|----------|---------|---------|-------------------
   File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
   ----------|---------|----------|---------|---------|-------------------
   All files |     100 |      100 |      50 |     100 |
    index.ts |     100 |      100 |      50 |     100 |
   ----------|---------|----------|---------|---------|-------------------
   ERROR: Coverage for functions (50%) does not meet global threshold (100%)

    PASS  Waiting for file changes...
          press h to show help, press q to quit
   ```

   🤔 Suddenly I only have 50 % coverage?

4. Workaround: Press `Enter` in the vitest terminal.

   ```
    RERUN

    ✓ test2.test.ts (1)
    ✓ test1.test.ts (1)

    Test Files  2 passed (2)
         Tests  2 passed (2)
      Start at  22:45:58
      Duration  14ms

    % Coverage report from v8
   ----------|---------|----------|---------|---------|-------------------
   File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
   ----------|---------|----------|---------|---------|-------------------
   All files |     100 |      100 |     100 |     100 |
    index.ts |     100 |      100 |     100 |     100 |
   ----------|---------|----------|---------|---------|-------------------

    PASS  Waiting for file changes...
          press h to show help, press q to quit
   ```

   ✅ Now it reports 100 % coverage again.

This makes vitest feel broken to me: I can’t really trust what I see after I save a file – I need to manually trigger a run for it to “work”.
