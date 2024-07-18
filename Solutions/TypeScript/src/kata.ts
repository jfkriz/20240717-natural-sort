export class Kata {
    public hello(name: string): string {
        return `Hello ${name}`;
    } 
}

export function humanSortComparator(a: string, b: string): number {
    // If a and b represent the same string, return 0 (a == b)
    if(a === b) {
        return 0;
    }

    // If a is undefined, null, or empty, but b is not, return -1 (a < b)
    if(a === undefined || a === null || a === "") {
        return -1;
    }

    // If b is undefined, null, or empty, but a is not, return 1 (a > b)
    if(b === undefined || b === null || b === "") {
        return 1;
    }

    // Regex to capture the sequences of digits and non-digits in the strings
    const sequences = /(\d+)|(\D+)/g;

    // Get the groups of digits and non-digits in a. If there are none (shouldn't happen if we got here), return -1 (a < b)
    const aGroups = a.match(sequences);
    if (!aGroups) {
        return -1;
    }

    // Get the groups of digits and non-digits in b. If there are none (shouldn't happen if we got here), return 1 (a > b)
    const bGroups = b.match(sequences);
    if (!bGroups) {
        return 1;
    }

    // Loop over all the groups in a
    for(let index = 0; index < aGroups.length; index++) {
        const aGroup = aGroups[index];
        // This shouldn't happen, but to make TS happy later, assert that aGroup is defined
        if (!aGroup) {
            return -1;
        }

        // Get the corresponding group in b, or undefined if we ran out of b groups
        const bGroup = index < bGroups.length ? bGroups[index] : undefined;
        // If we ran out of b groups, return 1 (a > b)
        if (!bGroup) {
            return 1;
        }

        // Determine if the groups are text or numbers
        const isAText = isNaN(parseInt(aGroup));
        const isBText = isNaN(parseInt(bGroup));

        let result = 0;
        if (isAText) {
            if (isBText) {
                // Is this cheating? Should I compare the strings by hand?
                result = aGroup.localeCompare(bGroup);
            } else {
                // group a is text, and b is numeric; numeric comes before text
                result = 1;
            }
        } else {
            if (isBText) {
                // group a is numeric, and b is text; numeric comes before text
                result = -1;
            } else {
                // Two groups of numbers, so compare them as numbers (so 1 and 2 will come before 10, for example)
                result = parseInt(aGroup) - parseInt(bGroup);
            }
        }

        // If we have a non-zero result, return it, otherwise continue comparing groups until we find a difference
        if (result != 0) {
            return result;
        }
    }

    // If we got here, the strings are equal
    return 0;
}

export function humanSortComparatorLazy(a: string, b: string): number {
    // Learned about the options to pass to localeCompare today, but that is cheating... :)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#numeric
    return a.localeCompare(b, undefined, { numeric: true });
}

export function humanSortComparatorAI(a: string, b: string): number {
    // Split strings into parts of digits and non-digits
    const splitIntoParts = (str: string) => str.match(/(\d+|\D+)/g) || [];
    const aParts = splitIntoParts(a);
    const bParts = splitIntoParts(b);

    // Compare parts one by one
    for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
        const aPart = aParts[i];
        const bPart = bParts[i];

        // Check if both parts are digits
        const aIsDigit = /^\d+$/.test(aPart);
        const bIsDigit = /^\d+$/.test(bPart);

        if (aIsDigit && bIsDigit) {
            // Compare as numbers
            const diff = parseInt(aPart, 10) - parseInt(bPart, 10);
            if (diff !== 0) return diff;
        } else if (!aIsDigit && !bIsDigit) {
            // Compare as strings
            const strComp = aPart.localeCompare(bPart);
            if (strComp !== 0) return strComp;
        } else {
            // Digit parts come before non-digit parts
            return aIsDigit ? -1 : 1;
        }
    }

    // If all compared parts are equal, the shorter array comes first
    return aParts.length - bParts.length;
}
