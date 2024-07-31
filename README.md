# How Web Works

### Vanilla Approach (HTML, CSS, JS)

- Client sends a request to the server for the content (HTML, CSS, JS) and client receives this files from the server and parse the files (HTML -> CSS -> JS)

- If there were multiple pages, then client sends different requests to the server for each page and for each request, client receives the files from the server and parse the files

Now let's check in the perspective of

- `Processing`
- `Bandwidth`
- `Load Time`

Let's discuss these points and understand it well

- Most processing occurs mostly on the `client side` which means that user's browser is responsible for rendering and executing these files (HTML, CSS, JS) but with more complexity and extra capabilities, the `performance` / `processing` power decreases

- As the server sends all the files to `client side` (HTML, CSS, JS) on each request, it increases the bandwidth usage and this mostly occurs when dealing with complex websites and load time is also affected by this as every file is sent to client side (which is a problem )