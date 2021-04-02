# [Discover](https://app.rocketseat.com.br/discover)  

## HTTP

HyperText Transfer Protocol  

_tools_:  

[Chrome DevTools](https://developer.chrome.com/docs/devtools/)  

[curl](https://curl.se/):  

_using [Git Bash](https://git-scm.com/download/win)_  

```
curl https://google.com
```

```
curl -i https://google.com
```

```
curl -v https://google.com
```

_concepts_:  

[Stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol)  

[Cokkie](https://en.wikipedia.org/wiki/HTTP_cookie)  

[User agent](https://en.wikipedia.org/wiki/User_agent)  

[Request methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)  

[Status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)  

[Proxy server](https://en.wikipedia.org/wiki/Proxy_server)  

[IP](https://en.wikipedia.org/wiki/Internet_Protocol)  

[URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)  

- [URL](https://en.wikipedia.org/wiki/URL)  

- [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name)  

[HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)  

[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)  

[Idempotence](https://en.wikipedia.org/wiki/Idempotence)  

- In the Hypertext Transfer Protocol (HTTP), idempotence and safety are the major attributes that separate HTTP verbs. Of the major HTTP verbs, GET, PUT, and DELETE should be implemented in an idempotent manner according to the standard, but POST need not be. GET retrieves a resource; PUT stores content at a resource; and DELETE eliminates a resource. As in the example above, reading data usually has no side effects, so it is idempotent (in fact nullipotent). Storing and deleting a given set of content are each usually idempotent as long as the request specifies a location or identifier that uniquely identifies that resource and only that resource again in the future. The PUT and DELETE operations with unique identifiers reduce to the simple case of assignment to an immutable variable of either a value or the null-value, respectively, and are idempotent for the same reason; the end result is always the same as the result of the initial execution, even if the response differs.  

HTTP Method | Idempotence |    Safety
----------- | ----------- | -----------
GET         |     YES     |     YES    
HEAD        |     YES     |     YES    
PUT         |     YES     |     NO     
DELETE      |     YES     |     NO     
POST        |     NO      |     NO     
PATCH       |     NO      |     NO     

[{JSON} Placeholder](http://jsonplaceholder.typicode.com/)

[JSON Server](https://github.com/typicode/json-server)  

```
npm install -g json-server
```

```
cd JSON
```

```
json-server --watch db.json
```

```
http://localhost:3000
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile
```

**_Git Bash:_**

```
curl http://localhost:3000/posts
```

OPTIONS

```
curl -X OPTIONS http://localhost:3000/posts -i
```

GET

```
curl http://localhost:3000/posts
```

```
curl -v http://localhost:3000/posts
```

```
curl -v http://localhost:3000/posts\?q\=json
```

```
curl http://localhost:3000/posts\?q\=json
```

HEAD

```
curl -I http://localhost:3000/posts
```

POST _(often used to store data)_

```
cd JSON
```

```
cat db.json
```

```
curl -d '{ "id": 2, "title": "json-server-2", "author": "marcelo" }' -H "Content-type: application/json" -X POST http://localhost:3000/posts
'
```

```
cat db.json
```

PUT _(often used to update data)_

```
cd JSON
```

```
json-server --watch db.json
```

```
curl http://localhost:3000/profile
```

```
curl -d '{"name": "marcelo"}' -H 'Content-type: application/json' -X PUT http://localhost:3000/profile
```

```
curl -d '{"name": "marcelo"}' -H 'Content-type: application/json' -X PUT http://localhost:3000/profile -i
```

PATCH (used for making partial changes to an existing resource)

```
curl -X OPTIONS http://localhost:3000/posts -i
```

```
curl -d '{"title": "my-title"}' -H 'Content-type: application/json' -X PATCH http://localhost:3000/posts/1
```

```
curl -d '{"title": "JSON"}' -H 'Content-type: application/json' -X PATCH http://localhost:3000/posts/1
```

DELETE

```
curl http://localhost:3000/posts
```

```
curl http://localhost:3000/posts/1
```

```
curl http://localhost:3000/posts/2
```

```
curl -X DELETE http://localhost:3000/posts/2
```

[List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)  

- General

- Response Headers

- Request Headers

![devtools](README_img_headers.PNG)