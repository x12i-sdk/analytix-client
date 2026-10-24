import assert from 'node:assert/strict';
import { createAnalytixClient } from '@x12i/analytix-client';

const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = async (url, init) => {
    assert.equal(new URL(url).pathname, '/v1/analytics/demo-count/run');
    assert.equal(JSON.parse(init.body).params.currency, 'USD');
    return Response.json({ analyticId: 'demo-count', analyticType: 'query', version: 1, status: 'active', data: { count: 3 }, meta: {
      cache: { hit: false, key: 'fixture' }, probes: [], execution: { durationMs: 0, startedAt: '2026-01-01T00:00:00Z', finishedAt: '2026-01-01T00:00:00Z', traceId: 'fixture-trace' },
    } });
  };
  const client = createAnalytixClient({ mode: 'mock', baseUrl: 'https://analytix.example.invalid' });
  const result = await client.run('demo-count', { currency: 'USD' });
  assert.equal(result.data.count, 3);
  console.log(result);
} finally { globalThis.fetch = originalFetch; }
// The fixture checks the HTTP client. It does not execute an analytics query or contact a database.
