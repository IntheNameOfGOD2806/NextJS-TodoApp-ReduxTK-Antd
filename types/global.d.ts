declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
      interface ITodo {
        id: string;
        title: string;
        completed: boolean
    }
}
export { };