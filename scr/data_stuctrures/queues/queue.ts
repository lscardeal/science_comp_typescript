import { LinkedList } from "../lists/linked_list";

export class Queue<T> {

    private elements: LinkedList<T> = new LinkedList();

    public clear() {
        this.elements.clear();
    }

    public isEmpty() {
        this.elements.isEmpty();
    }

    public getSize() {
        return this.elements.getSize();
    }

    public enqueue(value: T) {
        this.elements.addLast(value);
    }

    public dequeue() {
        const element = this.elements.getLast();
        this.elements.removeLast();
        return element;
    }

    public peek() {
        return this.elements.getLast();
    }
}