'use server'

import { createClient, SupabaseClient } from '@supabase/supabase-js'

const SUPABASE_URL: string = process.env.SUPABASE_URL || ''
const SUPABASE_ANON_KEY: string = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;