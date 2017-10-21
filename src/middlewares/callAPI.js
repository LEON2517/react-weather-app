export default store => next => action => {
    const {callAPI} = action;


    fetch(callAPI, {mode:'no-cors'})
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function(response) {
                    next({action, response})
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}