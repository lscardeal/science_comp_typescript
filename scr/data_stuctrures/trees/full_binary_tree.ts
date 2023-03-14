import { BinaryNode } from './../nodes/binary_node';
export class FullBinaryTree<T> {

    private root: BinaryNode<T>;

    constructor(value: T) {
        this.root = new BinaryNode(value);
    }

    private isLeaf(node: BinaryNode<T>) {
        return node.getLeft() !== undefined && node.getRight() !== undefined;
    }

    public isFull() {
        return this.isFullHelper(this.root);
    }

    private isFullHelper(node: BinaryNode<T>) {
        if (node === undefined || this.isLeaf(node)) return true;

        if (node.getLeft() !== undefined && node.getRight() !== undefined) {
            return this.isFullHelper(node.getLeft()!) && this.isFullHelper(node.getRight()!);
        }

        return false;
    }

    public height() {
        return this.heightHelper(this.root);
    }

    public heightHelper(node: BinaryNode<T> | undefined) {
        if (node === undefined) return 0;

        const leftheight = this.heightHelper(node.getLeft());
        const rightHeight = this.heightHelper(node.getRight());
        const height = leftheight > rightHeight ? leftheight : rightHeight;
        return height + 1;
    }

    private getLowestLeaf(node: BinaryNode<T>): BinaryNode<T> {
        if (!node.isFull()) return node;

        const leftHeight = this.heightHelper(node.getLeft())
        const rightHeight = this.heightHelper(node.getRight())

        return leftHeight > rightHeight ? 
                this.getLowestLeaf(node.getRight()!) :
                this.getLowestLeaf(node.getLeft()!);
    }

    public add(leftValue: T, rightValue: T) {
        const node = this.getLowestLeaf(this.root);
        node.setLeft(new BinaryNode<T>(leftValue));
        node.setRight(new BinaryNode<T>(rightValue));
    }
}