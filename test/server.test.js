const { getData } = require('../server');
test("Fetch Data", async () => {
    const res = await getData();
    console.log(res);
});