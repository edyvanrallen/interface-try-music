function login() {
    event.preventDefault();
    const url = "http://localhost:8080/login";

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //`${2}`

    data = {
        "email": email,
        "password": password
    }

    const api = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    api.interceptors.response.use(
            response => {

                // Do something with response data

                return response
            },
            error => {

                // Do something with response error

                // You can even test for a response code
                // and try a new request before rejecting the promise

                if (
                    error.request._hasError === true &&
                    error.request._response.includes('connect')
                ) {
                    Alert.alert(
                        'Aviso',
                        'Não foi possível conectar aos nossos servidores, sem conexão a internet', [{ text: 'OK' }], { cancelable: false },
                    )
                }

                if (error.response.status === 401) {
                    const requestConfig = error.config

                    // O token JWT expirou

                    deleteUser().then(() => {
                        navigate('AuthLoading', {})
                    })

                    return axios(requestConfig)
                }

                return Promise.reject(error)
            },
        )
        /*axios.post(url, data)
            .then((res) => {
                if (res.data.accesToken) {
                    console.log(JSON.stringify(res.data));
                }
            }).catch((err) => {
                console.log(err);
            })*/
    api.interceptors.request.use(
        config => {
            return getUser()
                .then(user => {
                    user = JSON.parse(user)
                    if (user && user.token)
                        config.headers.Authorization = `Bearer ${user.token}`
                    return Promise.resolve(config)
                })
                .catch(error => {
                    console.log(error)
                    return Promise.resolve(config)
                })
        },
        error => {
            return Promise.reject(error)
        },
    )

}