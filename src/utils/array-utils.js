const ArrayUtils = {
    // Get unique objects from arrays
    getUniqueObjects : (array, key) => {
        return array.map(e => e[key])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => array[e]).map(e => array[e]);
    }
};

export default ArrayUtils;