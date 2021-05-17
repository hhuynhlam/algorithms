/**
  You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
  Merge all the linked-lists into one sorted linked-list and return it.

  Example 1:
  Input: lists = [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]
  Explanation: The linked-lists are:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted list:
  1->1->2->3->4->4->5->6

  Example 2:
  Input: lists = []
  Output: []

  Example 3:
  Input: lists = [[]]
  Output: []

  Constraints:
  k == lists.length
  0 <= k <= 10^4
  0 <= lists[i].length <= 500
  -10^4 <= lists[i][j] <= 10^4
  lists[i] is sorted in ascending order.
  The sum of lists[i].length won't exceed 10^4.
*/

function mergeKLists(lists = []) {
  if (!lists.length) {
    return null
  }

  if (lists.length === 1) {
    return lists[0]
  }

  if (lists.length === 2) {
    return merge(lists[0], lists[1])
  }

  const mid = Math.floor(lists.length / 2)

  const firstHalf = mergeKLists(lists.slice(0, mid))
  const secondHalf = mergeKLists(lists.slice(mid))

  return mergeKLists([firstHalf, secondHalf])
}

function merge(a, b) {
  let lesser, greater

  if (!a && !b) {
    return null
  } else if (!a) {
    return b
  } else if (!b) {
    return a
  }

  if (a.val <= b.val) {
    lesser = a
    greater = b
  } else {
    lesser = b
    greater = a
  }

  const root = lesser

  while (lesser) {
    if (!lesser.next) {
      lesser.next = greater
      lesser = null
    } else if (lesser.next.val > greater.val) {
      const temp = lesser.next
      lesser.next = greater
      lesser = temp
    } else {
      lesser = lesser.next
    }

    if (lesser && (lesser.val > greater.val)) {
      const temp = lesser

      lesser = greater
      greater = temp
    }
  }

  return root
}

function ListNode(val, next) {
  this.next = (next === undefined ? null : next)
  this.val = (val === undefined ? 0 : val)
}

module.exports = {
  ListNode,
  mergeKLists,
}
