"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Clock,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ArrowRight,
  Printer,
  Share2,
  ChevronRight,
  Scale,
  Building2,
  UserCheck,
} from "lucide-react";
import CampusVerifiedBadge from "@/components/CampusVerifiedBadge";

const SECTIONS = [
  { id: "eligibility", title: "1. Community Eligibility & Scope" },
  { id: "verification-standard", title: "2. The Campus Verification Standard" },
  { id: "ai-disclaimer", title: "3. Multimodal AI Extraction & Anti-Hallucination" },
  { id: "api-keys", title: "4. Client-Side API Keys & Security" },
  { id: "organizer-code", title: "5. Organizer Code of Conduct & Venue Integrity" },
  { id: "clash-engine", title: "6. Schedule Clash Advisory System" },
  { id: "moderation", title: "7. Managerial Discretion & Audit Trails" },
  { id: "intellectual-property", title: "8. Promotional Artwork & Intellectual Property" },
  { id: "liability", title: "9. Limitation of Liability & Disclaimers" },
  { id: "amendments", title: "10. Policy Amendments & Contact" },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("eligibility");
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
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Breadcrumb & Meta Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-kalvium-muted dark:text-kalvium-dark-muted mb-3 font-medium">
          <Link href="/" className="hover:text-kalvium-coral transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-kalvium-text dark:text-kalvium-dark-text font-semibold">Governance & Legal</span>
          <span>/</span>
          <span className="text-kalvium-coral font-semibold">Terms of Service</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-kalvium-border dark:border-kalvium-dark-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint border border-kalvium-coral/20 text-kalvium-coral text-xs font-bold mb-2">
              <Scale size={13} />
              <span>Campus Governance & Terms of Use</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-kalvium-text dark:text-kalvium-dark-text tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-2xl">
              Official institutional policies governing event publication, AI extraction assistance, manager certification, and attendee safety across the campus community.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-center">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-kalvium-border dark:border-kalvium-dark-border bg-white dark:bg-kalvium-dark-surface text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text hover:border-kalvium-coral transition shadow-soft-xs"
              title="Copy page URL"
            >
              <Share2 size={13} />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-kalvium-border dark:border-kalvium-dark-border bg-white dark:bg-kalvium-dark-surface text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text hover:border-kalvium-coral transition shadow-soft-xs print:hidden"
              title="Print document"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Quick Document Attributes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block mb-0.5">
              Effective Date
            </span>
            <p className="text-xs font-bold text-kalvium-text dark:text-kalvium-dark-text">January 15, 2026</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block mb-0.5">
              Enforcement Status
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-kalvium-success">
              <span className="w-1.5 h-1.5 rounded-full bg-kalvium-success animate-pulse" />
              Active & Enforced
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block mb-0.5">
              Applies To
            </span>
            <p className="text-xs font-bold text-kalvium-text dark:text-kalvium-dark-text">Students, Clubs, Staff</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block mb-0.5">
              Version
            </span>
            <p className="text-xs font-bold text-kalvium-text dark:text-kalvium-dark-text">v2.4 (Kalvium Ecosystem)</p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <aside className="sticky top-20 hidden lg:block bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-2xl p-4 shadow-soft-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-kalvium-muted dark:text-kalvium-dark-muted mb-3 px-2">
            Table of Contents
          </p>
          <nav className="space-y-1">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setActiveSection(sec.id)}
                className={`block text-xs py-2 px-2.5 rounded-xl transition ${
                  activeSection === sec.id
                    ? "bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint text-kalvium-coral font-bold"
                    : "text-kalvium-muted dark:text-kalvium-dark-muted hover:text-kalvium-text dark:hover:text-kalvium-dark-text hover:bg-kalvium-surface-alt dark:hover:bg-kalvium-dark-surface-alt"
                }`}
              >
                {sec.title}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-kalvium-border dark:border-kalvium-dark-border px-2">
            <span className="text-[10px] font-bold text-kalvium-muted uppercase tracking-wider block mb-1">
              Related Documents
            </span>
            <div className="space-y-1.5">
              <Link
                href="/privacy"
                className="text-xs text-kalvium-coral hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Privacy & Data Policy</span>
                <ChevronRight size={12} />
              </Link>
              <Link
                href="/guidelines"
                className="text-xs text-kalvium-coral hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Event Hosting Guidelines</span>
                <ChevronRight size={12} />
              </Link>
              <Link
                href="/faq"
                className="text-xs text-kalvium-coral hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Support & FAQ</span>
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>
        </aside>

        {/* Legal Text Content Body */}
        <div className="bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-3xl p-6 sm:p-10 shadow-kalvium-sm space-y-10 leading-relaxed text-xs sm:text-sm text-kalvium-text dark:text-kalvium-dark-text">
          {/* Section 1 */}
          <section id="eligibility" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Building2 className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>1. Community Eligibility & Scope</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              Campus Event Hub ("CampusHub", "the Platform") is a proprietary campus event discovery, scheduling, and verification platform designed specifically for students, faculty, club leaders, and administrative personnel within the Kalvium educational network.
            </p>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              By registering an account, proposing an event, analyzing promotional flyers, saving items to your personal agenda, or accessing the verified feed, you enter into a legally binding agreement to comply with these Terms & Conditions and all applicable university policies.
            </p>
            <div className="p-4 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
              <p className="font-semibold text-kalvium-text dark:text-kalvium-dark-text text-xs">
                Domain Restriction Notice:
              </p>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-1">
                Account creation is restricted to verified campus email domains ending in <code className="bg-white dark:bg-kalvium-dark-surface px-1.5 py-0.5 rounded border border-kalvium-border dark:border-kalvium-dark-border font-mono text-[11px]">@kalvium.community</code> or <code className="bg-white dark:bg-kalvium-dark-surface px-1.5 py-0.5 rounded border border-kalvium-border dark:border-kalvium-dark-border font-mono text-[11px]">@kalvium.com</code>. Unauthorized third-party registrations are strictly prohibited.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="verification-standard" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-kalvium-success shrink-0" />
              <span>2. The Campus Verification Standard</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              The foundational pillar of CampusHub is absolute authenticity. Every event displayed in the public student feed must bear the official <span className="font-bold text-kalvium-success">✓ CAMPUS VERIFIED</span> seal.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li>
                <strong className="text-kalvium-text dark:text-kalvium-dark-text">Zero Self-Approval:</strong> Neither student organizers nor club executives possess the technical or administrative privilege to mark their own events as approved.
              </li>
              <li>
                <strong className="text-kalvium-text dark:text-kalvium-dark-text">Campus Manager Quality Gate:</strong> Only designated Campus Managers with authenticated administrative custom claims can review, edit, approve, or decline draft events.
              </li>
              <li>
                <strong className="text-kalvium-text dark:text-kalvium-dark-text">Provisional Status:</strong> All newly submitted events, whether generated via Gemini AI vision extraction or submitted manually, remain in <code className="bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt px-1.5 py-0.5 rounded text-[11px] font-mono">PENDING</code> status until formal verification.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="ai-disclaimer" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>3. Multimodal AI Extraction & Anti-Hallucination Policy</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              CampusHub integrates Google Gemini Vision models to assist organizers by performing optical character recognition (OCR) and structured text extraction from promotional flyers.
            </p>
            <div className="p-4 rounded-2xl bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint border border-kalvium-coral/30">
              <div className="flex items-center gap-2 text-kalvium-coral font-bold text-xs mb-1">
                <AlertTriangle size={15} />
                <span>Anti-Hallucination & Non-Fabrication Guarantee</span>
              </div>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted leading-relaxed">
                The AI extraction engine operates under strict guardrails. It is explicitly instructed never to fabricate dates, guest speakers, prize amounts, or venues. When text is partially obscured or absent from the poster, it returns <code className="font-mono text-[11px]">Not specified</code> or <code className="font-mono text-[11px]">Needs verification</code>. AI confidence tiers (<span className="text-kalvium-success font-semibold">HIGH</span>, <span className="text-kalvium-warning font-semibold">MEDIUM</span>, <span className="text-kalvium-coral font-semibold">LOW</span>) reflect optical certainty only, and do not constitute official university authorization.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="api-keys" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Lock className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>4. Client-Side API Keys & Privacy Architecture</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              CampusHub enforces a strict <strong className="text-kalvium-text dark:text-kalvium-dark-text">Zero-Persistence Policy</strong> for external AI API credentials:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li>When users provide their Google Gemini API key to run flyer analysis, that key is stored strictly within their client device's browser <code className="font-mono text-[11px]">localStorage</code>.</li>
              <li>Zero Gemini API keys are written to, stored in, or transmitted to the Cloud Firestore database.</li>
              <li>Users may clear or rotate their client-side key at any time in the Create Event Studio.</li>
              <li>The platform provides pre-calibrated sample posters for demonstration without requiring any API key.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="organizer-code" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>5. Organizer Code of Conduct & Venue Integrity</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              Event organizers and student clubs represent the university's vibrant co-curricular life and must uphold high standards of academic and community integrity.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li>
                <strong>Legitimate Room & Hall Bookings:</strong> Organizers may only submit events for physical campus spaces (e.g. Main Auditorium, CS Seminar Hall) if they have received prior room authorization through appropriate university facility coordinators.
              </li>
              <li>
                <strong>Duplicate Spam Prohibition:</strong> Organizers shall not flood the queue with duplicate drafts of the same event. Submissions flagged with a $\ge 0.75$ title similarity or identical venue/start-time slots will be rejected by the pre-submission detector.
              </li>
              <li>
                <strong>Prohibited Material:</strong> Events promoting hate speech, unapproved commercial solicitations, hazardous activities, or academic misconduct are strictly forbidden.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="clash-engine" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Clock className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>6. Mathematical Schedule Clash Advisory System</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              The Schedule Clash Detection Engine is provided as a student utility to prevent accidental double-booking.
            </p>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              The engine operates on strict non-blocking mathematical intervals:
              <br />
              <code className="block bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt p-2 rounded-xl my-2 text-[11px] font-mono text-center">
                Overlap = (startA &lt; endB) &amp;&amp; (startB &lt; endA)
              </code>
              Clash warnings are advisory. While the platform alerts students to conflicting commitments, students retain the option to override and "Save Anyway". Saving an event to your personal schedule does not constitute official academic course enrollment or academic leave of absence.
            </p>
          </section>

          {/* Section 7 */}
          <section id="moderation" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Scale className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>7. Managerial Discretion & Audit Trails</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              Campus Managers reserve the ultimate authority to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li>Edit and correct inaccurate dates, times, venues, or descriptions prior to event approval.</li>
              <li>Decline submissions that violate university guidelines, providing structured feedback reasons.</li>
              <li>Revoke approval and unpublish an event from the student feed if safety or scheduling circumstances change.</li>
            </ul>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted mt-2">
              Every managerial decision is permanently logged in the <code className="font-mono text-[11px]">approvalHistory</code> database audit trail with manager credentials, exact ISO timestamps, and review notes.
            </p>
          </section>

          {/* Section 8 */}
          <section id="intellectual-property" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>8. Promotional Artwork & Intellectual Property</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              By uploading a poster or graphic asset, you warrant that your club or organization owns or possesses appropriate permission to distribute the visual artwork. You grant CampusHub and Kalvium a non-exclusive license to host, display, and analyze the image solely for campus event discovery and archiving.
            </p>
          </section>

          {/* Section 9 */}
          <section id="liability" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>9. Limitation of Liability & Disclaimers</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              CampusHub is provided on an "as-is" and "as-available" basis. While our rigorous verification protocol substantially eliminates inaccurate event notices, the platform is not liable for last-minute speaker cancellations, weather-related venue relocations, or external ticketing link issues managed outside of CampusHub.
            </p>
          </section>

          {/* Section 10 */}
          <section id="amendments" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>10. Policy Amendments & Administration Contact</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              We may update these Terms from time to time to accommodate new campus technological features or university policies. Continued use of CampusHub following notice of updates constitutes acceptance of the amended terms.
            </p>
            <div className="p-4 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border mt-4">
              <p className="font-semibold text-xs text-kalvium-text dark:text-kalvium-dark-text">
                Questions or Concerns?
              </p>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-1">
                For administrative inquiries, role elevation requests, or governance questions, contact the Campus Management Office at{" "}
                <a
                  href="mailto:campus-hub@kalvium.community"
                  className="text-kalvium-coral font-bold hover:underline"
                >
                  campus-hub@kalvium.community
                </a>
                .
              </p>
            </div>
          </section>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-kalvium-border dark:border-kalvium-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <CampusVerifiedBadge size="sm" />
              <span className="text-xs font-semibold text-kalvium-muted">
                Official Kalvium Campus Standard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-xs font-semibold text-kalvium-muted hover:text-kalvium-coral transition"
              >
                Privacy Policy →
              </Link>
              <Link
                href="/guidelines"
                className="text-xs font-bold text-kalvium-coral hover:underline"
              >
                Hosting Guidelines →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
