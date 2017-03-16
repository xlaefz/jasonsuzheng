# jasonsuzheng.com: Purpose
<!---
Why I rebuilt my website, again, and the reasoning behind my technology choices.
:01/01/16
-->
###### January 1, 2016

### Why

This really breaks down into a couple things, SEO, learning, and fun. My old
website was terribly outdated, not in it's technologies or design (though I'm
sure some people would argue that), but in it's content. I just couldn't will
myself to update anything on it because everything was in straight HTML. Which
is why projects on this website are written using
![link](https://bytebucket.org/strawht/personal_website/raw/ea96d4ffda73f22512a69dbfd590bc9e16a87777/static/images/4.jpg?token=fd1463f6ce1b570ba29178d082b29cf7a977c25b)
.

#### Markdown

I take all my notes in markdown, and it's a really quick way to create styled
text without all the markup from HTML. It's just a personal preference thing.
It's also great because now all my projects will be styled the same without me
having to remember classes or ids or tags or whatever with HTML. I get a nice
cohesive website without any troubles.

A side benefit is that I don't need to have a database for my project
entries, just have to save all my markdown files on the server and have it
served. This might not be best practices, but I didn't want to build a CMS, so
this was a compromise.

#### SEO

I really wanted server side rendering for SEO. I pretty much don't exist
according to . My old site had virtually no search engine optimization
because I used Angular 1.3 and it was completely client rendered. I know it's
possible with Angular to get search engine optimization but I didn't find any
solution very clean or affordable. Hence the move to React/Flux and a
"universal" app. Ooohhh buzz words, added benefit of the technology change.

Oh and go ahead, turn off Javascript. You can still view all content as
intended. This goes along with the server rendering and SEO but mainly I'm able
to support older browsers and broader range of devices.

#### Learning

I've been using React and Redux for all my projects as of recent but they were
all hacked together with warnings left and right, so I wanted to make something
using the technologies more correctly (I make no claims that I didn't hack some
stuff together for this website). I definitely learned the most about webpack.
I understood practically none of it before but now I can at least say I put
together my own webpack config.

#### Fun

I wanted to challenge myself. I've been in the web development scene for a
couple years now and everything started to feel repetitive. I was getting bored
of web development and needed a way to get back into it. Redoing my website was
how I did it. I strayed from web development for awhile to do mostly iOS things
but this was my way back.

### Purpose

I didn't make this website just because, I want to create a collection of
resources I wish I had when I was starting out in web development. There will be
a projects containing short tutorials, things I discover and find interesting in
the web dev world, and probably some rants here and there. Hopefully I can
spread some knowledge =D.

### Random Code Snippet

How to vertically align something with css.

```css
.vertically-align {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```
