export class BinaryNode<T> {

    private value: T;

    private left: BinaryNode<T> | undefined;

    private right: BinaryNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }

    public getValue(): T {
        return this.value;
    }

    public getLeft() {
        return this.left;
    }

    public getRight() {
        return this.right;
    }

    public setLeft(node: BinaryNode<T> | undefined) {
        this.left = node;
    }

    public setRight(node: BinaryNode<T> | undefined) {
        this.right = node;
    }

    public isFull() {
        return this.left !== undefined && this.right !== undefined; 
    }

    public isEmpty() {
        return this.left === undefined && this.right === undefined; 
    }

    public hasLeft() {
        return this.left !== undefined;
    }

    public hasRight() {
        return this.right !== undefined;
    }
}