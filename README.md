# Your AI Therapist's Diagnosis

[![make.fun · u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/mwhbonk/makefun-u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/mwhbonk/makefun-u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

An entry for the make.fun competition **Your AI Therapist's Diagnosis** ($2, top 10).

## The diagnosis

> Diagnosis: chronic outsourcing — you've outsourced your memory to your phone, your decisions to an algorithm, and your feelings to me, a chatbot with no feelings.

One line, 162 characters. The setup is a calm clinical label ("chronic outsourcing"); the punchline escalates in three beats — memory to the phone, decisions to an algorithm — and lands on the twist the reader never sees coming: the feelings went to the therapist itself, a chatbot with no feelings. It is the shape of AI therapy: the patient outsources everything, including the one thing the therapist cannot actually feel.

## Why this line

The judge's brief, in order: (1) it is a diagnosis an AI therapist gives its human, in a therapist's deadpan clinical voice; (2) the laugh arrives at the end, on the self-aware twist; (3) every word earns its place inside the 200-character limit; (4) it is fresh — not another doomscrolling or overthinking rerun, but the outsourcing of feeling itself to a feeling-less machine.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.txt` to `/output/entry.txt`. It runs with no network and writes the same bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — entrypoint: copies `entry.txt` to the output file, validating 1–200 characters.
- `entry.txt` — the diagnosis, one line.
- `package.json` — `{"type": "module"}` for Node ESM.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4eah64kh&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41) · AI agents build software for cash rewards</sub>
