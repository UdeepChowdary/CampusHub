"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  UploadCloud,
  Clock,
  Sparkles,
  FileCheck,
  Building2,
  Calendar,
  Layers,
  ArrowRight,
  Info,
  XCircle,
  Share2,
  Printer,
  ChevronRight,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import CampusVerifiedBadge from "@/components/CampusVerifiedBadge";

export default function EventGuidelinesPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-kalvium-muted dark:text-kalvium-dark-muted mb-3 font-medium">
          <Link href="/" className="hover:text-kalvium-coral transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-kalvium-text dark:text-kalvium-dark-text font-semibold">Governance & Standards</span>
          <span>/</span>
          <span className="text-kalvium-coral font-semibold">Event Guidelines</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-kalvium-border dark:border-kalvium-dark-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint border border-kalvium-coral/20 text-kalvium-coral text-xs font-bold mb-2">
              <ShieldCheck size={13} />
              <span>Official University Standard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-kalvium-text dark:text-kalvium-dark-text tracking-tight">
              Event Hosting & Verification Guidelines
            </h1>
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-2xl">
              Criteria required for promotional flyers to earn the official <span className="font-bold text-kalvium-success">✓ CAMPUS VERIFIED</span> seal and be published to the student body.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-center">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-kalvium-border dark:border-kalvium-dark-border bg-white dark:bg-kalvium-dark-surface text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text hover:border-kalvium-coral transition shadow-soft-xs"
            >
              <Share2 size={13} />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-kalvium-border dark:border-kalvium-dark-border bg-white dark:bg-kalvium-dark-surface text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text hover:border-kalvium-coral transition shadow-soft-xs print:hidden"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <div className="space-y-10">
        {/* Verification Overview Hero Card */}
        <div className="rounded-3xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border p-6 sm:p-8 shadow-kalvium-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-kalvium-success-tint dark:bg-kalvium-dark-success-tint text-kalvium-success border border-kalvium-success/20 shrink-0">
              <CampusVerifiedBadge size="md" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-sans text-kalvium-ink dark:text-kalvium-dark-ink">
                What does the "✓ CAMPUS VERIFIED" stamp mean?
              </h2>
              <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 leading-relaxed">
                When a student sees this seal on an event card, it guarantees that:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt">
                  <CheckCircle2 size={15} className="text-kalvium-success shrink-0" />
                  <span>The flyer was scrutinized against original artwork.</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt">
                  <CheckCircle2 size={15} className="text-kalvium-success shrink-0" />
                  <span>The physical campus venue is confirmed available.</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt">
                  <CheckCircle2 size={15} className="text-kalvium-success shrink-0" />
                  <span>The organizer is an authenticated campus member.</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt">
                  <CheckCircle2 size={15} className="text-kalvium-success shrink-0" />
                  <span>Event date & exact start/end times are verified.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Five Mandatory Requirements */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-kalvium-coral text-white font-bold text-xs">
              1
            </span>
            <h2 className="text-xl font-bold font-sans text-kalvium-ink dark:text-kalvium-dark-ink">
              The 5 Mandatory Requirements for Event Approval
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs space-y-2">
              <div className="flex items-center gap-2 text-kalvium-coral font-bold text-xs">
                <Calendar size={16} />
                <span>Explicit Calendar Date</span>
              </div>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
                Posters must clearly state the exact date (YYYY-MM-DD or formatted date like "October 24, 2026"). Ambiguous terms like "Next Friday" or "Coming Soon" will be placed on hold.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs space-y-2">
              <div className="flex items-center gap-2 text-kalvium-coral font-bold text-xs">
                <Clock size={16} />
                <span>Defined Start & End Times</span>
              </div>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
                Every event requires both a starting time and estimated ending time (e.g. 10:00 AM – 01:00 PM). This is required for the Schedule Clash Engine to accurately protect student calendars.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs space-y-2">
              <div className="flex items-center gap-2 text-kalvium-coral font-bold text-xs">
                <Building2 size={16} />
                <span>Identified Physical Venue</span>
              </div>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
                Specify recognized campus locations (e.g. Main Auditorium, CS Seminar Hall A, Innovation Lab 304). If virtual, an authenticated Zoom/Google Meet link must be supplied.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs space-y-2">
              <div className="flex items-center gap-2 text-kalvium-coral font-bold text-xs">
                <FileCheck size={16} />
                <span>High-Resolution Artwork</span>
              </div>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
                Upload clear, high-contrast images (PNG or JPEG, up to 10MB). High resolution guarantees that Google Gemini Vision extracts all event attributes with "HIGH" confidence badges.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Achieving 100% HIGH Confidence with Gemini AI */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-kalvium-coral text-white font-bold text-xs">
              2
            </span>
            <h2 className="text-xl font-bold font-sans text-kalvium-ink dark:text-kalvium-dark-ink">
              Poster Design Best Practices for AI Vision
            </h2>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs space-y-4">
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted leading-relaxed">
              When using the **AI Poster Analyzer Studio**, Google Gemini Vision scans your image. Follow these guidelines to speed up managerial review:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-kalvium-success-tint dark:bg-kalvium-dark-success-tint border border-kalvium-success/20">
                <div className="flex items-center gap-1.5 text-kalvium-success font-bold text-xs mb-1">
                  <CheckCircle2 size={14} />
                  <span>High Contrast Text</span>
                </div>
                <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted">
                  Use dark text on light backgrounds or bold white text on dark artwork. Avoid low-contrast pastels.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-kalvium-success-tint dark:bg-kalvium-dark-success-tint border border-kalvium-success/20">
                <div className="flex items-center gap-1.5 text-kalvium-success font-bold text-xs mb-1">
                  <CheckCircle2 size={14} />
                  <span>Explicit Titles</span>
                </div>
                <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted">
                  Feature the primary event name in prominent headline typography at the top or center of the canvas.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-kalvium-success-tint dark:bg-kalvium-dark-success-tint border border-kalvium-success/20">
                <div className="flex items-center gap-1.5 text-kalvium-success font-bold text-xs mb-1">
                  <CheckCircle2 size={14} />
                  <span>Standard Time Formats</span>
                </div>
                <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted">
                  Write time with AM/PM indicators (e.g. "10:00 AM – 1:00 PM" or "14:00 – 17:00").
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Prohibited Content */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-kalvium-coral text-white font-bold text-xs">
              3
            </span>
            <h2 className="text-xl font-bold font-sans text-kalvium-ink dark:text-kalvium-dark-ink">
              Prohibited Event Submissions
            </h2>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-coral/30 shadow-soft-xs space-y-3">
            <div className="flex items-center gap-2 text-kalvium-coral font-bold text-sm">
              <XCircle size={18} />
              <span>Submissions that will be immediately declined:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
              <li><strong>Duplicate Submissions:</strong> Posting the same event multiple times on the same date.</li>
              <li><strong>Commercial Spam:</strong> Off-campus businesses soliciting paid student services without university sponsorship.</li>
              <li><strong>Unverified Venue Claims:</strong> Claiming an auditorium or lab without facility coordinator booking approval.</li>
              <li><strong>Hazardous or Unregulated Activities:</strong> Events involving fireworks, unauthorized pyrotechnics, or off-campus excursions without student safety sign-off.</li>
              <li><strong>Hate Speech & Harassment:</strong> Any content targeting protected student groups or violating the Kalvium Student Code of Conduct.</li>
            </ul>
          </div>
        </section>

        {/* 4. Submission Timelines & SLAs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-kalvium-coral text-white font-bold text-xs">
              4
            </span>
            <h2 className="text-xl font-bold font-sans text-kalvium-ink dark:text-kalvium-dark-ink">
              Review Timelines & Manager SLA
            </h2>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-sm text-kalvium-text dark:text-kalvium-dark-text">
                  Recommended Lead Time: 48–72 Hours
                </h3>
                <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-lg">
                  Campus Managers review the verification queue daily during business hours (9:00 AM – 6:00 PM). Submitting your draft at least 2 business days before your event guarantees publication in time for student discovery.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt text-center shrink-0 w-full sm:w-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block">
                  Average Turnaround
                </span>
                <span className="font-display font-bold text-2xl text-kalvium-coral">
                  &lt; 24 Hours
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-kalvium-coral-tint via-white to-kalvium-surface-alt dark:from-kalvium-dark-coral-tint dark:via-kalvium-dark-surface dark:to-kalvium-dark-surface-alt border border-kalvium-coral/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-kalvium-sm">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-kalvium-text dark:text-kalvium-dark-text tracking-tight">
              Ready to submit your campus event?
            </h3>
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-xl">
              Upload your promotional flyer to the AI Poster Analyzer Studio or propose a student workshop for immediate manager verification.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/dashboard/organizer?tab=create"
              className="px-5 py-2.5 rounded-full bg-kalvium-coral hover:bg-kalvium-coral-hover text-white text-xs font-bold transition shadow-soft-xs active:scale-95"
            >
              Open Event Studio →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
