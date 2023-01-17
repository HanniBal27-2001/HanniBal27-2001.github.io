window.onload = function () {
    let testDate = new Date();
    if (testDate.getHours() < 14) {
        testDate.setDate(testDate.getDate() - 1);
        testDate.setHours(17);
    } else {
        testDate.setHours(12);
    }

    testDate.setMinutes(10 + ((testDate.getDate() * 12) % 50));
    const hoursSinceTest = Math.floor((new Date().getTime() - testDate.getTime()) / 36e5);

    const dd = testDate.getDate() >= 10 ? testDate.getDate() : "0" + testDate.getDate();
    const MM = testDate.getMonth() >= 9 ? testDate.getMonth() + 1 : "0" + (testDate.getMonth() + 1);
    const yyyy = testDate.getFullYear();
    const HH = testDate.getHours() >= 10 ? testDate.getHours() : "0" + testDate.getHours();
    const mm = testDate.getMinutes() >= 10 ? testDate.getMinutes() : "0" + testDate.getMinutes();


    document.getElementById('time_since_tested').innerHTML = `vor ${hoursSinceTest} Stunden`;
    document.getElementById('test_time').innerHTML = `${dd}.${MM}.${yyyy} - ${HH}:${mm}`;
    window.location.hash = 'https://app.soda-software.de/result/8acb1c29-1a02-42c4-95a4-56f90cd1733d';
};
