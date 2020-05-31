---
layout: post
title:  "Hello World!"
date:   2020-01-23 20:02:39 +0545
categories: Casual
tags:
  - Announcement
image:
  path: /assets/img/hello_world.png
  thumbnail: /assets/img/hello_world.png
share: False
---
Hey there, fellow human being (or a sentient AI)! What a fortunate stroke of serendipity that you stumbled upon this part of the internet that I call my own.
Now that you are here, I would like to ask you a question. 

> If you were to meet your 10 year old self today, what would he/she think of you? 

We all had moonshots to aim for at that age, didn't we? I'd like to think very few are today what their 10 year old self had imagined them to be. This arduous journey of growing up and finding a living has been a chain of improvisations. Those who don't have castles still find a fenced home to live in and those who don't have that too still make do with a makeshift hut.

The overarching theme of this blog is to give a safe haven to the musings of an up and coming engineer about the roads that he left untravelled, the hills he did climb and the oceans he is yet to cross in this never-ending walk of improvisations. Back when I was small, I had an obsession with time travel. Infact, I was so passionate about it that some of my innocent friends actually thought I would be the one to do it. It is a subject of sweet remembrance and nostalgic laughter now. Currently, I have devoted my life to swimming in the ocean of Artifical Intelligence. I am nowhere near an adept swimmer and I have just gotten my feet wet. The idea of facing the *Inferirority Complex tides*, encountering the *Impostor Syndrome sharks*, stumbling onto the *Praise and Recognition pearls* and discovering the *Self satisfaction islands* make me both excited and nervous. Here, I will try to document every interesting splash along the way.

The problem is that I am a master procrastinator. I have procrastinated the creation of this very space for quite some time now and I give no guarantees on how frequently I will open this door. But I hope I will have quite a few articles by the time AI bots take over the blogging world too! If you are still wondering if this blog could be of any interest, here's a list of things I will be rambling about if I outwit my [Instant Gratification Monkey](https://waitbutwhy.com/2013/10/why-procrastinators-procrastinate.html):

- Machine Learning / Deep Learning

- Philosophy

- Football (Soccer)

- Science and Technology in General

If any of the above interest you, stay tuned.

{% highlight python %}
import blog
import random
from mind import thoughts, rationality, procrastination

topics_of_interest = [
  "Machine Learning",
  "Philosophy",
  "Football",
  "Science and Technology in General"
  ]

def post_article(topic):
  article = blog.Article(topic=topic)
  while not thoughts.empty(topic):
    sentences = thoughts.fetch(topic)
    article.add(sentences)
  blog.publish(article)

while True:
  if rationality.weight > procrastination.weight:
    topic = random.choice(topics_of_interest)
    post_article(topic)
  else:
    procrastination.procrastinate()
{% endhighlight %}
