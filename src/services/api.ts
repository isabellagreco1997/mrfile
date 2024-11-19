import { createClient } from '@supabase/supabase-js';
import { UserFormData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client
const supabase = createClient(
  supabaseUrl || 'http://placeholder-url.com',
  supabaseKey || 'placeholder-key',
  {
    auth: {
      persistSession: false
    }
  }
);

export async function submitLead(formData: UserFormData) {
  // In development mode, simulate successful submission
  if (import.meta.env.DEV) {
    console.log('Development mode: Simulating successful submission');
    return { success: true, data: null };
  }

  // In production, check if we have valid credentials
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    return { 
      success: false, 
      error: 'Database configuration missing. Please check your environment variables.' 
    };
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
    return { 
      success: false, 
      error: 'Failed to submit your information. Please try again.' 
    };
  }
}