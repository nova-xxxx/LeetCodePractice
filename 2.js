// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var tempResultNode = new ListNode(0);
    var firstListNode = l1;
    var secondListNode = l2;
    let carry = 0;
    const finalResultNode = tempResultNode;
    while(firstListNode !== null || secondListNode !== null) {
        const firstFactor = firstListNode ? firstListNode.val : 0;
        const secondFactor = secondListNode ? secondListNode.val : 0;

        const sum = firstFactor + secondFactor + carry;

        const currentNodeVal = sum >= 10 ? sum - 10 : sum;
        carry = sum >= 10 ? 1 : 0;

        const currentNode = new ListNode(currentNodeVal);
        tempResultNode.next = currentNode;

        firstListNode = firstListNode && firstListNode.next;
        secondListNode = secondListNode && secondListNode.next;
        tempResultNode = tempResultNode.next;
    }
    if (carry > 0) {
        tempResultNode.next = new ListNode(carry);
    }
    return finalResultNode.next;
    
};
