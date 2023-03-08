export class LinkedNode<T> {

    private value: T;

    private next: LinkedNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }

    public getValue(): T {
        return this.value;
    }

    public getNext(): LinkedNode<T> | undefined {
        return this.next;
    }

    public setNext(next: LinkedNode<T> | undefined) {
        this.next = next;
    }

    public hasNext(): boolean {
        return this.next !== undefined;
    }
}