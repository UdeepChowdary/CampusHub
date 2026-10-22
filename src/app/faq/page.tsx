"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  Sparkles,
  ShieldCheck,
  Clock,
  Key,
  GraduationCap,
  PenTool,
  ChevronDown,
  ChevronUp,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import CampusVerifiedBadge from "@/components/CampusVerifiedBadge";

interface FAQItem {
  id: string;
  category: "STUDENTS" | "ORGANIZERS" | "MANAGERS" | "SECURITY";
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "verified-meaning",
    category: "STUDENTS",
    question: "What does the '✓ CAMPUS VERIFIED' badge mean on an event?",
    answer:
      "Every event displaying the '✓ CAMPUS VERIFIED' badge has been inspected by a university Campus Manager against the original promotional artwork. This guarantees that the date, exact time, campus venue reservation, and organizer identity are authentic and authorized.",
  },
  {
    id: "clash-works",
    category: "STUDENTS",
    question: "How does the Schedule Clash Engine work?",
    answer:
      "When you click 'Save to Schedule', CampusHub evaluates your existing agenda. If an event interval overlaps (startA < endB and startB < endA), an interactive warning modal highlights the conflicting event and exact overlap minutes. The system is back-to-back friendly (consecutive events do not clash), and students retain the freedom to override and 'Save Anyway'.",
  },
  {
    id: "student-propose",
    category: "STUDENTS",
    question: "Can regular students propose events or workshops?",
    answer:
      "Yes! Students can submit event proposals or study sessions directly through their Student Portal using the 'Request Event' tab. Student proposals enter the verification queue as PENDING and are reviewed by Campus Managers before appearing on the public feed.",
  },
  {
    id: "ai-vision-how",
    category: "ORGANIZERS",
    question: "How does the AI Poster Analyzer extract event information?",
    answer:
      "When you drag and drop an event flyer, Google Gemini Vision models perform optical character recognition (OCR) and structured text analysis. The engine adheres to strict anti-hallucination guardrails: if a detail is ambiguous or omitted from the flyer, it returns 'Not specified' rather than inventing information.",
  },
  {
    id: "confidence-ratings",
    category: "ORGANIZERS",
    question: "What do the HIGH, MEDIUM, and LOW confidence badges mean?",
    answer:
      "Confidence badges indicate optical extraction clarity. 'HIGH' means prominent, crisp typography; 'MEDIUM' indicates contextual or smaller subtext; 'LOW' highlights ambiguous, low-contrast, or unstated values that will receive extra scrutiny from the Campus Manager.",
  },
  {
    id: "gemini-api-key-storage",
    category: "SECURITY",
    question: "Where is my Google Gemini API key stored?",
    answer:
      "Your Gemini API key is stored strictly on your local device in browser localStorage. CampusHub has a Zero-Persistence Policy: API keys are never stored in Cloud Firestore or server databases. You can clear or rotate your key at any time in the Create Event Studio.",
  },
  {
    id: "no-api-key-demo",
    category: "ORGANIZERS",
    question: "Can I test the AI Poster Studio without an API key?",
    answer:
      "Yes! The Create Event Studio provides 5 pre-calibrated sample posters (Hackathon, AI Workshop, Music Fest, Robotics, Entrepreneurship Summit) that you can test with 1 click without entering any API key.",
  },
  {
    id: "duplicate-prevention",
    category: "ORGANIZERS",
    question: "Why did the system flag my event as a 'Potential Duplicate' or 'Venue Collision'?",
    answer:
      "CampusHub runs automated pre-submission checks. If an event on the same date has a title similarity coefficient >= 0.75, or if another event is already booked at the exact same physical campus venue during your requested time window, the system alerts you to prevent double-booking university facilities.",
  },
  {
    id: "manager-approval-sla",
    category: "MANAGERS",
    question: "How quickly do Campus Managers review event submissions?",
    answer:
      "Campus Managers review the verification queue during regular campus operating hours. The typical turnaround is under 24 hours. Organizers are advised to submit drafts at least 48 hours before the event.",
  },
  {
    id: "declined-event",
    category: "ORGANIZERS",
    question: "What happens if a Campus Manager declines my event?",
    answer:
      "If a submission is declined, the organizer receives an immediate notification on their dashboard with the manager's preset feedback reason (e.g. 'Information doesn't match poster', 'Venue conflict') along with personalized corrective notes. The organizer can correct the flyer and re-submit.",
  },
  {
    id: "role-elevation",
    category: "SECURITY",
    question: "How do I upgrade from a Student account to an Organizer account?",
    answer:
      "To prevent unauthorized event publishing, Organizer and Campus Manager accounts are provisioned directly by university administration. Contact campus-hub@kalvium.community with your club credentials to request an account role upgrade.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(["verified-meaning", "gemini-api-key-storage"])
  );

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "ALL" || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-kalvium-muted dark:text-kalvium-dark-muted mb-3 font-medium">
          <Link href="/" className="hover:text-kalvium-coral transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-kalvium-text dark:text-kalvium-dark-text font-semibold">Help Center</span>
          <span>/</span>
          <span className="text-kalvium-coral font-semibold">FAQ & Support</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kalvium-coral-tint dark:bg-kalvium-dark-coral-tint border border-kalvium-coral/20 text-kalvium-coral text-xs font-bold mb-3">
          <HelpCircle size={14} />
          <span>Knowledge Base & Support</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-kalvium-text dark:text-kalvium-dark-text tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-2xl">
          Everything you need to know about the Campus Verification Standard, AI flyer vision extraction, and schedule conflict protection.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-kalvium-muted"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions (e.g. clash detection, API keys, manager approval)..."
          className="w-full bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-kalvium-ink dark:text-kalvium-dark-ink focus:outline-none focus:border-kalvium-coral transition shadow-soft-xs"
        />
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
        {[
          { id: "ALL", label: "All Questions" },
          { id: "STUDENTS", label: "Students" },
          { id: "ORGANIZERS", label: "Club Organizers" },
          { id: "MANAGERS", label: "Campus Managers" },
          { id: "SECURITY", label: "Privacy & Security" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === tab.id
                ? "bg-kalvium-coral text-white shadow-soft-xs"
                : "bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border text-kalvium-muted dark:text-kalvium-dark-muted hover:text-kalvium-text dark:hover:text-kalvium-dark-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3 mb-12">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border">
            <HelpCircle size={32} className="mx-auto text-kalvium-muted mb-2 opacity-50" />
            <p className="font-bold text-sm text-kalvium-text dark:text-kalvium-dark-text">No matching questions found</p>
            <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-1">
              Try modifying your search keywords or clearing your filters.
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.has(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border overflow-hidden shadow-soft-xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 select-none hover:bg-kalvium-surface-alt/40 dark:hover:bg-kalvium-dark-surface-alt/40 transition"
                >
                  <span className="font-sans font-bold text-xs sm:text-sm text-kalvium-text dark:text-kalvium-dark-text pr-2">
                    {faq.question}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-kalvium-surface-alt dark:bg-kalvium-dark-surface-alt text-kalvium-muted shrink-0">
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-kalvium-muted dark:text-kalvium-dark-muted leading-relaxed border-t border-kalvium-border/40 dark:border-kalvium-dark-border/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Contact Support Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-kalvium-dark-surface border border-kalvium-border dark:border-kalvium-dark-border shadow-kalvium-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-kalvium-coral block mb-1">
            Need further assistance?
          </span>
          <h3 className="font-display text-2xl font-bold text-kalvium-text dark:text-kalvium-dark-text">
            Campus Administration Helpdesk
          </h3>
          <p className="text-xs text-kalvium-muted dark:text-kalvium-dark-muted mt-1 max-w-md">
            Our campus management team is available Monday through Friday to assist with club account provisioning, venue authorizations, and event guidelines.
          </p>
        </div>

        <a
          href="mailto:campus-hub@kalvium.community"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-kalvium-coral hover:bg-kalvium-coral-hover text-white text-xs font-bold transition shadow-soft-xs active:scale-95 shrink-0"
        >
          <Mail size={14} />
          <span>Contact Campus Staff</span>
        </a>
      </div>
    </div>
  );
}
