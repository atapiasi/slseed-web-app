<template lang="pug">
section
  h2.ui.dividing.header Card
  .ui.four.stackable.cards
    .ui.card
      .image
        .ui.blurring.inverted.dimmer
          .content
            .center
              .ui.teal.button Add Friend

        img(src="/static/images/theme/wireframe/image.png")

      .content
        .header Title
        .meta
          a.group Meta

        .description One or two sentence description that may go to several lines

      .extra.content
        a.right.floated.created Arbitrary
        a.friends Arbitrary

    .ui.card
      .blurring.dimmable.image
        .ui.dimmer
          .content
            .center
              .ui.inverted.button Call to Action

        img(src="/static/images/theme/wireframe/image.png")

      .content
        a.header Name
        .meta
          span.date Date

      .extra.content
        a
          i.users.icon
          | Users

    .ui.card
      .ui.slide.right.reveal.image
        .visible.content
          img.ui.fluid.image(src="/static/images/theme/avatar/nan.jpg")

        .hidden.content
          img.ui.fluid.image(src="/static/images/theme/avatar/tom.jpg")

      .content
        img.ui.wireframe.image(src="/static/images/theme/wireframe/paragraph.png")

    .ui.card
      .ui.move.reveal.image
        .visible.content
          img.ui.fluid.image(src="/static/images/theme/avatar/tom.jpg")

        .hidden.content
          img.ui.fluid.image(src="/static/images/theme/avatar/nan.jpg")

      .content
        img.ui.wireframe.image(src="/static/images/theme/wireframe/paragraph.png")

  .ui.four.stackable.cards
    .ui.card
      .extra.content
        span.left.floated.like
          i.like.icon
          | Like

        span.right.floated.star
          i.star.icon
          | Favorite

      .content
        img.ui.wireframe.image(src="/static/images/theme/wireframe/paragraph.png")

    .ui.card
      .content
        .header
          img.ui.avatar.right.spaced.image(src="/static/images/theme/wireframe/square-image.png")
          |  Abbreviated Header

        .description
          img.ui.wireframe.image(src="/static/images/theme/wireframe/paragraph.png")

      .ui.two.bottom.attached.buttons
        .ui.button Action 1
        .ui.button Action 2

    a.ui.card(href='#')
      .content
        .header Cute Dog
        .meta
          span.category Animals

        .description
          img.ui.wireframe.image(src="/static/images/theme/wireframe/paragraph.png")

      .extra.content
        .right.floated.author
          img.ui.avatar.image(src="/static/images/theme/wireframe/square-image.png")
          |  Username

    .ui.card
      .ui.two.top.attached.basic.buttons
        .ui.button Action 1
        .ui.button Action 2

      .content
        img.ui.wireframe.image(src="/static/images/theme/wireframe/paragraph.png")

      .ui.two.bottom.attached.basic.buttons
        .ui.button Action 3
        .ui.button Action 4

  .ui.four.stackable.cards
    .card
      .content Content 1
      .content Content 2
      .content Content 3
      .extra.content Extra Content

    .card
      .content Content 1
      .content Content 2
      .content Content 3
      .extra.content Extra Content

    .card
      .content Content 1
      .content Content 2
      .content Content 3
      .extra.content Extra Content

    .card
      .content Content 1
      .content Content 2
      .content Content 3
      .extra.content Extra Content

  .ui.four.stackable.cards
    .card
      .image
        img(src="/static/images/theme/wireframe/image.png")

      .extra.center.aligned
        .ui.star.rating(data-rating='4')

    .card
      .image
        img(src="/static/images/theme/wireframe/image.png")

      .extra.center.aligned
        .ui.star.rating(data-rating='2')

    .card
      .image
        img(src="/static/images/theme/wireframe/image.png")

      .extra.center.aligned
        .ui.star.rating(data-rating='3')

    .card
      .image
        img(src="/static/images/theme/wireframe/image.png")

      .extra.center.aligned
        .ui.star.rating(data-rating='4')
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    this.$$('.star.rating').rating();

    this.$$('.special.card .image').dimmer({
      on: 'hover'
    });

    this.$$('.card .dimmer').dimmer({
      on: 'hover'
    });
  }
});
</script>
