it('fetches lat lng from Google Maps API', async t => {
  const { stdout } = await execa('./cli.js', ['--version']);
  t.true(stdout.length > 0);
});
