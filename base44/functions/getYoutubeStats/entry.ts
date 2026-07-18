import { createClientFromRequest } from 'npm:@base44/sdk@0.8.38';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const raw = Array.isArray(body?.ids) ? body.ids : (body?.ids ? String(body.ids).split(',') : []);
    const ids = [...new Set(raw.map((s) => String(s).trim()).filter(Boolean))];
    if (ids.length === 0) return Response.json({ stats: {} });

    const key = Deno.env.get('YOUTUBE_API_KEY');
    if (!key) return Response.json({ error: 'Missing YouTube API key' }, { status: 500 });

    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${ids.join(',')}&key=${key}`;
    const resp = await fetch(url);
    if (!resp.ok) {
      const txt = await resp.text();
      return Response.json({ error: `YouTube API ${resp.status}: ${txt}` }, { status: 502 });
    }
    const data = await resp.json();
    const stats = {};
    for (const item of data.items || []) {
      stats[item.id] = {
        viewCount: Number(item.statistics?.viewCount || 0),
        likeCount: Number(item.statistics?.likeCount || 0),
        title: item.snippet?.title || '',
      };
    }
    return Response.json({ stats });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});