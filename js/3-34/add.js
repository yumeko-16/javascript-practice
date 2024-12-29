const dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString()); // 結果：5/15/2017, 11:40:00 AM
dat.setMonth(dat.getMonth() + 3); // 3ヶ月を加算
console.log(dat.toLocaleString()); // 結果：8/15/2017, 11:40:00 AM
dat.setDate(dat.getDate() - 20); // 20日を減算
console.log(dat.toLocaleString()); // 結果：7/26/2017, 11:40:00 AM
