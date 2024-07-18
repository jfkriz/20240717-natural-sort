import { beforeEach, expect, test, describe } from '@jest/globals';
import { Kata, humanSortComparator, humanSortComparatorAI, humanSortComparatorLazy } from "./kata";

let fixture: Kata;

beforeEach(() => {
    fixture = new Kata();
});

test('hello should return message with specified name', () => {
    const name = 'Ingage';
    expect(fixture.hello(name)).toEqual(`Hello ${name}`);
});

const comparators: { [key: string]: (a: string, b: string) => number } = {
    "humanSortComparator": humanSortComparator,
    "humanSortComparatorAI": humanSortComparatorAI,
    "humanSortComparatorLazy": humanSortComparatorLazy
};

Object.keys(comparators).forEach((name) => {
    const fixture = comparators[name];
    describe(name, () => {
        test('should sort strings with numbers in human order', () => {
            const input = ["file10", "file2", "file1a", "file1b", "file20", "file11", "file3"];
            const expected = ["file1a", "file1b", "file2", "file3", "file10", "file11", "file20"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
        test('should sort simple case of letters only properly', () => {
            const input = ["xyz", "def", "abc"];
            const expected = ["abc", "def", "xyz"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
        test('should sort simple case of numbers only properly', () => {
            const input = ["789", "456", "123"];
            const expected = ["123", "456", "789"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
        test('should sort simple case of numbers with one group of letters properly', () => {
            const input = ["789", "456", "abc"];
            const expected = ["abc", "456", "789"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
        test('should sort simple case of letters with one group of numbers properly', () => {
            const input = ["123", "def", "abc"];
            const expected = ["abc", "def", "123"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
        test('should sort simple case of mixed where lengths and sequence lengths are equal', () => {
            const input = ["3xyz", "1abc", "2def"];
            const expected = ["1abc", "2def", "3xyz"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
        test('should sort simple case file1 file10 properly', () => {
            const input = ["file10", "file1"];
            const expected = ["file1", "file10"];
            input.sort(fixture);
            expect(input).toEqual(expected);
        });
    }
)});