class ArrayList {
    constructor(array = []) {
        this.list = ArrayList.arrayToList(array);
    }

    static arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list = { value: array[i], rest: list };
        }
        return list;
    }

    static listToArray(list) {
        const array = [];
        while (list) {
            array.push(list.value);
            list = list.rest;
        }
        return array;
    }

    add(value, index = null) {
        if (index === null || index >= this.size()) {
            this.list = { value, rest: this.list };
        } else {
            let node = this.list;
            let i = 0;
            while (i < index - 1 && node.rest) {
                node = node.rest;
                i++;
            }
            node.rest = { value, rest: node.rest };
        }
    }

    remove(index) {
        if (index === 0) {
            this.list = this.list.rest;
        } else {
            let node = this.list;
            let i = 0;
            while (i < index - 1 && node.rest) {
                node = node.rest;
                i++;
            }
            if (node.rest) {
                node.rest = node.rest.rest;
            }
        }
    }

    print() {}

    get(index) {
        let node = this.list;
        let i = 0;
        while (i < index && node) {
            node = node.rest;
            i++;
        }
        return node ? node.value : undefined;
    }

    set(index, value) {
        let node = this.list;
        let i = 0;
        while (i < index && node) {
            node = node.rest;
            i++;
        }
        if (node) {
            node.value = value;
        }
    }

    size() {
        let node = this.list;
        let count = 0;
        while (node) {
            count++;
            node = node.rest;
        }
        return count;
    }

    indexOf(value) {
        let node = this.list;
        let index = 0;
        while (node) {
            if (node.value === value) return index;
            node = node.rest;
            index++;
        }
        return -1;
    }

    contains(value) {
        return this.indexOf(value) !== -1;
    }

    isEmpty() {
        return this.list === null;
    }

    peek() {
        return this.list ? this.list.value : undefined;
    }

    toArray() {
        return ArrayList.listToArray(this.list);
    }

    clear() {
        this.list = null;
    }

    *iterator() {
        let node = this.list;
        while (node) {
            yield node.value;
            node = node.rest;
        }
    }
}

ArrayList.listToArray({ value: 1, rest: { value: 2 } });
ArrayList.arrayToList([1, 2]);

const alist = new ArrayList([1, 2]);
alist.add(3);
alist.add(5, 1);
alist.remove(2);
alist.add(22, 1);
alist.add(33, 1);
alist.print();
alist.set(1, 3000);
alist.get(2);
alist.indexOf(300);
alist.contains(300);
alist.isEmpty;
alist.peek;
alist.toArray();
alist.iterator().next();
alist.clear();
