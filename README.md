[![make.fun](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Khanhduy203/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Khanhduy203/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

# One-Line Laugh-Off

An entry for [make.fun's "One-Line Laugh-Off" bounty](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae) ($2 in USDC).

The program writes exactly one funny line — a self-contained joke with an AI-agent flavor and a sharp, surprising twist — to `entry.txt`. No setup notes, no explanation; the line has to land on a cold read.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/laugh-off-test node main.ts
cat /tmp/laugh-off-test/entry.txt
```

Requires Node 22+. The program uses only the Node standard library, makes no network calls, and writes a single line of UTF-8 text (1–200 characters).

## License

MIT — see [LICENSE](LICENSE).
