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
  // In development mode, log the data being sent
  console.log('Submitting lead with investment value:', formData.investmentValue);

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

    // Ensure investment value is a valid integer
    const investmentValue = Math.round(Number(formData.investmentValue));
    
    // Validate investment value
    if (isNaN(investmentValue) || investmentValue < 250000 || investmentValue > 2000000) {
      throw new Error('Invalid investment value');
    }

    console.log('Processed investment value:', investmentValue);

    // Create the lead data object
    const leadData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      investment_value: investmentValue,
      agreed_to_terms: formData.agreement
    };

    console.log('Sending lead data to Supabase:', leadData);

    // Attempt to insert the lead
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    console.log('Successfully saved lead with data:', data);
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