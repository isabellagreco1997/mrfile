import { createClient } from '@supabase/supabase-js';
import { UserFormData } from '../types';

const isDevelopment = import.meta.env.DEV;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
}) : null;

export async function submitLead(formData: UserFormData) {
  // In development, skip database submission
  if (isDevelopment) {
    return { success: true, data: null };
  }

  if (!supabase) {
    console.error('Supabase client not initialized');
    return { success: false, error: 'Database configuration missing' };
  }

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          postcode: formData.postcode,
          investment_value: formData.investmentValue,
          agreed_to_terms: formData.agreement,
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting lead:', error);
    return { success: false, error };
  }
}