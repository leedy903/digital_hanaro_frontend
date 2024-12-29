class Triple {
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple());

console.log(typeof null);
