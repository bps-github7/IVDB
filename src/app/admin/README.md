### Admin Feature module

deals with functionality available only to users with top level elevated privalleges
NOTE that all routes contained within must be guarded with AuthGuard. failing to do so 
will cause major site security exploits.

#### generally there are 4-5 major sub routes in this module
1. games
2. game/info
3. forums
4. users

each sub route exposes componentry related to administrating these areas of the site.
forms is an exception, it is a utility folder which contains all all forms used in admin module.