function getUsers() {
    const usernames = [];
    const count = 1000;

    for (let i = 0; i < count; i++) {
        const firstName = "Tapas";
        const lastName = "Adhikary";

        const username = `${firstName}${lastName}`;
        usernames.push(username);
    }

    return usernames;
}

export { getUsers };
