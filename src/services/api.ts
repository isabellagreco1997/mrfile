import { createClient } from '@supabase/supabase-js';
import { UserFormData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client with error handling
const supabase = createClient(
  supabaseUrl || '',
  supabaseKey || '',
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

  try {
    // Validate Supabase credentials
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }

    // Attempt to insert the lead
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
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      // Handle specific Supabase errors
      if (error.code === '42P01') {
        throw new Error('Database table "leads" does not exist');
      }
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // Provide user-friendly error message
    const errorMessage = error instanceof Error 
      ? error.message
      : 'An unexpected error occurred. Please try again.';

    return { 
      success: false, 
      error: errorMessage
    };
  }
}