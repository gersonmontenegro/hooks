export const add = (n, dispatch = null, addNoMemoCount = null) => {
    dispatch && dispatch(addNoMemoCount());
    return n + 10;
};

const memoizedAdd = () => {
    let cache = {};
    return (n, dispatch, addMemoCount) => {
        if (n in cache) {
            dispatch(addMemoCount());
            return cache[n];
        } else {
            const result = add(n);
            cache[n] = result;
            return result;
        }
    }
}

export const memoAdd = memoizedAdd();
