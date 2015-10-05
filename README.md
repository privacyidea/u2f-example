This is an example implementation of a Web Application 
using privacyIDEA to authenticate.

privacyIDEA is a system for managing two factor authentication.
See https://www.privacyidea.org.

It is also hosted at github
https://github.com/privacyidea/privacyidea


This example uses angularJS to run as a single page application.

You can simple call the index.html file.

Configuration
=============

In *app.js* you need to configure ``privacyIdeaHost`` to your needs.


If you get the error

*No 'Access-Control-Allow-Origin' header is present on the requested resource.*

set the allowed origins in your Apache config like

    Header set Access-Control-Allow-Origin "*"

If you get the error 

*Request header field Content-Type is not allowed by Access-Control-Allow-Headers.*

set the allowed headers like:

    Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"


Todo
====

* Add challenge response
