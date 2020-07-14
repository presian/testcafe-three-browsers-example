fixture('three-windows')
  .page('http://localhost:4200');

test('Log in to SIA', async (t) => {
  const firstWindow  = await (t as any).getCurrentWindow();
  console.log(firstWindow);
  await t.click('button');
  await t.wait(1000); // other wise the second window is not loaded and the result of  await (t as any).getCurrentWindow() on row #13 is null


  // newly opened window from the button should be current
  // IE actually hangs here, Chrome is OK.
  const secondWindow  = await (t as any).getCurrentWindow();
  console.log(secondWindow);

  await t.expect(secondWindow.id).notEql(firstWindow.id)
});
