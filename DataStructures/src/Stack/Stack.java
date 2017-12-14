public class Stack {
  public int maxSize;
  public int size;
  public int[] bucket;

  public Stack(int maxSize) {
    this.bucket = new int[maxSize];
    this.maxSize = maxSize;
    this.size = 0;
  }

  public int pop() {
    if (size == 0) { throw new Error("Stack is empty."); }

    int item = this.bucket[lastIndex()];

    this.bucket[lastIndex()] = 0;

    this.size -= 1;

    return item;
  }

  public int[] push(int item) {
    if (size == maxSize) { throw new Error("Stack is full."); }

    this.size += 1;
    this.bucket[lastIndex()] = item;

    return this.bucket;
  }

  public int top() {
    if (size == 0) { throw new Error("Stack is empty."); }

    return this.bucket[lastIndex()];
  }

  private int lastIndex() {
    return (this.size == 0) ? 0 : this.size - 1;
  }

  public final static void main(String[] args) {
    System.out.println("#Stack()");

    Stack stack;

    System.out.println("should create new Integer array");
    stack = new Stack(5);
    System.out.println(stack.bucket instanceof int[]);

    System.out.println("should create array with max size");
    stack = new Stack(5);
    System.out.println(stack.bucket.length == 5);
  }
}
