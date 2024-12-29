const my_favorite_genre = ["액션", "연애", "코미디", "스릴러"];
const friend_favorite_genre = ["액션", "스릴러", "범죄", "공포", "호러"];

function intersect(arr1, arr2) {
    return [...new Set(arr1)].filter((elem) => new Set(arr2).has(elem));
}

function diff(arr1, arr2) {
    return [...new Set(arr1)].filter((elem) => !new Set(arr2).has(elem));
}

function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// union
console.log(union(my_favorite_genre, friend_favorite_genre));

// intersection
console.log(intersect(my_favorite_genre, friend_favorite_genre));

// diff
console.log(diff(my_favorite_genre, friend_favorite_genre));
console.log(diff(friend_favorite_genre, my_favorite_genre));
