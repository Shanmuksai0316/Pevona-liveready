const { startServer } = require('./node_modules/next/dist/server/lib/start-server');
(async () => {
  const dir = process.cwd();
  await startServer({
    dir,
    port: 3000,
    hostname: '0.0.0.0',
    allowRetry: true,
    isDev: true,
    minimalMode: false,
    keepAliveTimeout: undefined,
    selfSignedCertificate: undefined,
  });
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
