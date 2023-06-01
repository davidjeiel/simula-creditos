export async function Request(url = "", data = {}, options = '') 
{
    const response = await fetch(url, {
      method: options.method = '' ? 'GET': options.method , // *GET, POST, PUT, DELETE, etc.
      mode: options.mode = ''? "cors": options.mode,   // no-cors, *cors, same-origin
      cache: options.cache = '' ? "no-cache": options.cache, // *default, no-cache, reload, force-cache, only-if-cached
      credentials: options.credentials = ''? "same-origin": options.credentials, // include, *same-origin, omit
      headers: { 
        "Content-Type": "application/json",
      },
      redirect: options.redirect = ''? "follow" : options.redirect, // manual, *follow, error
      referrerPolicy: options.refererPolicy = ''? "no-referrer" : options.refererPolicy, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }