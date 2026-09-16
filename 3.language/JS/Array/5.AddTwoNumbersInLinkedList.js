/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1, l2) {
    let firstOne = l1
    let secondOne = l2
    let carry = 0;
    let result = new ListNode()
    let current = result;
    while (firstOne || secondOne) {
        const valA = firstOne ? firstOne.val : 0;
        const valB = secondOne ? secondOne.val : 0;

        // console.log({
        //     valA, valB
        // })

        // calculate sum and 
        let sum = valA + valB + carry;
        carry = Math.floor(sum / 10)
        const digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        // move to next pointers if they exist
        if (firstOne) firstOne = firstOne.next
        if (secondOne) secondOne = secondOne.next

    }

    // If carry remains, add one final node.
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return result.next ?? null; // temporary diversion
};




// refactored approach 

function addTwoNumbers(
    l1,
    l2
) {

    let carry = 0;

    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 || l2 || carry) {

        const sum =
            (l1?.val ?? 0) +
            (l2?.val ?? 0) +
            carry;

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return dummy.next;
}