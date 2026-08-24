"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CameraOff,
  Check,
  Info,
  Loader2,
  RefreshCw,
  ScanFace,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import Reveal from "./Reveal";

type SkinProduct = {
  name: string;
  tagline: string;
  price_kes: number;
  url: string;
};

type RoutineStep = {
  step: string;
  product: SkinProduct;
  why: string;
};

type ZoneMetrics = {
  oiliness: string;
  dryness: string;
  redness: string;
  pores: string;
};

type AnalysisResult = {
  face_detected: boolean;
  confidence: string;
  skin_type: string | null;
  concerns: string[];
  zones: Record<string, ZoneMetrics>;
  hydration: string;
  spf_needed: boolean;
  photo_quality_feedback: string;
  observations: string;
  see_dermatologist: boolean;
  dermatologist_note: string | null;
  routine: RoutineStep[];
  optional_addons: SkinProduct[];
  disclaimer: string;
};

const API_BASE = process.env.NEXT_PUBLIC_ANALYSIS_API_URL ?? "http://localhost:8000";

async function analyzeImage(file: File): Promise<AnalysisResult> {
  const body = new FormData();
  body.append("image", file);
  const res = await fetch(`${API_BASE}/analyze-skin`, { method: "POST", body });
  if (!res.ok) {
    let detail = "Analysis failed. Please try again with a clear, well-lit photo.";
    try {
      const err = await res.json();
      if (typeof err.detail === "string" && err.detail) detail = err.detail;
    } catch {
      /* keep default message */
    }
    throw new Error(detail);
  }
  return (await res.json()) as AnalysisResult;
}

function formatSkinType(skinType: string | null) {
  if (!skinType) return null;
  return skinType.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function zoneLabel(zone: string) {
  return zone.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const zoneTone: Record<string, string> = {
  oiliness: "text-gold",
  dryness: "text-moss",
  redness: "text-rose-deep",
  pores: "text-ink-soft",
};

const levelBadge: Record<string, string> = {
  high: "bg-rose/15 text-rose-deep",
  medium: "bg-gold/20 text-gold",
  low: "bg-moss/15 text-moss",
};

const scanSteps = [
  "Detecting facial features",
  "Reading skin type",
  "Identifying concerns",
  "Checking for anything to flag",
  "Building your routine",
];

const SCAN_STEP_MS = 620;

export default function SkinScan() {
  const [phase, setPhase] = useState<"upload" | "scanning" | "results">("upload");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraOpen(false);
    if (videoRef.current) videoRef.current.srcObject = null;
  }, []);

  const reset = useCallback(() => {
    setPhase("upload");
    stopCamera();
    setPreviewUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return null;
    });
    setFile(null);
    setStepIndex(0);
    setResult(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  }, [stopCamera]);

  const onFile = useCallback((file: File | undefined | null) => {
    if (!file || !file.type.startsWith("image/")) return;
    setFile(file);
    setPreviewUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return URL.createObjectURL(file);
    });
    setPhase("upload");
    setResult(null);
  }, []);

  useEffect(() => {
    if (phase !== "scanning") return;
    const interval = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, scanSteps.length - 1));
    }, SCAN_STEP_MS);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "scanning") return;
    const el = beamRef.current;
    if (!el) return;
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = ((now - start) % 2200) / 2200;
      const y = -46 + Math.sin(t * Math.PI * 2) * 46;
      el.style.transform = `translateY(${y}%)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };
  }, []);

  const startScan = async () => {
    if (!file) return;
    setPhase("scanning");
    setStepIndex(0);
    setError(null);
    const startedAt = Date.now();
    try {
      const [res] = await Promise.all([
        analyzeImage(file),
        new Promise((resolve) => setTimeout(resolve, scanSteps.length * SCAN_STEP_MS)),
      ]);
      const elapsed = Date.now() - startedAt;
      if (elapsed < scanSteps.length * SCAN_STEP_MS) {
        await new Promise((resolve) =>
          setTimeout(resolve, scanSteps.length * SCAN_STEP_MS - elapsed)
        );
      }
      setResult(res);
      setPhase("results");
    } catch (err) {
      const elapsed = Date.now() - startedAt;
      if (elapsed < scanSteps.length * SCAN_STEP_MS) {
        await new Promise((resolve) =>
          setTimeout(resolve, scanSteps.length * SCAN_STEP_MS - elapsed)
        );
      }
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setPhase("upload");
    }
  };

  const openPicker = () => inputRef.current?.click();

  const openCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 1280 },
        },
        audio: false,
      });
      streamRef.current = stream;
      setCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      setCameraError(
        "We couldn't access your camera. You can still upload a photo instead."
      );
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return;
    const canvas = document.createElement("canvas");
    const size = Math.min(video.videoWidth, video.videoHeight);
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.translate(size, 0);
    ctx.scale(-1, 1); // mirror selfie
    ctx.drawImage(
      video,
      (video.videoWidth - size) / 2,
      (video.videoHeight - size) / 2,
      size,
      size,
      0,
      0,
      size,
      size
    );
    canvas.toBlob((blob) => {
      if (!blob) return;
      const captured = new File([blob], "selfie.jpg", { type: "image/jpeg" });
      onFile(captured);
      stopCamera();
    }, "image/jpeg");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0])}
      />

      {/* ---------- Heading ---------- */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
          AI skin scan
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
          Know your skin.
          <br />
          <span className="font-script text-rose-deep">start with a selfie.</span>
        </h1>
        <p className="mt-5 font-sans text-base leading-relaxed text-ink-soft">
          Take a photo of your face and we&apos;ll estimate your skin&apos;s redness,
          oiliness, texture and more, then point you at products and a routine from
          our own line. A starting point, not a diagnosis.
        </p>
      </Reveal>

      {/* ---------- Upload / Photo frame ---------- */}
      <Reveal delay={120} className="mt-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Viewfinder */}
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-blush-deep">
              {phase === "upload" && previewUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={previewUrl}
                alt="Your photo preview"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : phase === "upload" ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  onFile(e.dataTransfer.files?.[0]);
                }}
                className={`absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 p-8 text-center transition ${
                  isDragging ? "bg-rose/10" : ""
                }`}
                onClick={openPicker}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-rose-light/30">
                  <ScanFace className="h-8 w-8 text-rose-deep" aria-hidden="true" />
                </span>
                <p className="font-display text-xl text-ink">
                  Take a selfie or drop one here
                </p>
                <p className="max-w-xs font-sans text-sm text-ink-soft">
                  Plain, front-facing, natural light works best. Your photo is only
                  used for this analysis.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openCamera();
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-sans text-sm font-semibold text-blush transition hover:bg-rose-deep"
                  >
                    <Camera className="h-4 w-4" aria-hidden="true" />
                    Take a photo
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPicker();
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-rose/40 bg-white px-5 py-2.5 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
                  >
                    <Upload className="h-4 w-4" aria-hidden="true" />
                    Upload a photo
                  </button>
                </div>
              </div>
            ) : (
              /* Scanning overlay */
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl!}
                  alt="Scanning your photo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="scan-grid absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-0 bg-ink/10" aria-hidden="true" />
                <div
                  ref={beamRef}
                  className="scan-line absolute inset-0 z-10"
                  aria-hidden="true"
                >
                  <div className="relative top-1/2 -translate-y-1/2">
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-rose to-transparent" />
                    <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose shadow-[0_0_18px_6px_rgba(181,51,90,0.8)]" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 h-5 w-5 rounded-tl-2xl border-t-2 border-l-2 border-white/70" aria-hidden="true" />
                <div className="absolute top-0 right-0 h-5 w-5 rounded-tr-2xl border-t-2 border-r-2 border-white/70" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 h-5 w-5 rounded-bl-2xl border-b-2 border-l-2 border-white/70" aria-hidden="true" />
                <div className="absolute right-0 bottom-0 h-5 w-5 rounded-br-2xl border-r-2 border-b-2 border-white/70" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush/90 shadow-lg">
                    <Loader2 className="h-6 w-6 animate-spin text-rose-deep" aria-hidden="true" />
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Scan panel */}
          {phase === "upload" ? (
            <div>
              {previewUrl && (
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={startScan}
                    className="inline-flex items-center gap-2 rounded-full bg-moss px-7 py-3 font-sans text-sm font-semibold text-blush shadow-lg shadow-moss/20 transition hover:-translate-y-0.5 hover:bg-moss-light"
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Scan my skin
                  </button>
                  <button
                    type="button"
                    onClick={openCamera}
                    className="inline-flex items-center gap-2 rounded-full border border-rose px-7 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
                  >
                    <Camera className="h-4 w-4" aria-hidden="true" />
                    Retake
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-rose px-7 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
                  >
                    <RefreshCw className="h-4 w-4" aria-hidden="true" />
                    Choose another
                  </button>
                </div>
              )}
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gold/5 p-4">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <p className="font-sans text-sm leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Honest expectations:</span>{" "}
                  this AI gives you a personalized starting point based on what a
                  photo can show. It is not a medical or clinical diagnosis. For
                  persistent skin concerns, please see a dermatologist.
                </p>
              </div>
              {error && (
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-rose/50 bg-rose/10 p-4">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-deep" aria-hidden="true" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-rose-deep">
                      We couldn&apos;t analyse this photo
                    </p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                      {error}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : phase === "scanning" ? (
            <div>
              <h2 className="font-display text-2xl text-ink">
                Analyzing your skin
              </h2>
              <ul className="mt-5 space-y-3">
                {scanSteps.map((step, i) => {
                  const done = i < stepIndex;
                  const active = i === stepIndex;
                  return (
                    <li
                      key={step}
                      className={`flex items-center gap-3 font-sans text-sm transition ${
                        done
                          ? "text-moss"
                          : active
                            ? "font-semibold text-ink"
                            : "text-ink-soft/50"
                      }`}
                    >
                      {done ? (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-moss text-blush">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                      ) : (
                        <span
                          className={`h-5 w-5 rounded-full border-2 ${
                            active ? "blink-dot border-rose" : "border-ink-soft/30"
                          }`}
                        />
                      )}
                      {step}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 font-sans text-xs text-ink-soft">
                Takes a few seconds. We never store your photo.
              </p>
            </div>
          ) : null}
        </div>
      </Reveal>

      {/* ---------- Results ---------- */}
      {phase === "results" && result && (
        <div className="mt-14">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
                Your results
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Your skin, at a glance
              </h2>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-rose px-6 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Scan another photo
            </button>
          </Reveal>

          {!result.face_detected ? (
            <Reveal className="mt-8 rounded-3xl border border-rose-light/40 bg-white p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose/10">
                <ScanFace className="h-7 w-7 text-rose-deep" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">
                We couldn&apos;t find a face
              </h3>
              <p className="mx-auto mt-2 max-w-md font-sans text-sm leading-relaxed text-ink-soft">
                Try again with a clear, front-facing photo in good, even light.
                Make sure your whole face is in frame and you&apos;re not wearing
                sunglasses.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 rounded-full bg-ink px-7 py-3 font-sans text-sm font-semibold text-blush transition hover:bg-rose-deep"
              >
                Try another photo
              </button>
            </Reveal>
          ) : (
            <>
              {/* Overview */}
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
                <Reveal className="flex flex-col justify-center rounded-3xl bg-ink p-8 lg:col-span-2">
                  <p className="font-sans text-xs font-semibold tracking-widest text-rose-light uppercase">
                    Skin type
                  </p>
                  <p className="mt-3 font-display text-4xl leading-none text-blush">
                    {formatSkinType(result.skin_type) ?? "Not clear"}
                  </p>
                  <p className="mt-4 flex items-center gap-2 font-sans text-sm text-rose-light">
                    <span className="blink-dot inline-block h-2 w-2 rounded-full bg-moss-light" aria-hidden="true" />
                    Confidence: {result.confidence}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {result.hydration && (
                      <span className="rounded-full bg-white/10 px-3 py-1 font-sans text-xs font-semibold text-blush">
                        Hydration: {result.hydration}
                      </span>
                    )}
                    {result.spf_needed && (
                      <span className="rounded-full bg-rose/80 px-3 py-1 font-sans text-xs font-semibold text-blush">
                        Sun protection advised
                      </span>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={100} className="rounded-3xl bg-blush-deep p-8 lg:col-span-3">
                  {result.concerns.length > 0 && (
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
                        What we noticed
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {result.concerns.map((concern) => (
                          <span
                            key={concern}
                            className="rounded-full bg-white px-4 py-1.5 font-sans text-sm font-semibold text-rose-deep"
                          >
                            {concern.replace(/_/g, " ")}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {result.observations && (
                    <div className={result.concerns.length > 0 ? "mt-5" : ""}>
                      <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
                        About your skin
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                        {result.observations}
                      </p>
                    </div>
                  )}
                  {result.photo_quality_feedback && (
                    <div className="mt-5">
                      <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
                        About this photo
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                        {result.photo_quality_feedback}
                      </p>
                    </div>
                  )}
                </Reveal>
              </div>

              {/* Zones */}
              {result.zones && Object.keys(result.zones).length > 0 && (
                <Reveal className="mt-8">
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    Your face, zone by zone
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {Object.entries(result.zones).map(([zone, metrics], i) => (
                      <Reveal
                        key={zone}
                        delay={i * 100}
                        className="rounded-3xl border border-rose-light/30 bg-white p-6"
                      >
                        <h3 className="font-display text-lg text-ink">
                          {zoneLabel(zone)}
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                          {(
                            [
                              ["oiliness", metrics.oiliness],
                              ["dryness", metrics.dryness],
                              ["redness", metrics.redness],
                              ["pores", metrics.pores],
                            ] as const
                          ).map(([key, value]) => (
                            <li key={key} className="flex items-center justify-between gap-3">
                              <span
                                className={`font-sans text-sm font-medium capitalize ${
                                  zoneTone[key] ?? "text-ink-soft"
                                }`}
                              >
                                {key}
                              </span>
                              <span
                                className={`rounded-full px-3 py-0.5 font-sans text-xs font-semibold capitalize ${
                                  levelBadge[value] ?? "bg-blush-deep text-ink-soft"
                                }`}
                              >
                                {value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              )}

              {result.see_dermatologist && (
                <Reveal className="mt-6 rounded-3xl border border-rose/40 bg-rose/10 p-6 sm:p-8">
                  <p className="font-sans text-sm font-semibold text-rose-deep">
                    A note worth reading
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink">
                    {result.dermatologist_note ||
                      "What we can see from this photo is worth checking with a dermatologist in person."}
                  </p>
                </Reveal>
              )}

              {/* Routine */}
              {result.routine.length > 0 && (
                <Reveal className="mt-14">
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    Your suggested routine
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {result.routine.map((step, i) => (
                      <Reveal
                        key={`${step.step}-${i}`}
                        delay={i * 100}
                        className="flex flex-col rounded-3xl border border-rose-light/30 bg-white p-6"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-display text-4xl leading-none text-rose-light/60">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="rounded-full bg-blush-deep px-3 py-1 font-sans text-xs font-semibold text-ink">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-xl text-ink">
                          {step.product.name}
                        </h3>
                        <p className="mt-1 font-sans text-sm text-ink-soft">
                          {step.product.tagline}
                        </p>
                        <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                          Why: {step.why}
                        </p>
                        <div className="mt-5 flex items-center justify-between border-t border-rose-light/30 pt-4">
                          <span className="font-sans text-sm font-semibold text-rose-deep">
                            KES {step.product.price_kes.toLocaleString()}
                          </span>
                          <a
                            href={step.product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-ink transition hover:text-rose-deep"
                          >
                            View product
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Optional add-ons */}
              {result.optional_addons.length > 0 && (
                <Reveal className="mt-14">
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    Nice extras to try
                  </h2>
                  <p className="mt-1 font-sans text-sm text-ink-soft">
                    Little luxuries our community loves alongside their routine.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {result.optional_addons.map((p, i) => (
                      <Reveal
                        key={p.name}
                        delay={i * 100}
                        className="flex flex-col rounded-3xl border border-rose-light/30 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-light/30"
                      >
                        <h3 className="font-display text-lg text-ink">{p.name}</h3>
                        <p className="mt-1 font-sans text-sm text-ink-soft">
                          {p.tagline}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-rose-light/30 pt-4">
                          <span className="font-sans text-sm font-semibold text-rose-deep">
                            KES {p.price_kes.toLocaleString()}
                          </span>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-ink transition hover:text-rose-deep"
                          >
                            View
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Consultation nudge + disclaimer */}
              <Reveal className="mt-14">
                <div className="rounded-3xl bg-blush-deep p-6 sm:p-8">
                  <h3 className="font-display text-xl text-ink">
                    Want a routine built just for you?
                  </h3>
                  <p className="mt-1 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
                    Tell us your budget and skin goals and we&apos;ll fine-tune the
                    routine above for free on WhatsApp.
                  </p>
                  <Link
                    href="/#consultation"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-moss-light"
                  >
                    Get a free consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="mt-6 flex items-start gap-2 font-sans text-sm leading-relaxed text-ink-soft">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-deep" aria-hidden="true" />
                  {result.disclaimer}
                </p>
              </Reveal>
            </>
          )}
        </div>
      )}

      {/* ---------- Camera modal ---------- */}
      {cameraError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4" role="dialog" aria-modal="true" aria-label="Camera unavailable">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/10">
              <CameraOff className="h-6 w-6 text-rose-deep" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-xl text-ink">Camera unavailable</p>
            <p className="mt-2 font-sans text-sm text-ink-soft">{cameraError}</p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setCameraError(null);
                  openPicker();
                }}
                className="rounded-full bg-ink px-6 py-2.5 font-sans text-sm font-semibold text-blush transition hover:bg-rose-deep"
              >
                Upload instead
              </button>
              <button
                type="button"
                onClick={() => setCameraError(null)}
                className="rounded-full border border-rose px-6 py-2.5 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`fixed inset-0 z-50 items-center justify-center bg-ink/70 p-4 ${cameraOpen ? "flex" : "hidden"}`} role="dialog" aria-modal="true" aria-label="Take a photo">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-ink p-4 shadow-2xl">
          <button
            type="button"
            onClick={stopCamera}
            aria-label="Close camera"
            className="absolute top-6 right-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <video
            ref={videoRef}
            playsInline
            muted
            className="aspect-square w-full rounded-2xl bg-black object-cover"
          />
          <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              onClick={capturePhoto}
              aria-label="Capture photo"
              className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white/10 text-white transition hover:bg-white/20"
            >
              <span className="h-12 w-12 rounded-full bg-white" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 text-center font-sans text-sm text-white/70">
            Center your face in the frame, then tap to capture.
          </p>
        </div>
      </div>
    </div>
  );
}
