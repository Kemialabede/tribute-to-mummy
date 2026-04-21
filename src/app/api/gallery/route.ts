import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase credentials not configured');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

export async function GET() {
  try {
    const supabase = getSupabase();

    const { data: tributes, error } = await supabase
      .from('tributes')
      .select('id, name, image_url, message, created_at')
      .not('image_url', 'is', null)
      .order('created_at', { ascending: false });

    console.log('Tributes data:', tributes);
    console.log('Tributes error:', error);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch gallery images', details: error.message },
        { status: 500 }
      );
    }

    const galleryImages = (tributes || [])
      .filter((tribute) => tribute.image_url)
      .map((tribute) => ({
        id: tribute.id,
        src: tribute.image_url,
        alt: `Tribute by ${tribute.name}`,
        name: tribute.name,
        message: tribute.message,
      }));

    console.log('Gallery images:', galleryImages);

    return NextResponse.json(galleryImages);
  } catch (error) {
    console.error('GET gallery error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}