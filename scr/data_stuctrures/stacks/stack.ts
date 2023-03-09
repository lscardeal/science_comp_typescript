import { LinkedList } from "../lists/linked_list";

export class Stack<T> {

    private elements: LinkedList<T> = new LinkedList();

    public clear() {
        this.elements.clear();
    }

    public isEmpty() {
        return this.elements.isEmpty();
    }

    public getSize() {
        return this.elements.getSize();
    }

    public push(value: T) {
        this.elements.addLast(value);
    }

    public pop() {
        const element = this.elements.getLast();
        this.elements.removeLast();
        return element;
    }

    public peek() {
        return this.elements.getLast();
    }

}