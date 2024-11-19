import { createClient } from '@supabase/supabase-js';
import { UserFormData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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

    // Ensure investment value is an integer
    const investmentValue = Math.round(formData.investmentValue);

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
          investment_value: investmentValue,
          agreed_to_terms: formData.agreement
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    const errorMessage = error instanceof Error 
      ? error.message
      : 'An unexpected error occurred while saving your information.';

    return { 
      success: false, 
      error: errorMessage
    };
  }
}