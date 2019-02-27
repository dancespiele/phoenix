import {convertBurstTimeToEpochTime} from '../convertBurstTimeToEpochTime';

describe('convertBurstTimeToEpochTime', () => {

    it('should convertBurstTimeToEpochTime()', () => {
        const unixTime = convertBurstTimeToEpochTime(142850535);

        const received = new Date(unixTime).toISOString();
        const expected = '2019-02-19T10:42:15.000Z';
        expect(received).toBe(expected);
    });

    it('should convertBurstTimeToEpochTime() to genesis Date', () => {
        const unixTime = convertBurstTimeToEpochTime(0);

        const received = new Date(unixTime).toISOString();
        const expected = '2014-08-11T02:00:00.000Z';
        expect(received).toBe(expected);
    });

    it('should fail on convertBurstTimeToEpochTime() due to invalid numbers', () => {
        const unixTime = convertBurstTimeToEpochTime(-1);

        const received = new Date(unixTime).toISOString();
        const expected = '2014-08-11T01:59:59.000Z';
        expect(received).toBe(expected);
    });

});