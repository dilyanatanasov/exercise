const waitForNumber = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
            resolve("todor");
    });
}
(async () => {
    let name = await waitForNumber();
    console.log({name})
})()
