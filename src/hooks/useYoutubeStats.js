import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';

// Fetches YouTube view counts for the given video IDs (cached by the joined key).
export function useYoutubeStats(ids) {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const key = (ids || []).filter(Boolean).join(',');

  useEffect(() => {
    if (!key) return;
    let active = true;
    setLoading(true);
    base44.functions
      .invoke('getYoutubeStats', { ids: ids.filter(Boolean) })
      .then((res) => {
        if (active) setStats(res.data?.stats || {});
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [key]);

  return { stats, loading };
}