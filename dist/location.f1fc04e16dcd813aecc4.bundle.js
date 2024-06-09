"use strict";
(self["webpackChunkweather_app_node_old"] = self["webpackChunkweather_app_node_old"] || []).push([["location"],{

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCityFromLocation: () => (/* binding */ getCityFromLocation)
/* harmony export */ });
// Function to get current position
function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// Function to get city name from coordinates
async function getCity(lat, lng) {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=pk.1b3227ba0f772bfdf526d12d4b1c6762&lat=${lat}&lon=${lng}&format=json`;

    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data.address.city;
    } else {
        throw new Error(`Error: ${response.statusText}`);
    }
}

// Main function to get city name using current position
async function main() {
    try {
        const position = await getCurrentPosition();
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const city = await getCity(lat, lng);
        return city; // Return the city value
    } catch (error) {
        console.error(error);
        return null; // Return null in case of an error
    }
}

// Function to execute main and store the city value
async function getCityFromLocation() {
    const city = await main();
    return city;
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/location.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uZjFmYzA0ZTE2ZGNkODEzYWVjYzQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RyxJQUFJLE9BQU8sSUFBSTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0NBQWtDLG9CQUFvQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLE1BQU07QUFDTjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLW5vZGUtb2xkLy4vc3JjL2pzL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHBvc2l0aW9uXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGdldCBjaXR5IG5hbWUgZnJvbSBjb29yZGluYXRlc1xyXG5hc3luYyBmdW5jdGlvbiBnZXRDaXR5KGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91czEubG9jYXRpb25pcS5jb20vdjEvcmV2ZXJzZS5waHA/a2V5PXBrLjFiMzIyN2JhMGY3NzJiZmRmNTI2ZDEyZDRiMWM2NzYyJmxhdD0ke2xhdH0mbG9uPSR7bG5nfSZmb3JtYXQ9anNvbmA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YS5hZGRyZXNzLmNpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTWFpbiBmdW5jdGlvbiB0byBnZXQgY2l0eSBuYW1lIHVzaW5nIGN1cnJlbnQgcG9zaXRpb25cclxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBnZXRDdXJyZW50UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgY29uc3QgbG5nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGF3YWl0IGdldENpdHkobGF0LCBsbmcpO1xyXG4gICAgICAgIHJldHVybiBjaXR5OyAvLyBSZXR1cm4gdGhlIGNpdHkgdmFsdWVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIFJldHVybiBudWxsIGluIGNhc2Ugb2YgYW4gZXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBtYWluIGFuZCBzdG9yZSB0aGUgY2l0eSB2YWx1ZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eUZyb21Mb2NhdGlvbigpIHtcclxuICAgIGNvbnN0IGNpdHkgPSBhd2FpdCBtYWluKCk7XHJcbiAgICByZXR1cm4gY2l0eTtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==