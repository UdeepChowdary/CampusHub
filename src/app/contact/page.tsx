"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Users,
  Clock,
  Github,
  ExternalLink,
  Copy,
  Check,
  Send,
  MessageSquare,
  HelpCircle,
  FileText,
  ShieldCheck,
  Sparkles,
  Bug,
  KeyRound,
  CalendarPlus,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const QUICK_INQUIRIES = [
  {
    title: "Account & Login Issue",
    icon: KeyRound,
    category: "Account & Login Issue",
    subject: "Login or Permission Issue on CampusHub",
    body: "Hi CampusHub Team,\n\nI am experiencing an issue accessing my account.\n\nDescription of Issue:\nSteps I tried:\nError Message (if any):",
  },
  {
    title: "Request Event Hosting Access",
    icon: CalendarPlus,
    category: "Request Event Hosting Access",
    subject: "Requesting Event Hosting Privileges",
    body: "Hi CampusHub Team,\n\nI would like to request organizer hosting privileges on CampusHub.\n\nClub / Society Name:\nProposed Event Title:\nBrief Event Summary:\nTarget Date & Venue:",
  },
  {
    title: "Report a Bug or Defect",
    icon: Bug,
    category: "Report a Bug / Defect",
    subject: "CampusHub Bug Report",
    body: "Hi CampusHub Team,\n\nI discovered a bug on the platform.\n\nPage / URL:\nSteps to Reproduce:\nExpected Result:\nActual Result:\nDevice & Browser:",
  },
  {
    title: "Squad 83 General Question",
    icon: MessageSquare,
    category: "General Inquiry",
    subject: "General Question regarding CampusHub",
    body: "Hi Udeep & Mageshwaran,\n\nI have a question about CampusHub:\n\n",
  },
];

export default function ContactStaffPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Formspree Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    squad: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copyToClipboard = (text: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  const handleSelectQuickInquiry = (inquiry: typeof QUICK_INQUIRIES[0]) => {
    setFormData((prev) => ({
      ...prev,
      category: inquiry.category,
      subject: inquiry.subject,
      message: inquiry.body,
    }));

    // Scroll smoothly to direct message form
    const formElement = document.getElementById("direct-message-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Validate email format
    const cleanEmail = formData.email.trim().toLowerCase();
    if (!cleanEmail.endsWith("@kalvium.community") && !cleanEmail.endsWith("@kalvium.com")) {
      setStatus("error");
      setErrorMessage("Please use your official campus email (@kalvium.community or @kalvium.com).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: cleanEmail,
          squad: formData.squad.trim() || "Not specified",
          category: formData.category,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.error ||
            "Unable to deliver message right now. Please try again or email our student leads directly."
        );
      }
    } catch (err: any) {
      console.error("Contact form submission error:", err);
      setStatus("error");
      setErrorMessage("Network error occurred while delivering your message. Please try again or email us directly.");
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      squad: "",
      category: "General Inquiry",
      subject: "",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-kalvium-muted dark:text-kalvium-dark-muted mb-3 font-medium">
          <Link href="/" className="hover:text-kalvium-coral transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-kalvium-text dark:text-kalvium-dark-text font-semibold">Support</span>
          <span>/</span>
          <span className="text-kalvium-coral font-semibold">Contact Staff</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-kalvium-border dark:border-kalvium-dark-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint border border-kalvium-coral/20 text-kalvium-coral text-xs font-bold mb-2">
              <Mail size={13} />
              <span>CampusHub Student Helpdesk</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-kalvium-text dark:text-kalvium-dark-text tracking-tight">
              Contact Staff
            </h1>
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-2xl leading-relaxed">
              Need help with your account, reporting a bug, requesting event hosting access, or resolving squad permissions? Send a direct message to student leads or raise a trackable issue.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Student Leads & Verified Email Cards */}
        <div className="bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-3xl p-6 sm:p-8 shadow-kalvium-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-kalvium-border/70 dark:border-kalvium-dark-border/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint flex items-center justify-center text-kalvium-coral font-bold">
                <Users size={18} />
              </div>
              <div>
                <h2 className="text-base font-bold text-kalvium-text dark:text-kalvium-dark-text">
                  Direct Student Leads & Email Channels
                </h2>
                <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
                  Reach out directly to the development leads in Squad 83.
                </p>
              </div>
            </div>

            <a
              href="#direct-message-form"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text hover:border-kalvium-coral hover:text-kalvium-coral transition shadow-soft-xs self-start sm:self-center"
            >
              <Send size={12} className="text-kalvium-coral" />
              <span>Jump to Direct Message Form</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: "Udeep Chowdary",
                role: "Student Lead (Squad 83)",
                email: "udeep.chowdary.s83@kalvium.community",
              },
              {
                name: "Mageshwaran T",
                role: "Student Lead (Squad 83)",
                email: "mageshwaran.t.s83@kalvium.community",
              },
            ].map((lead) => (
              <div
                key={lead.email}
                className="p-4 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border flex flex-col justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-coral block mb-0.5">
                    {lead.role}
                  </span>
                  <p className="text-xs font-bold text-kalvium-text dark:text-kalvium-dark-text">
                    {lead.name}
                  </p>
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-xs font-mono text-kalvium-muted dark:text-kalvium-dark-muted hover:text-kalvium-coral transition break-all mt-1 block"
                  >
                    {lead.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-kalvium-border/40 dark:border-kalvium-dark-border/40">
                  <a
                    href={`mailto:${lead.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-kalvium-coral text-white text-[11px] font-semibold hover:bg-kalvium-coral-dark transition shadow-soft-xs"
                  >
                    <Mail size={12} />
                    <span>Send Email</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(lead.email)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-kalvium-border dark:border-kalvium-dark-border bg-white dark:bg-kalvium-dark-surface text-[11px] font-semibold text-kalvium-text dark:text-kalvium-dark-text hover:border-kalvium-coral transition"
                    title="Copy Email"
                  >
                    {copiedEmail === lead.email ? (
                      <>
                        <Check size={12} className="text-kalvium-success" />
                        <span className="text-kalvium-success">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Metadata Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-kalvium-border/70 dark:border-kalvium-dark-border/70">
            <div className="p-3.5 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block mb-0.5">
                Cohort / Squad
              </span>
              <p className="text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text">
                Squad 83 — Kalvium, AIFT, SRM University-AP
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-muted block mb-0.5">
                Response Time SLA
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-kalvium-text dark:text-kalvium-dark-text">
                <Clock size={13} className="text-kalvium-coral" />
                <span>Typically within 24 hours during working academic days.</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Issue Tracker Card */}
        <div className="bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-3xl p-6 sm:p-8 shadow-kalvium-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-kalvium-text dark:text-kalvium-dark-text">
              <Github size={18} />
              <span>Bug Reports & Feature Requests</span>
            </div>
            <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted leading-relaxed">
              Found a bug or have a suggestion? Open an issue directly on the GitHub repository with reproduction steps, error logs, and screenshots for rapid triage.
            </p>
          </div>
          <a
            href="https://github.com/UdeepChowdary/CampusHub/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-kalvium-ink dark:bg-white text-white dark:text-kalvium-ink text-xs font-semibold hover:opacity-90 transition shadow-soft-xs shrink-0"
          >
            <span>Open GitHub Issue</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* 1-Click Quick Inquiries Section */}
        <div className="bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-3xl p-6 sm:p-7 shadow-kalvium-sm space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-coral block">
              Quick Templates
            </span>
            <h3 className="text-sm font-bold text-kalvium-text dark:text-kalvium-dark-text">
              Common Inquiries (Click to Auto-Fill Message Below):
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {QUICK_INQUIRIES.map((preset) => {
              const Icon = preset.icon;
              return (
                <button
                  key={preset.title}
                  type="button"
                  onClick={() => handleSelectQuickInquiry(preset)}
                  className="text-left p-3.5 rounded-2xl bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border hover:border-kalvium-coral/50 transition group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-kalvium-dark-surface text-kalvium-coral flex items-center justify-center shrink-0 shadow-soft-xs group-hover:scale-105 transition">
                    <Icon size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-kalvium-text dark:text-kalvium-dark-text group-hover:text-kalvium-coral transition flex items-center gap-1">
                      <span>{preset.title}</span>
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition" />
                    </p>
                    <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted">
                      Loads template into the direct message form below.
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Direct Message Form (Formspree Connected) */}
        <div
          id="direct-message-form"
          className="scroll-mt-24 bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-3xl p-6 sm:p-8 shadow-kalvium-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-kalvium-border/70 dark:border-kalvium-dark-border/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-kalvium-coral text-white flex items-center justify-center font-bold shadow-soft-xs">
                <Send size={18} />
              </div>
              <div>
                <h2 className="text-base font-bold text-kalvium-text dark:text-kalvium-dark-text">
                  Direct Message Support Desk
                </h2>
                <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted">
                  Sends directly to Udeep Chowdary & Mageshwaran T.
                </p>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-kalvium-muted dark:text-kalvium-dark-muted flex items-center gap-1.5 self-start sm:self-center">
              <Clock size={13} className="text-kalvium-coral" />
              <span>Response SLA: Within 24 hours</span>
            </span>
          </div>

          {/* Form State Banners */}
          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-soft-xs">
                <CheckCircle2 size={26} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-emerald-800 dark:text-emerald-300">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-xs text-emerald-700/90 dark:text-emerald-400/90 max-w-md mx-auto leading-relaxed">
                  Thank you! Your inquiry has been delivered directly to the Squad 83 student development leads. We will review and reply to{" "}
                  <strong className="font-semibold underline">{formData.email}</strong> within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetForm}
                className="mt-2 px-4 py-2 rounded-xl bg-white dark:bg-kalvium-dark-surface border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100/50 transition shadow-soft-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/50 flex items-start gap-3 text-xs text-rose-700 dark:text-rose-300">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold">Message Delivery Failed</p>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-kalvium-ink dark:text-kalvium-dark-ink uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-kalvium-coral">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border rounded-xl px-4 py-2.5 text-xs text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-kalvium-ink dark:text-kalvium-dark-ink uppercase tracking-wider mb-1.5">
                    Campus Email Address <span className="text-kalvium-coral">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. udeep.chowdary.s83@kalvium.community"
                    className="w-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border rounded-xl px-4 py-2.5 text-xs text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition"
                  />
                </div>
              </div>

              {/* Squad & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-kalvium-ink dark:text-kalvium-dark-ink uppercase tracking-wider mb-1.5">
                    Squad number
                  </label>
                  <input
                    type="text"
                    value={formData.squad}
                    onChange={(e) => setFormData({ ...formData, squad: e.target.value })}
                    placeholder="e.g. Squad 83"
                    className="w-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border rounded-xl px-4 py-2.5 text-xs text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-kalvium-ink dark:text-kalvium-dark-ink uppercase tracking-wider mb-1.5">
                    Inquiry Topic <span className="text-kalvium-coral">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border rounded-xl px-3 py-2.5 text-xs text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Account & Login Issue">Account & Login Issue</option>
                    <option value="Request Event Hosting Access">Request Event Hosting Access</option>
                    <option value="Report a Bug / Defect">Report a Bug / Defect</option>
                    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-kalvium-ink dark:text-kalvium-dark-ink uppercase tracking-wider mb-1.5">
                  Subject Line <span className="text-kalvium-coral">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Summary of your question or request..."
                  className="w-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border rounded-xl px-4 py-2.5 text-xs text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-kalvium-ink dark:text-kalvium-dark-ink uppercase tracking-wider">
                    Detailed Message <span className="text-kalvium-coral">*</span>
                  </label>
                  <span className="text-[11px] text-kalvium-muted">
                    {formData.message.length} characters
                  </span>
                </div>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide details, reproduction steps, squad information, or any relevant context..."
                  className="w-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt border border-kalvium-border dark:border-kalvium-dark-border rounded-xl p-3.5 text-xs text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition leading-relaxed resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-kalvium-muted dark:text-kalvium-dark-muted">
                  🔒 Secured transmission directly to student leads.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-kalvium-coral hover:bg-kalvium-coral-dark text-white text-xs font-bold shadow-soft-xs transition duration-200 active:scale-98 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Navigation Quick Links */}
        <div className="flex items-center justify-center gap-4 text-xs text-kalvium-muted dark:text-kalvium-dark-muted pt-4">
          <Link href="/faq" className="hover:text-kalvium-coral transition flex items-center gap-1 font-semibold">
            <HelpCircle size={13} />
            <span>Help Center & FAQ</span>
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-kalvium-coral transition flex items-center gap-1 font-semibold">
            <FileText size={13} />
            <span>Terms & Conditions</span>
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-kalvium-coral transition flex items-center gap-1 font-semibold">
            <ShieldCheck size={13} />
            <span>Privacy Policy</span>
          </Link>
          <span>•</span>
          <Link href="/guidelines" className="hover:text-kalvium-coral transition flex items-center gap-1 font-semibold">
            <Sparkles size={13} />
            <span>Event Guidelines</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
