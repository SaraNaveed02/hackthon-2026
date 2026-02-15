import { supabase } from "../auth/config";

/**
 * Test if Supabase is connected by calling the API.
 * @returns {{ ok: boolean, error?: string }}
 */
export async function checkSupabaseConnection() {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return {
      ok: false,
      error: "Missing env: add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env",
    };
  }

  try {
    const { error } = await supabase.auth.getSession();
    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err?.message || "Network or CORS error – check URL and key",
    };
  }
}
