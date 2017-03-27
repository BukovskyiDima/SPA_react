import fetchMock from 'fetch-mock';

const user = {
    user: {
        name: 'admin',
        password: '12345'
    }
};

const storage = (key, value) => {
    const ls = localStorage;
    const serverData = ls.server ? JSON.stringify(ls.server) : Object.assign({}, user);

    if (value) {
        serverData[key] = value;
        ls.server = serverData;
    }

    return serverData[key];
};

fetchMock.post('login', (url, options) => {
    const body = options.body,
        savedUser = storage([body.email]);
    let response;

    if (savedUser && savedUser === body.password) {
        response = {
            body: {
                name: savedUser.name
            }
        };
    } else {
        response = {
            throws: 'User not found',
            status: 404
        };
    }

    return response;
});

fetchMock.post('create', (url, options) => {
    const { name, email, password } = options.body;
    let response;

    if (name && email && password) {
        response = {
            body: 'User was created'
        };
        storage(name, password);
    } else {
        response = {
            throws: 'Fill all fields',
            status: 403
        };
    }

    return response;
});

export default storage;