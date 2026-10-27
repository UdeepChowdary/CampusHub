import { adminDb } from "@/lib/firebase/admin";

/**
 * Campus Student Roster & Allowlist Authority (Server-side Only)
 * 
 * Verifies student enrollment status against the secure Firestore 'allowed_students' collection.
 * ZERO student names or emails are hardcoded in the codebase, preventing any leaks
 * to public repositories or client-side JavaScript bundles.
 */

export interface EnrolledStudent {
  serial?: number;
  name: string;
  email: string;
}

// Staff email accounts that possess administrative or organizer roles
export const AUTHORIZED_STAFF_EMAILS = new Set<string>([
  "udeep.chowdary.s83@kalvium.community",
  "mageshwaran.t.s83@kalvium.community",
  "manager@kalvium.community",
]);

/**
 * Checks if an email is an authorized staff member (manager/organizer).
 */
export function isStaffEmail(email: string): boolean {
  if (!email) return false;
  return AUTHORIZED_STAFF_EMAILS.has(email.toLowerCase().trim());
}

/**
 * Verifies if an email exists in the private Firestore 'allowed_students' collection.
 * Server-side only (uses Firebase Admin SDK).
 */
export async function isEnrolledStudentInDb(email: string): Promise<boolean> {
  if (!email) return false;
  const cleanEmail = email.toLowerCase().trim();
  
  if (isStaffEmail(cleanEmail)) return true;

  try {
    const doc = await adminDb.collection("allowed_students").doc(cleanEmail).get();
    return doc.exists;
  } catch (err) {
    console.error("Error querying allowed_students collection:", err);
    return false;
  }
}

/**
 * Retrieves enrolled student metadata (official name, serial number) from Firestore.
 */
export async function getEnrolledStudentFromDb(email: string): Promise<EnrolledStudent | null> {
  if (!email) return null;
  const cleanEmail = email.toLowerCase().trim();

  try {
    const doc = await adminDb.collection("allowed_students").doc(cleanEmail).get();
    if (!doc.exists) return null;
    const data = doc.data();
    return {
      serial: data?.serial,
      name: data?.name || "",
      email: cleanEmail,
    };
  } catch (err) {
    console.error("Error fetching student from allowed_students:", err);
    return null;
  }
}
