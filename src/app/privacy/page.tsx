"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Key,
  Server,
  Database,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Share2,
  Printer,
  ChevronRight,
  UserCheck,
  HardDrive,
  Clock,
} from "lucide-react";
import CampusVerifiedBadge from "@/components/CampusVerifiedBadge";

const SECTIONS = [
  { id: "overview", title: "1. Privacy Overview & Commitments" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "api-key-zero-storage", title: "3. Zero-Storage for Gemini API Keys" },
  { id: "cookies-sessions", title: "4. Session Cookies & Edge Security" },
  { id: "media-storage", title: "5. Poster Media & Cloud Storage" },
  { id: "third-parties", title: "6. Cloud Providers & Third Parties" },
  { id: "student-rights", title: "7. Your Rights & Data Portability" },
  { id: "retention", title: "8. Data Retention & Deletion" },
  { id: "contact", title: "9. Data Protection Contact" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");
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
      {/* Breadcrumb Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-kalvium-muted dark:text-kalvium-dark-muted mb-3 font-medium">
          <Link href="/" className="hover:text-kalvium-coral transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-kalvium-text dark:text-kalvium-dark-text font-semibold">Governance & Legal</span>
          <span>/</span>
          <span className="text-kalvium-coral font-semibold">Privacy Policy</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-kalvium-border dark:border-kalvium-dark-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kalvium-success-tint dark:bg-kalvium-dark-success-tint border border-kalvium-success/20 text-kalvium-success text-xs font-bold mb-2">
              <Lock size={13} />
              <span>Campus Data Protection & Confidentiality</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-kalvium-text dark:text-kalvium-dark-text tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-2xl">
              How CampusHub protects your student identity, safeguards calendar schedules, and enforces a strict zero-persistence architecture for AI credentials.
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

        {/* Highlight Guarantee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs flex items-start gap-3">
            <div className="p-2 rounded-xl bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint text-kalvium-coral shrink-0">
              <Key size={18} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-kalvium-text dark:text-kalvium-dark-text block">
                Zero Gemini Key Storage
              </span>
              <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted mt-0.5">
                API keys stay on your local device only and are never saved to our database.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs flex items-start gap-3">
            <div className="p-2 rounded-xl bg-kalvium-success-tint dark:bg-kalvium-dark-success-tint text-kalvium-success shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-kalvium-text dark:text-kalvium-dark-text block">
                No Ad Tracking or Data Sales
              </span>
              <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted mt-0.5">
                We never sell, monetize, or share student engagement data with external advertisers.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-soft-xs flex items-start gap-3">
            <div className="p-2 rounded-xl bg-kalvium-warning-tint dark:bg-kalvium-dark-warning-tint text-kalvium-warning shrink-0">
              <Lock size={18} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-kalvium-text dark:text-kalvium-dark-text block">
                HMAC Signed Role Security
              </span>
              <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted mt-0.5">
                Cryptographic signatures protect administrative boundaries across edge middleware.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
        {/* Table of Contents */}
        <aside className="sticky top-20 hidden lg:block bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-2xl p-4 shadow-soft-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-kalvium-muted dark:text-kalvium-dark-muted mb-3 px-2">
            Policy Navigation
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
        </aside>

        {/* Content Body */}
        <div className="bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-3xl p-6 sm:p-10 shadow-kalvium-sm space-y-10 leading-relaxed text-xs sm:text-sm text-kalvium-text dark:text-kalvium-dark-text">
          {/* Section 1 */}
          <section id="overview" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>1. Privacy Overview & Institutional Commitments</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              At Campus Event Hub, student privacy and institutional trust are fundamental. This policy explains what information we collect, how it is used to orchestrate campus events, and the technical measures implemented to ensure student agendas and administrative evaluations remain protected.
            </p>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              CampusHub is operated within the Kalvium academic infrastructure. We do not sell, rent, or lease personal information to third-party data brokers or marketing platforms under any circumstances.
            </p>
          </section>

          {/* Section 2 */}
          <section id="information-collected" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Database className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>2. Information We Collect</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              We collect only the minimal data required to provide authenticated campus event management:
            </p>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
                <strong className="text-kalvium-text dark:text-kalvium-dark-text block mb-1">
                  A. Account & Profile Data
                </strong>
                <p className="text-kalvium-muted dark:text-kalvium-dark-muted text-xs">
                  Your full name, verified institutional email address (<code className="font-mono text-[11px]">@kalvium.community</code> or <code className="font-mono text-[11px]">@kalvium.com</code>), user role, and default avatar identifier.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
                <strong className="text-kalvium-text dark:text-kalvium-dark-text block mb-1">
                  B. Personal Schedule & Agenda Bookmarks
                </strong>
                <p className="text-kalvium-muted dark:text-kalvium-dark-muted text-xs">
                  The events you choose to save to "My Schedule" are stored in a private subcollection under your user document (<code className="font-mono text-[11px]">users/{"{userId}"}/savedEvents</code>). This data is readable only by your authenticated session.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
                <strong className="text-kalvium-text dark:text-kalvium-dark-text block mb-1">
                  C. Event Submissions & Verification Audit Records
                </strong>
                <p className="text-kalvium-muted dark:text-kalvium-dark-muted text-xs">
                  Event titles, descriptions, categories, venues, dates, times, and promotional flyers submitted by organizers or students. For managerial decisions, we record manager timestamps and review notes in an immutable audit subcollection.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="api-key-zero-storage" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Key className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>3. Strict Zero-Storage Policy for Gemini API Keys</span>
            </h2>
            <div className="p-4 rounded-2xl bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint border border-kalvium-coral/30">
              <p className="font-bold text-kalvium-coral text-xs mb-1">
                Zero Cloud Persistence Architecture
              </p>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted leading-relaxed">
                When an organizer or student enters a Google Gemini API key to run multimodal flyer extraction, the key is saved exclusively in the client browser's <code className="font-mono text-[11px]">localStorage</code> on that specific physical device.
                <br /><br />
                The backend route handlers explicitly sanitize all event snapshots before writing to Firestore, stripping out any <code className="font-mono text-[11px]">apiKey</code> or <code className="font-mono text-[11px]">geminiKey</code> parameters. CampusHub servers never store your API key in persistent cloud databases.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="cookies-sessions" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Lock className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>4. Session Cookies & Edge Middleware Security</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              We employ secure, modern HTTP cookie standards for user authentication:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li>
                <strong className="text-kalvium-text dark:text-kalvium-dark-text">HTTP-Only Tokens:</strong> The primary session token (<code className="font-mono text-[11px]">campus_auth_token</code>) is configured with <code className="font-mono text-[11px]">HttpOnly: true</code> and <code className="font-mono text-[11px]">SameSite: Lax</code> to prevent client-side script interception (XSS).
              </li>
              <li>
                <strong className="text-kalvium-text dark:text-kalvium-dark-text">HMAC-SHA256 Role Signatures:</strong> Privileged administrative access (<code className="font-mono text-[11px]">CAMPUS_MANAGER</code>, <code className="font-mono text-[11px]">ORGANIZER</code>) requires an accompanying cryptographic signature cookie (<code className="font-mono text-[11px]">campus_user_role_sig</code>) evaluated at the edge by Next.js middleware.
              </li>
              <li>
                <strong className="text-kalvium-text dark:text-kalvium-dark-text">Zero Advertising Cookies:</strong> CampusHub does not use third-party marketing cookies, tracking pixels, or cross-site tracking beacons.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="media-storage" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>5. Poster Media & Cloud Storage</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              Promotional flyer images uploaded by organizers are stored in secure Firebase Cloud Storage buckets:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li>Uploads are capped at a maximum of 10MB per file and restricted to approved image MIME types (<code className="font-mono text-[11px]">image/png</code>, <code className="font-mono text-[11px]">image/jpeg</code>, <code className="font-mono text-[11px]">image/webp</code>).</li>
              <li>Storage security rules prohibit executable scripts or non-image payloads.</li>
              <li>Published posters are made publicly readable within the campus application to facilitate event discovery.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="third-parties" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Server className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>6. Infrastructure Providers & Third Parties</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              CampusHub relies on industry-standard cloud infrastructure:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li><strong>Google Firebase:</strong> Used for authenticated identity, NoSQL Firestore database, and media bucket storage.</li>
              <li><strong>Google Gemini API:</strong> Processes uploaded flyer images for optical character extraction when initiated by an organizer.</li>
              <li><strong>Vercel / Next.js Hosting:</strong> Serves the web application and executes serverless API route handlers.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="student-rights" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>7. Your Rights & Data Portability</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              As a campus member, you maintain full control over your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-kalvium-muted dark:text-kalvium-dark-muted">
              <li><strong>Agenda Control:</strong> You can add or remove any saved event from your personal calendar with a single click.</li>
              <li><strong>Submission Withdrawal:</strong> Student and club organizers may delete their pending event proposals at any time prior to or following review.</li>
              <li><strong>Account Deletion:</strong> You may request complete account and data removal by contacting campus administrative IT.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="retention" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <Clock className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>8. Data Retention & Academic Archiving</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              Verified campus events remain archived in the platform to preserve university co-curricular history and prevent duplicate scheduling in subsequent academic years. Inactive student accounts may be archived following graduation.
            </p>
          </section>

          {/* Section 9 */}
          <section id="contact" className="scroll-mt-24 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-kalvium-ink dark:text-kalvium-dark-ink flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-kalvium-coral shrink-0" />
              <span>9. Data Protection Contact & Inquiries</span>
            </h2>
            <p className="text-kalvium-muted dark:text-kalvium-dark-muted">
              If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Campus Data Protection Coordinator:
            </p>
            <div className="p-4 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
              <p className="font-bold text-xs text-kalvium-text dark:text-kalvium-dark-text">
                Kalvium Campus Hub Privacy & Safety Team
              </p>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-1">
                Email:{" "}
                <a
                  href="mailto:privacy@kalvium.community"
                  className="text-kalvium-coral font-bold hover:underline"
                >
                  privacy@kalvium.community
                </a>
              </p>
              <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-0.5">
                Campus Location: Student Affairs Center, Kalvium Campus
              </p>
            </div>
          </section>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-kalvium-border dark:border-kalvium-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <CampusVerifiedBadge size="sm" />
              <span className="text-xs font-semibold text-kalvium-muted">
                Zero-Persistence API Key Security Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/terms"
                className="text-xs font-semibold text-kalvium-muted hover:text-kalvium-coral transition"
              >
                ← Terms & Conditions
              </Link>
              <Link
                href="/guidelines"
                className="text-xs font-bold text-kalvium-coral hover:underline"
              >
                Event Guidelines →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
