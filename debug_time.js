require("dotenv").config();
const { pool } = require('./src/backend/config/db');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

async function debugTime() {
    try {
        const [rows] = await pool.query('SELECT start_time, end_time, date FROM classes WHERE batch_id = ? AND date = CURDATE()', ['3b01c461-c662-11f0-8ff1-f8e4e3fe8908']);
        if (rows.length === 0) {
            console.log('No class found for today in DB');
            process.exit(0);
        }

        const cl = rows[0];
        console.log('DB Values:', {
            start_time: cl.start_time,
            end_time: cl.end_time,
            date: cl.date,
            type_start: typeof cl.start_time
        });

        const now = dayjs();
        const todayDate = now.format('YYYY-MM-DD');
        console.log('Computed todayDate:', todayDate);
        console.log('Current System Time:', now.format('YYYY-MM-DD HH:mm:ss'));

        const startTimeStr = `${todayDate} ${cl.start_time}`;
        const endTimeStr = `${todayDate} ${cl.end_time}`;

        console.log('Attempting to parse:', startTimeStr);

        const startTime = dayjs(startTimeStr, 'YYYY-MM-DD HH:mm:ss');
        const endTime = dayjs(endTimeStr, 'YYYY-MM-DD HH:mm:ss');

        console.log('Parsed startTime:', startTime.format('YYYY-MM-DD HH:mm:ss'), 'Valid:', startTime.isValid());
        console.log('Parsed endTime:', endTime.format('YYYY-MM-DD HH:mm:ss'), 'Valid:', endTime.isValid());

        console.log('now.isAfter(startTime):', now.isAfter(startTime));
        console.log('now.isBefore(endTime):', now.isBefore(endTime));
        console.log('now.isAfter(endTime):', now.isAfter(endTime));

    } catch (err) {
        console.error(err);
    }
    process.exit(0);
}

debugTime();
