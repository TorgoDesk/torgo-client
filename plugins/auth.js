export default async function ({ app }) {
    if (!app.$auth.loggedIn) {
        return
    }
    const auth = app.$auth;
    const authStrategy = auth.strategy.name;
    if (authStrategy === 'facebook' || authStrategy === 'google') {
        const token = auth.getToken(authStrategy).substr(7)
        const url = `/oauth?token=${token}&external_type=${authStrategy}`;
        try {
            const {data} = await app.$axios.$post(url, null);
            auth.setToken('local', "Bearer "+ data.token);
            setTimeout( async () => {
                auth.setStrategy('local');
                setTimeout( async () => {
                    await auth.fetchUser();
                })
            });
        } catch (e) {
            console.log(e);
        }
    }
}
