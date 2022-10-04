const URL = "https://swapi.dev/api/people/1";

// Using the `Promise` API with `.then()`,
// to call a callback function with the response when it arrives.
// "Non-blocking", code continues running while request happens in the background.
//
// `Promise.then`
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
function fetchDataWithPromiseApi() {
    const promise = fetch(URL, {
        method: "GET",
    });

    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        });
}

// Using `async` functions with the `await` keyword,
// to wait for the response to arrive before resuming code execution.
// "Blocking", code waits until request finishes and response is available.
//
// `async function`
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// `await`
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
async function fetchDataWithAsync() {
    const response = await fetch(URL, {
        method: "GET",
    });
    console.log({ status: response.status });
    const json = await response.json();
    return json;
}

// fetchDataWithPromiseApi();

fetchDataWithAsync().then(function (json) {
    console.log(json);
});

console.log("This should appear FIRST in the console!");
