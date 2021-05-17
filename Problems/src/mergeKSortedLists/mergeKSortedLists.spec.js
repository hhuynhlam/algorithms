const { ListNode, mergeKLists } = require('./mergeKSortedLists')

describe('mergekLists', () => {
  function printList(node) {
    let current = node
    let result = []

    while (current) {
      result.push(current.val)
      current = current.next
    }

    return result
  }

  function list1() {
    const n5 = new ListNode(5)
    const n4 = new ListNode(4, n5)
    const n1 = new ListNode(1, n4)

    return n1
  }

  function list2() {
    const n4 = new ListNode(4)
    const n3 = new ListNode(3, n4)
    const n1 = new ListNode(1, n3)

    return n1
  }

  function list3() {
    const n6 = new ListNode(6)
    const n2 = new ListNode(2, n6)

    return n2
  }

  it('returns sorted linked list', () => {
    const input = [list1(), list2(), list3()]
    const output = mergeKLists(input)

    const expected = [1, 1, 2, 3, 4, 4, 5, 6]
    const actual = printList(output)

    expect(actual).toEqual(expected)
  })

  it('returns empty when lists is empty', () => {
    const input = []
    const output = mergeKLists(input)

    const expected = []
    const actual = printList(output)

    expect(actual).toEqual(expected)
  })

  it('returns empty when 2 list is empty', () => {
    const input = [null, null]
    const output = mergeKLists(input)

    const expected = []
    const actual = printList(output)

    expect(actual).toEqual(expected)
  })
})
