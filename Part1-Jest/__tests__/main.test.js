const formatVolumeIconPath = require('../assets/scripts/main');

describe("Test for formatVolumeIconPath", () => {
    test('test level 3 volume', () => {
        expect(formatVolumeIconPath(100)).toContain('3');
    });

    test('test level 2 volume', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('test level 1 volume', () => {
        expect(formatVolumeIconPath(13)).toContain('1');
    });

    test('test level 0 volume', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});

