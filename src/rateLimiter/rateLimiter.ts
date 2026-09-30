
type RateEntry = {
  count: number;
  firstRequestTime: number;
};

const rateMap = new Map<string, RateEntry>();

/**
 Returns true if request is allowed, false if rate limit exceeded
 */
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000 // default 10 minutes
): boolean {
  const now = Date.now();
  const entry = rateMap.get(key);

  if (!entry || now - entry.firstRequestTime > windowMs) {

    // first request or window expired
    rateMap.set(key, { count: 1, firstRequestTime: now });
    return true;
  }

  if (entry.count >= limit) return false;


  entry.count += 1;
  return true;
}
