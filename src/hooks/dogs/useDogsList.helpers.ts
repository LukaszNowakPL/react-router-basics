export const filterDogs = (dogs: string[]) => {
    return dogs.filter(dog => ['jpg', 'png', 'gif'].includes(dog.toLowerCase().substring(dog.length - 3))).slice(0, 20);
};
